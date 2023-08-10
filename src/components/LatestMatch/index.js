// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchesDetails} = this.props
    const data = {...latestMatchesDetails}
    return (
      <div className="latestMatchCard">
        <div className="TopBox">
          <h3>{data.competingTeam}</h3>
          <p className="date">2020-10-20</p>
          <p className="venue">{data.venue}</p>
          <p className="venue">{data.result}</p>
        </div>
        <div>
          <img className="teamLogo" src={data.competingTeamLogo} />
        </div>
        <div>
          <p className="question">First Innings</p>
          <p className="anws">{data.firstInnings}</p>
          <p className="question">Second Innings</p>
          <p className="anws">{data.secondInnings}</p>
          <p className="question">Man of The Match</p>
          <p className="anws">{data.manOfTheMatch}</p>
          <p className="question">Umpires</p>
          <p className="anws">{data.umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch

/* const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchesDetails */
