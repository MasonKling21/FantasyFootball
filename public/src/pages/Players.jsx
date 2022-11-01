import React from 'react'
import styled from 'styled-components';
import Header from './Header';

function sortBy(data, header) {
  return data.sort((a,b) => {
    if(header === "name" || header === "team" || header === "position") {
      if(a[header] < b[header]) {
        return -1;
      }
      return 1;
    }
    else {
      return b[header] - a[header];
    }
  })
}

function getIMG(team) {
  if(team === "N/A") {
    return("N/A");
  }

  return (
    <img src={require(`./logos/${team}.gif`)} alt={team}/>
  )
}

class Players extends React.Component {
  state = {
    data: [],
    head: []
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/data.json");
    const data = await response.json();

    this.setState({data: data, head: Object.keys(data[0])});
  }

  render() {
    return (
      <>
      <Header/>

      <PlayerContainer>
        <div>
          <table>
            <thead>
              <tr>
                {this.state.head.map(heading => {
                  if(heading === "id") {return}
                  return <th key={heading} onClick={() => this.setState({data: sortBy(this.state.data, heading), head: this.state.head})}>{heading}</th>
                })}
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((row,index) => {
                return <tr key={index}>
                  {this.state.head.map((key,index) => {
                    if(row["team"] === "N/A" || key === "id") {
                      return;
                    }
                    if(key === "team") {
                      return <td key={index[key]}>{getIMG(row[key])}</td>
                    }
                    return <td key={index[key]}>{row[key]}</td>
                  })}
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </PlayerContainer>
      </>
    )
  }
}

const PlayerContainer = styled.div`
  width: 80%;
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 30px 20px #00000096;
  thead {
    color: white;
    background-color: #062F4F;
  }
  tbody tr:nth-child(even) {
    color: white;
    background-color: #062F4F;
  }
  tbody tr:nth-child(odd) {
    color: white;
    background-color: #084F6F;
  }
  table th {
    text-align: left;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
  table {
    border-collapse: collapse;
  }
  img {
    display: block;
    width: 100%;
    height: 40px;
  }
  .logo {
    width: 50px;
  }
`;

export default Players;