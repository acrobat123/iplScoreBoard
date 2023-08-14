// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div>
          <img alt={name} className="teamImage" src={teamImageUrl} />
        </div>
        <h3>{name}</h3>
      </li>
    </Link>
  )
}

export default TeamCard
