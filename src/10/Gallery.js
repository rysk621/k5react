// import Search from "./Search";
import GalleryTitle from "./GalleryTitle";
import TailCard from "../UI/TailCard";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
    let apikey = process.env.REACT_APP_APIKEY;
    // 키워드 입력 받아오는 ref() method: input box에 ref={kwInput} 걸어준다.
    const kwInput = useRef();

    // data
    const [tData, setTData] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault(); // 화면을 다시 뿌리지 말라는 명령어
        handelGetData();
    }

    const handleCancel = (e) => {
        e.preventDefault();
        kwInput.current.value = '';
    }

    // const handleEnter = (e)=>{
    //     console.log("handleEnter");
    //     if (e.key === "Enter"){
    //         handelGetData(e);
    //         console.log("Enter");
    //     }
    // };

    const handelGetData = async () => {

        let enKw = kwInput.current.value;
        if (enKw === "") {
            kwInput.current.focus();
            return;
        }

        // data fetch할 url 작성하기
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = `${url}serviceKey=${apikey}`;
        url = url + `&numOfRows=10`;
        url = `${url}&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = `${url}&keyword=${enKw}`;
        url = `${url}&_type=json`;

        const resp = await fetch(url); // wait until fetch done
        const data = await resp.json(); // const resp를 json 형식으로 바꾸는 method json()
        // console.log(data.response.body.items.item);

        setTData(data.response.body.items.item);
    }

    useEffect(() => {
        console.log("tData = ", tData)
    }, [tData])

    return (
        <div>
            <div>
                <GalleryTitle />
                <div className="flex justify-center items-center">
                    <form className="w-full max-w-lg justify-center items-center">
                        <div className="flex items-center border-b border-green-500 py-2">
                            <BiSearchAlt className="text-3xl" />
                            <input ref={kwInput} className="appearance-none bg-transparent border-none w-full text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="Search" aria-label="keyword" />
                            <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="button" onClick={(e) => handleSearch(e)}>
                                Search
                            </button>
                            <button className="flex-shrink-0 border-transparent border-4 text-green-500 hover:text-green-800 text-sm py-1 px-2 rounded" type="button" onClick={(e) => handleCancel(e)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="m-10 p-15">
                <div title="cards" className="grid grid-cols-3 p-5">
                    <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"}
                        title={"태종대유원지"}
                        subtitle={"부산광역시 영도구 동삼동"}
                        tags={"태종대"} />
                    <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"}
                        title={"태종대유원지"}
                        subtitle={"부산광역시 영도구 동삼동"}
                        tags={"태종대"} />
                    <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"}
                        title={"태종대유원지"}
                        subtitle={"부산광역시 영도구 동삼동"}
                        tags={"태종대"} />
                    <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"}
                        title={"태종대유원지"}
                        subtitle={"부산광역시 영도구 동삼동"}
                        tags={"태종대"} />
                    <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"}
                        title={"태종대유원지"}
                        subtitle={"부산광역시 영도구 동삼동"}
                        tags={"태종대"} />
                    <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"}
                        title={"태종대유원지"}
                        subtitle={"부산광역시 영도구 동삼동"}
                        tags={"태종대"} />
                </div>
            </div>
        </div>
    )
}
