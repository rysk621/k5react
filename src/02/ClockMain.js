import LogoImg from "../01/LogoImg";
import { useState } from "react";

function ClockMain() {
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString()) ; // state 변수 이용하여 화면에 나타냄.
    setInterval(()=>{
        setCtime(new Date().toLocaleTimeString()); // setting시 assignment 사용할 수 없음, setter() method 이용해야함.
    }, 1000); // 1000ms마다 다시 rendering함.
    // let ctime = new Date().toLocaleTimeString();

    return (
        <main className="App-header">
            <LogoImg />
            <div>현재 시간 : {ctime}</div>
        </main>
    );
}

export default ClockMain;