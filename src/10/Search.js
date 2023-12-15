import { BiSearchAlt } from "react-icons/bi";

export default function Search() {
    return (
        <div className="flex justify-center items-center">
            <form className="w-full max-w-lg justify-center items-center">
                <div className="flex items-center border-b border-green-500 py-2">
                    <BiSearchAlt className="text-3xl" />
                    <input className="appearance-none bg-transparent border-none w-full text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="keyword" />
                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Search
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-green-500 hover:text-green-800 text-sm py-1 px-2 rounded" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
