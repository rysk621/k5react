import { useEffect, useRef, useState } from "react";
import TailH1 from "../UI/TailH1";
import TailSelect from "../UI/TailSelect";
import TailCard from "../UI/TailCard";

export default function Fest() {

    const [gugun, setGugun] = useState([]);
    const [tData, setTData] = useState([]);
    // const [ops, setOps] = useState([]);
    const [selData, setSelData] = useState([]);
    const [tag, setTag] = useState([]);

    // data fetch method
    const getData = async () => {
        let apikey = process.env.REACT_APP_APIKEY;

        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=40&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data.getFestivalKr.item); // key chain
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

        // console.log(tm);
    }, [tData])

    // useEffect(() => {
    //     //3. gu 정보를 select box option으로 추가
    //     let tm = gugun.map((item, idx) => <option key={`op${idx}`} value={item}>{item}</option>);
    //     setOps(tm);
    // }, [gugun])

    //select box value 가져오기. useRef() 먼저 변수로 선언 후 선언한 변수를 select ref에 전달.
    // const selRef = useRef();

    //select box 선택되면(onChange)
    const handleChange = (e) => {
        // console.log(selRef.current.value);
        // console.log(e.target.value);
        let tm = tData.filter(item=>item.GUGUN_NM === e.target.value);
        setSelData(tm);
        // console.log(tm);
    };

    //useEffect 작성, {tag} 넣기, tag useState 작성
    useEffect(()=>{
        let tm = selData.map((item, idx)=>
                <TailCard key={`key${idx}`} imgSrc={item.MAIN_IMG_NORMAL} title={item.TITLE} subtitle={item.TRFC_INFO} tags={item.USAGE_DAY_WEEK_AND_TIME} />
        );
        setTag(tm);
    },[selData])

    return (
        <>
            <div className="flex flex-col justify-center items-center my-10">
                <TailH1 title={'축제 정보'} />
                <form name="festForm" className="my-10 flex justify-center items-center">
                    <TailSelect opItem={gugun} handleChange={handleChange}/>
                </form>
                <div className='grid grid-cols-2 gap-2'>
                    {tag}
                </div>
            </div>
        </>
    )
}
