// Write your code here

import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
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
  } = details
  const matchStatusClass = matchStatus === 'Won' ? 'win' : 'lose'
  return (
    <li className="boxItem">
      <div>
        <img
          alt={`competing team ${competingTeam}`}
          className="TeamLogo"
          src={competingTeamLogo}
        />
      </div>
      <p className="teamHeading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
