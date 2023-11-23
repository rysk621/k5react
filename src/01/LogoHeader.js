import LogoA from "./LogoA";
import LogoImg from "./LogoImg";
import LogoP from "./LogoP";

function LogoHeader(){
    return(
        <header className="App-header">
          <LogoImg />
          <LogoP />
          <LogoA />
        </header>
    );
}

export default LogoHeader;