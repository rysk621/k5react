export default function TailButton({caption, handleClick, bColor}) {
  const tailColor = {
    sky : 'hover:bg-sky-200 hover:text-sky-700 bg-sky-700',
    orange : 'hover:bg-orange-200 hover:text-orange-700 bg-orange-700',
    lime: 'hover:bg-lime-200 hover:text-lime-700 bg-lime-700'
  }


  return (
    <button className={`inline-flex justify-center items-center
                        px-5 py-2 rounded-md h-10 m-2
                        ${tailColor[bColor]}
                        bg-cyan-900 text-white`} // className 자체를 {``}으로 묶어야 하나봄
            onClick={handleClick}>
        {caption}
    </button>
  )
}
