import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/About">about</Link></li>
        <li><Link to="/News">News</Link></li>
      </ul>
    </div>
  )
}

export default Nav