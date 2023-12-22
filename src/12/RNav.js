import { Link } from "react-router-dom"

export default function RNav() {
  return (
    <div className="flex justify-center items-center h-15 bg-sky-100">
      <ul className="flex">
        <li className="inline-block p-5 mx-5 hover:bg-sky-900 hover:text-sky-50">
          <Link to='/'>HOME
          </Link></li>
        <li className="inline-block p-5 mx-5 hover:bg-sky-900 hover:text-sky-50">
          <Link to='/page1'>page1
          </Link></li>
        <li className="inline-block p-5 mx-5 hover:bg-sky-900 hover:text-sky-50">
          <Link to='/page2'>page2
          </Link></li>
      </ul>
    </div>
  )
}
