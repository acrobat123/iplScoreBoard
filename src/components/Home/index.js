// Write your code here
import './index.css'
import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCards: []}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const iplTeams = data.teams
    const ModifiedTeamList = iplTeams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCards: ModifiedTeamList})
  }

  render() {
    const {teamCards} = this.state
    return (
      <div className="BgContainer">
        <div className="heading-Container">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="Heading">IPL DashBoard</h1>
        </div>
        <div>
          <ul className="DashBoardContainer">
            {teamCards.map(each => (
              <TeamCard key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
