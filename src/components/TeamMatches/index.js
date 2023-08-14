// Write your code here
import {Component} from 'react'

import './index.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
    state = {
    data: '',
    team: null,
    loading: true,
  }


  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = await this.props
    const {params} = await match
    const {id} = params
    const teamResponse = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await teamResponse.json()

    
    const latestMatchDetails = data.latest_match_details

    const NewRecentMatches = data.recent_matches.map(each => ({
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

     const newData = {
      teamBannerurl: data.team_banner_url,
      latestMatches,
      recentMatches: NewRecentMatches,
    }
    this.setState({
      team: id,
      loading: false,
      data: newData,
    })
  }

let bannerColor
    if (team === 'RCB') {
      bannerColor = 'rcb'
    } else if (team === 'CSK') {
      bannerColor = 'csk'
    } else if (team === 'KXP') {
      bannerColor = 'kxp'
    } else if (team === 'KKR') {
      bannerColor = 'kkr'
    } else if (team === 'MI') {
      bannerColor = 'mi'
    } else if (team === 'SRH') {
      bannerColor = 'srh'
    } else if (team === 'DC') {
      bannerColor = 'dc'
    } else if (team === 'RR') {
      bannerColor = 'rr'
    }
  
  render() {
     const {data, team, loading} = this.state
     const {teamBannerurl, latestMatches, recentMatches} = data
    return loading ? (
      <div data-testid="loader" className="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`TeamContainer ${bannerColor}`}>
        <img alt="team banner" className="banner" src={teamBannerurl} />
        <h2 className="latesMatchesHeading">Latest Matches</h2>
        <LatestMatch key={latestMatches.id} matches={latestMatches} />
        <ul>
          {recentMatches.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
