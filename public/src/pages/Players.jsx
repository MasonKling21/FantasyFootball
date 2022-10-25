import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import jsonData from './data.json';

var displayData;

class Players extends React.Component {
  state = {
    data: [],
    head: []
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/data.json");
    const data = await response.json();

    console.log(data[0]);

    this.setState({data: data, head: Object.keys(data[0])});

    const getIMG = ({player}) => {

      return (
        <img src={require(`./logos/${player.team}.gif`)} alt={player.team}/>
      )
    }
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
                  return <th key={heading}>{heading}</th>
                })}
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((row,index) => {
                return <tr key={index}>
                  {this.state.head.map((key,index) => {
                    return <td key={row[key]}>{row[key]}</td>
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