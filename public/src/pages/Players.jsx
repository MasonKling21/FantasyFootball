import React from 'react'
import jsonData from './data.json'
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
        <td>{player.pass_cmp}</td>
        <td>{player.pass_att}</td>
        <td>{player.pass_yds}</td>
        <td>{player.pass_td}</td>
        <td>{player.pass_int}</td>
        <td>{player.pass_sacked}</td>
        <td>{player.pass_sacked_yds}</td>
        <td>{player.pass_rating}</td>
        <td>{player.rush_att}</td>
        <td>{player.rush_yds}</td>
        <td>{player.rush_td}</td>
        <td>{player.targets}</td>
        <td>{player.rec}</td>
        <td>{player.rec_yds}</td>
        <td>{player.rec_td}</td>
        <td>{player.fumbles_lost}</td>
        <td>{player.rush_scrambles}</td>
        <td>{player.designed_rush_att}</td>
        <td>{player.two_point_conv}</td>
        <td>{player.total_ret_td}</td>
        <td>{player.offensive_fumble_recovery_td}</td>
        <td>{player.pass_yds_bonus}</td>
        <td>{player.rush_yds_bonus}</td>
        <td>{player.rec_yds_bonus}</td>
        <td>{player.pass_target_yds}</td>
        <td>{player.pass_poor_throws}</td>
        <td>{player.pass_hurried}</td>
        <td>{player.rush_yds_before_contact}</td>
        <td>{player.rush_yac}</td>
        <td>{player.pass_blitzed}</td>
        <td>{player.rush_broken_tackles}</td>
        <td>{player.rec_air_yds}</td>
        <td>{player.rec_yac}</td>
        <td>{player.rec_drops}</td>
        <td>{player.offense}</td>
        <td>{player.off_pct}</td>
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
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Position</th>
              <th>Name</th>
              <th>2021 Points</th>
              <th>pass_cmp</th>
              <th>pass_att</th>
              <th>pass_yds</th>
              <th>pass_td</th>
              <th>pass_int</th>
              <th>pass_sacked</th>
              <th>pass_sacked_yds</th>
              <th>pass_rating</th>
              <th>rush_att</th>
              <th>rush_yds</th>
              <th>rush_td</th>
              <th>targets</th>
              <th>rec</th>
              <th>rec_yds</th>
              <th>rec_td</th>
              <th>fumbles_lost</th>
              <th>rush_scrambles</th>
              <th>designed_rush_att</th>
              <th>two_point_conv</th>
              <th>total_ret_td</th>
              <th>offensive_fumble_recovery_td</th>
              <th>pass_yds_bonus</th>
              <th>rush_yds_bonus</th>
              <th>rec_yds_bonus</th>
              <th>pass_target_yds</th>
              <th>pass_poor_throws</th>
              <th>pass_hurried</th>
              <th>rush_yds_before_contact</th>
              <th>rush_yac</th>
              <th>pass_blitzed</th>
              <th>rush_broken_tackles</th>
              <th>rec_air_yds</th>
              <th>rec_yac</th>
              <th>rec_drops</th>
              <th>offense</th>
              <th>off_pct</th>
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