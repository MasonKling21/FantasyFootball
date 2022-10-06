import React from 'react'
import jsonData from './data2.json'
import styled from 'styled-components';
import Header from './Header';

function Players() {

  const getIMG = ({player}) => {

    return (
      <img src={require(`./logos/${player.team}.gif`)} alt={player.team}/>
    )
  }

  const displayData = jsonData.map((player) => {

    if(player.team === "N/A") {
      return("");
    }

    return(
      <tr>
        <td className='logo'>{getIMG({player})}</td>
        <td>{player.position}</td>
        <td>{player.name}</td>
        <td>{player.points}</td>
        <td>...</td>
      </tr>
    )
  }
  )

  return (
    <>
    <Header/>

    <PlayerContainer>
      <div>
        <table className='center'>
          <thead>
            <tr>
              <th>Team</th>
              <th>Position</th>
              <th>Name</th>
              <th>2021 Points</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {displayData}
          </tbody>
        </table>
      </div>
    </PlayerContainer>
    </>
  );
}

const PlayerContainer = styled.div`
  padding: 20px;
  .center {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
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
  }
  table {
    border-collapse: collapse;
    box-shadow: 0px 0px 30px 20px #00000096;
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