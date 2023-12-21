import { Link } from "react-router-dom"

export default function RNav() {
  return (
    <div>
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/page1'>page1</Link></li>
            <li><Link to='/page2'>page2</Link></li>
        </ul>
    </div>
  )
}
