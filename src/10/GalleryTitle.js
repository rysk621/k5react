import TailH1 from "../UI/TailH1"
import { FcMultipleCameras } from "react-icons/fc";

export default function GalleryTitle() {
    return (
        <div>
            <div className='flex flex-col justify-top items-center w-full h-full my-10'>
                <div className="flex justify-center items-center">
                    <TailH1 title={'한국관광공사 관광사진 정보'}></TailH1>
                    <FcMultipleCameras className="text-3xl mx-3" />
                </div>
            </div>
        </div>
    )
}
