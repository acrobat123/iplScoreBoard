// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  console.log(details)
  const NewRecentMatches = details.map(each => ({
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  }))

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default MatchCard
