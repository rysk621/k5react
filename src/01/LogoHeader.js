import LogoA from "./LogoA";
import LogoImg from "./LogoImg";
import LogoP from "./LogoP";

function LogoHeader(){
    return(
        <header className="App-header">
          <LogoImg />
          <LogoP msg={"부산대학교"}/>
          <LogoP msg={"K-digital 5기"}/>
          <LogoP msg={"김수정"}/>
          <LogoA />
        </header>
    );
}

export default LogoHeader;