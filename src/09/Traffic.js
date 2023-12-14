import React from 'react'
import TailH1 from '../UI/TailH1'
import { useState, useEffect } from 'react'
import TrafficNav from './TrafficNav';

export default function Traffic() {
    // 상태 변수
    const [tData, setTData] = useState(); // 전체 데이터. undefined data 되지 않으려면 useState([]); 입력.
    const [c1, setC1] = useState(); // 대분류
    const [c2, setC2] = useState(); // 중분류

    const [selC1, setSelC1] = useState(); // 선택된 대분류
    const [selC2, setSelC2] = useState(); // 선택된 중분류

    const [detail, setDetail] = useState();

    // data fetcher. To avoid falling in call-back hell, use then-chaining or async-await. await 사용하려면 반드시 async 함수여야 함.
    const getData = async ()=>{
        let apikey = process.env.REACT_APP_APIKEY;
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=20&returnType=json&serviceKey=${apikey}`;

        // console.log(url);

        const resp = await fetch(url); // wait until url's been fetched. fetched data ==> put in constance 'resp'.
        const data = await resp.json(); // resp를 json 형식으로 만들어 data에 넣음.

        // console.log(data);
        setTData(data.data); // setTData method 이용, parameter를 set 뒤에 붙은 변수에 전달 ==> console에서 확인되는 data를 json type data로 설정.
    }

    
    // component 시작시 1번 실행하는 useEffect(()=>{},[]) method. 호출하지 않아도 1번 실행함. 안에 getData() method를 넣음.
    useEffect(()=>{
        getData();
    },[])
    
    // 상태변수 변경시 실행
    useEffect(()=>{
        if (tData === undefined) return;
        // console.log(tData);

        //===== 대분류 생성 =====//
        // 1. tData 순회하면서 대분류 data 추출 --> table 생성
        // let tm = tData.map(item => item.사고유형_대분류); // map method vs filter method: data array 이내 object가 들어있음. 배열의 개수만큼 map() 순회한 배열 생성됨. map parameter로 callback method 들어갈 수 있다.
        let tm = tData.map(item => item['사고유형_대분류']);
        // 2. 중복 제거
        tm = new Set(tm); //set type으로 만든다. (set type은 map() method 사용x. python 이용시 코드 단축 가능)
        // 3. set to array
        tm = [...tm]; // 전개 커맨드: ...(전개할 변수)
        // 4. state 변수에 저장. (categorize)
        setC1(tm);

        console.log(c1);
    },[tData]) // 초깃값

    // 대분류 버튼 선택시 (callback,[array])
    useEffect(()=>{
        if (tData === undefined) return;
        console.log("selC1 = ", selC1)

        //----중분류----//
        let tm = tData.filter((item)=> item.사고유형_대분류 === selC1).map((item)=>item.사고유형_중분류);

        console.log("c2 = ", tm);

        setC2(tm);
        setSelC2('');
        setDetail('');
    },[selC1]);

    useEffect(()=>{
        if (tData === undefined) return;
        let tm = tData.filter((item)=> item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2);
        tm = tm[0];
        console.log("c2 = ", tm);
    },[selC2])

  return (
    <div className='container mx-auto h-screen'>
        <div className='flex flex-col justify-top items-center w-full h-full my-8'>
            <TailH1 title={'도로교통공단_사고유형별 교통사고 통계'}></TailH1>
            <div className='w-full my-10'>
                {c1 && <TrafficNav title={'대분류'} cArr={c1} sel={selC1} setSel = {setSelC1} ></TrafficNav>}
                {c2 && <TrafficNav title={'중분류'} cArr={c2} sel={selC2} setSel = {setSelC2} ></TrafficNav>}
            </div>
        </div>
    </div>
  )
}
