// Write your code here

import 

import './index.css'

const LatestMatch = props => {
  const {matches} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = matches
  return (
    <div className="latestMatchCard">
      <div className="TopBox">
        <p className="competatingTeam">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <div>
        <img
          alt={`latest match ${competingTeam}`}
          className="teamLogo"
          src={competingTeamLogo}
        />
      </div>
      <div>
        <p className="question">First Innings</p>
        <p className="anws">{firstInnings}</p>
        <p className="question">Second Innings</p>
        <p className="anws">{secondInnings}</p>
        <p className="question">Man of The Match</p>
        <p className="anws">{manOfTheMatch}</p>
        <p className="question">Umpires</p>
        <p className="anws">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
