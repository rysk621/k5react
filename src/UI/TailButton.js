export default function TailButton({caption, handleClick}) {
  return (
    <button className="inline-flex justify-center items-center
                        px-5 py-2 rounded-md h-10 m-2
                        hover:bg-sky-200 hover:text-cyan-900
                        bg-cyan-900 text-white"
            onClick={handleClick}>
        {caption}
    </button>
  )
}
