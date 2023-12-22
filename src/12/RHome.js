import { Link, useNavigate } from "react-router-dom"
import TailButton from "../UI/TailButton"

export default function RHome() {
  const navigate = useNavigate();


  return (
    <div className="grow justify-center items-center ">
      <div className="text-xl">Home</div>
      <div className="mx-5">
        <div className="my-3">page1 이동1</div>
        <ul className="mx-5 flex">
          <li><Link to='/page1/사과'>사과❤</Link></li>
          <li><Link to='/page1/바나나'>바나나💛</Link></li>
          <li><Link to='/page1/당근'>당근🧡</Link></li>
        </ul>
      </div>
      <div className="mx-5">
        <div className="my-3">page1 이동2</div>
        <div>
          <TailButton caption={'사과'} bColor={'sky'} handleClick={()=>navigate('/page1/사과')}/>
          <TailButton caption={'바나나'} bColor={'sky'} handleClick={()=>navigate('/page1/바나나')}/>
          <TailButton caption={'당근'} bColor={'sky'} handleClick={()=>navigate('/page1/당근')}/>
        </div>
      </div>
      <div className="mx-5">
        <div className="my-3">page2 이동</div>
        <div>
          <TailButton caption={'사과'} bColor={'lime'} handleClick={()=>navigate('/page2?item1=사과&item2=바나나')}/>
          <TailButton caption={'바나나'} bColor={'lime'} handleClick={()=>navigate('/page2?item1=바나나&item2=당근')}/>
          <TailButton caption={'당근'} bColor={'lime'} handleClick={()=>navigate('/page2?item1=당근&item2=사과')}/>
        </div>
      </div>
    </div>
  )
}
