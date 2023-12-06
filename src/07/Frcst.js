import { useEffect, useState } from 'react'
import TailH1 from '../UI/TailH1';
import TailButton from '../UI/TailButton';

export default function Frcst() {
    //상태변수 useState로 저장
    const [dataF, setDataF] = useState();
    const [dtTags, setDtTags] = useState();
    const [cnTags, setCnTags] = useState();

    //key 배열
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    const getData = () => {

        //fetch할 주소
        let url = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?";
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&returnType=json&numOfRows=100&pageNo=1`;
        url = url + `&searchDate=2023-11-30`;
        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => setDataF(data.response.body.items[0]))

            .catch(err => console.log(err))
    }

    //날짜 선택시 실행되는 사용자 정의 함수
    const handleDtClick = (idx) => {

        let tm = dataF[cnKey[idx]].split(",");
        tm = tm.map((item) => item.split(":"));
        tm = tm.map((item, idx) =>
            <div key={`cn${idx}`} className='flex flex-col justify-center items-center rounded-md m-3 bg-sky-300 border-solid'>
                <div className='p-2 items-center justify-center w-full bg-rose-200'>{item[0]}</div>
                <div className='w-full bg-sky-100'>{item[1]}</div>
            </div>
        )
        setCnTags(tm);
    }

    //component 생성될 때 한 번 useEffect() method 사용, useEffect()의 parameter는 call back method를 사용한다.
    useEffect(() => {
        //APIKEY 확인(key 확인은 process 사용)
        //console.log(process.env.REACT_APP_APIKEY)

        //사용자 정의 함수, fetch 역할 하는 getData() method 사용
        getData();
    }, []);

    //state변수 dataF가 변경되었을 때 실행
    useEffect(() => {
        if (dataF === undefined) return;
        console.log(dataF)
        let tm = dtKey.map((k, idx) => //key 설정
            //<div key={`dt${idx}`} onClick={() => handleDtClick(idx)}>{dataF[k]}</div>
            <TailButton key={`dt${idx}`} caption={dataF[k]} handleClick={() => handleDtClick(idx)} />
        )
        setDtTags(tm);

    }, [dataF]);

    return ( //falsy 연산, 삼항연산자와 동일. dataF undefined이면 연산자 뒤쪽 실행문은 수행하지 않음.
        dataF &&
        <div className='flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto'>
            <div className='flex justify-center items-center h-20'>
                <TailH1 title={"초미세먼지 예보"}></TailH1>
            </div>
            <div className='grow flex flex-col justify-top'>
                <div className='flex justify-center items-center p-2'>
                    {dtTags}
                </div>
                <div className='grid grid-cols-5 justify-center items-center p-5 m-2 bg-slate-50'>
                    {cnTags}
                </div>
            </div>
        </div>
    )
}
