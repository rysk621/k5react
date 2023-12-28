import MyButton from "./MyButton";
import { useState, useEffect, useRef } from "react";

export default function Ex01() {
    const arr = ['merry christmas', 'and a', 'happy new year'];
    const arrColor = ['blue', 'orange', 'green'];
    const tagArr = arr.map((item,idx)=>
        <MyButton caption={item} handleOnClick={()=>handleClick(item)} key={`mb${idx}`} bColor={arrColor[idx]} />
    );

    const [tagMsg, setTagMsg] = useState(arr[2]);
    const handleClick = (msg) =>{
        inRef.current.value === '' ? setTagMsg(msg) : setTagMsg(`${inRef.current.value}, ${msg}`);
    }
    
    //useState: 변수, useEffect: function w/ parameter(effect callback method, deps), dependency array = [] 이면 1번만 실행
    useEffect(()=>{
        console.log("tagMsg =", tagMsg);
    },[tagMsg]);

    const inRef = useRef();

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="bg-violet-100 h-10 flex justify-center items-center
                                text-lg m-5 p-5">리액트</h1>
                <div className="flex justify-center items-center w-full">
                    <form className="m-5">
                        <input type="text" placeholder="이름을 입력하세요" ref={inRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </form>
                    <div>
                        {tagArr}
                    </div>
                </div>
            </div>
            <div className="h-20 flex justify-center items-center text-xl m-5 p-5 font-bold">
                {tagMsg}
            </div>
        </>
    );
}