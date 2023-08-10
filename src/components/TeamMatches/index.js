// Write your code here
import {Component} from 'react'

import './index.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamBannerurl: {}, latestMatches: {}, recentMatches: {}}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = await this.props
    const {params} = await match
    const {id} = params
    const teamResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await teamResponse.json()

    const modifiedData = {
      latestMatchDetails: data.latest_match_details,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, teamBannerUrl} = modifiedData

    /* const NewRecentMatches = data.recent_matches.map(each => ({
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
    })) */
    const modifiedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    this.setState({
      teamBannerurl: teamBannerUrl,
      latestMatches: modifiedLatestMatchDetails,
      recentMatches: data.recent_matches,
    })
  }

  render() {
    const {teamBannerurl, latestMatches, recentMatches} = this.state
    return (
      <div className="TeamContainer">
        <img src={teamBannerurl} />
        <LatestMatch latestMatchesDetails={latestMatches} />
        <MatchCard details={recentMatches} />
      </div>
    )
  }
}

export default TeamMatches
