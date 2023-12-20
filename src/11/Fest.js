import { useEffect, useState } from "react";
import TailH1 from "../UI/TailH1";

export default function Fest() {

    const [gugun, setGugun] = useState([]);
    const [tData, setTData] = useState([]);

    // data fetch method
    const getData = async () => {
        let apikey = process.env.REACT_APP_APIKEY;
        
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data.getFestivalKr.item);
        setTData(data.getFestivalKr.item);
        
        // setGugun(data.getFestivalKr.item);
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        let tm = tData.map(item => item['GUGUN_NM']);
        tm = new Set(tm);
        tm = [...tm];
        setGugun(tm);

        console.log(gugun);
    },[tData])

  return (
    <>
        <div className="flex flex-col justify-center items-center my-5">
            <TailH1 title={'축제 정보'} />
            <div>
                <select className="w-full" placeholder="select" required>
                    <option></option>
                </select>
            </div>
        </div>
        <div>
            <div>

            </div>
        </div>
    </>
  )
}
