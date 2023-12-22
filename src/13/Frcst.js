import { useEffect, useState } from "react"
import getxy from './getxy.json'
import TailH1 from "../UI/TailH1";
import TailSelect from "../UI/TailSelect";
import TailButton from "../UI/TailButton";

export default function Frcst() {
    const [city, setCity] = useState([]);
    const [selData, setSelData] = useState([]);

    const tData = getxy;

    useEffect(() => {
        const tm = tData.map(item => item["1단계"]);
        setCity(tm);
        //console.log(city)
    }, [tData]);

    const onChange = (e) => {
        let tm = e.target.value;
        setSelData(tm);
        console.log(tm);
    }

    const onClick = (e) => {
        console.log(selData)
    }

    return (
        <div>
            <div className="container mx-auto px-5 h-screen">
                <div className="flex w-full my-8 flex-col items-center">
                    <TailH1 title={"단기예보"}></TailH1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-3/4 items-center">
                    <div>
                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                    </div>
                    <TailSelect opItem={city} handleChange={onChange}></TailSelect>
                    <div>
                        <TailButton caption={"초단기예보"} bColor={"sky"} handleClick={onClick}></TailButton>
                    </div>
                    <div>
                        <TailButton caption={"단기예보"} bColor={"sky"} handleClick={onClick}></TailButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
