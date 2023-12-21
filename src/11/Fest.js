import { useEffect, useState } from "react";
import TailH1 from "../UI/TailH1";

export default function Fest() {

    const [gugun, setGugun] = useState([]);
    const [tData, setTData] = useState([]);
    const [ops, setOps] = useState([]);

    // data fetch method
    const getData = async () => {
        let apikey = process.env.REACT_APP_APIKEY;

        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data.getFestivalKr.item); key chain
        setTData(data.getFestivalKr.item);
    }

    //컴포넌트 업데이트
    useEffect(() => {
        //1. data fetch, tData에 저장
        getData();
    }, [])

    useEffect(() => {
        //2. 구 정보 추출하여 gugun에 저장
        let tm = tData.map((item) => item.GUGUN_NM);
        // tm = new Set(tm); new Set(tm)과 전개연산자 동시에 사용 가능.
        tm = [...new Set(tm)].sort(); // sort(): 알파벳순 정렬
        setGugun(tm);

        console.log(tm);
    }, [tData])

    useEffect(() => {
        //3. gu 정보를 select box option으로 추가
        let tm = gugun.map((item, idx)=><option key={`op${idx}`} value={item}>{item}</option>);
        setOps(tm);
    }, [gugun])

    return (
        <>
            <div className="flex flex-col justify-center items-center my-10">
                <TailH1 title={'축제 정보'} />
                <form>
                    <div>
                        <select className="w-full my-10" placeholder="select" required>
                            <option value=''>===지역선택===</option>
                            {ops}
                        </select>
                    </div>

                </form>
                <div className='grid grid-cols-2 gap-2'>
                </div>
            </div>
        </>
    )
}
