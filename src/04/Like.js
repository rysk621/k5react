import style from './Like.module.css';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Like() {
    const [cnt, setCnt] = useState(0);
    const handleUp = () => {
        setCnt(cnt+1);
        console.log("up", cnt);
    }
    const handleDown = () => {
        if (cnt !== 0) setCnt(cnt-1); // 음수로 내려가지 않도록 함.
        console.log("down", cnt);
    }
    // 맨 처음 component 생성시 한 번만 실행됨. []: defendancy array. 얘를 한번만 실행되도록 함
    useEffect(()=>{
        console.log("Like 생성");
    }, []);

    // state 변수에 의해 component가 업데이트될 때 실행.
    useEffect(()=>{
        console.log("Like 업데이트", cnt);
    }, [cnt]);

    return (
        <div className={style.likeDiv}>
            <span onClick={handleUp}>🥰</span>
            <span>{cnt}</span>
            <span onClick={()=>handleDown()}>😡</span>
        </div>
    )
}
