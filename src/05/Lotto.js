import style from './Lotto.module.css';
import { useState, useEffect } from 'react';

export default function Lotto() {
    // let tags = "Lotto번호 생성기"
    const [tags, setTags] = useState();

    const handleClick = (n) => {
        // tags = Math.floor(Math.random()*45) + 1 ;
        let lottoNum = [];

        while (lottoNum.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!lottoNum.includes(n)) lottoNum.push(n);
        }
        lottoNum.splice(6, 0, '+');

        let tmTags = lottoNum.map((item, idx) => //map은 call back method를 인자로 전달받음. 이후 return문 들어가는 중괄호 or 중괄호 생략하고 함수 정의. let tmTags는 array 형태.
            (item === '+') ? <span key={`sp${idx}`} className={style.spp}>{item}</span>
            : <span key={`sp${idx}`} className={style[`sp${Math.floor(item / 10)}`]}>{item}</span>
        );
        console.log(tmTags);
        setTags(tmTags);
    }

    useEffect(() => {
        setTags("Lotto번호 생성기");
    }, []);

    useEffect(() => {
        //console.log(tags)
    }, [tags]);

    return (
        <div className={style.divLotto}>
            <div className={style.d1}>
                <p className={style.divp}>
                    {tags}
                </p>
            </div>
            <div className={style.d1}>
                <button className={style.bt} onClick={handleClick}>Lotto번호생성</button>
            </div>

        </div>
    )
}