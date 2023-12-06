import React from 'react'
import { BiMoviePlay } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import TailH1 from '../UI/TailH1';
import { useEffect, useState, useRef } from "react";

export default function BoxOffice() {

    const [trs, setTrs] = useState();
    const [boxlist, setBoxlist] = useState();
    const [maxDate, setMaxDate] = useState();
    const rfDt = useRef();

    // 날짜 변경시: call fetch method w/ changed date (using Ref constance)
    const handleChange = ()=>{
        getFetchData(rfDt.current.value.replaceAll('-',''));
    }

    // 날짜 변경시 호출 - Ref 사용하지 않을 경우 1) e를 잡을 수 있다.
    // const handleChange = (e)=>{
    //     getFetchData(e.current.value.replaceAll('-',''));
    // }

    const getFetchData = (dt) => {
        // 환경변수값 가져오기
        let apikey = process.env.REACT_APP_BOXOFFICE;

        // console.log(apikey)
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
        url = url + `key=${apikey}`
        url = url + `&targetDt=${dt}`;

        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); // Date 객체는 setter 이용해서 값 변경한다.
        yesterday = yesterday.toISOString().slice(0, 10);

        console.log(yesterday);
        setMaxDate(yesterday);
        getFetchData(yesterday.replaceAll('-',''));
    }, []);

    //boxlist 변경시 실행
    useEffect(() => {

        // console.log(boxlist)
        (boxlist === undefined)
            ? setTrs(<tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>)
            : setTrs(boxlist.map((item) =>
                <tr key={item.movieCd} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:text-stone-950 hover:font-bold dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        <span className="inline-flex justify-center items-center w-5 h-5 bg-slate-500 text-white rounded-md mx-2">
                            {item.rank}
                        </span>
                        {item.movieNm}
                    </td>
                    <td className="px-6 py-4 text-right">
                        {parseInt(item.salesAmt).toLocaleString('ko-KR')}원
                    </td>
                    <td className="px-6 py-4 text-right">
                        {parseInt(item.audiCnt).toLocaleString('ko-KR')}명
                    </td>
                    <td className="px-6 py-4 ">
                        {
                            (parseInt(item.rankInten) > 0)
                                ? <span className="text-red-600">▲{item.rankInten}</span>
                                : (parseInt(item.rankInten) < 0)
                                    ? <span className="text-sky-600">▼{Math.abs(item.rankInten)}</span>
                                    : "-"
                        }
                    </td>
                </tr>)
            );
    }, [boxlist]);

    return (
        <div className='container mx-auto h-screen overflow-y-scroll'>
            BoxOffice
            <div className='flex flex-col justify-center items-center w-full h-full bg-rose-100'>
                <div className='m-8 flex items-center'>
                    <BiMoviePlay className='text-4xl text-rose-700 m-3' />
                    <TailH1 title="박스오피스" />
                    <BiSearchAlt className='text-3xl text-rose-700 m-3' />
                </div>
                <div>
                    <input type='date' ref={rfDt} onChange={handleChange} max={maxDate} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    영화명
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    매출액
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    관객수
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    증감율
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {trs}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
