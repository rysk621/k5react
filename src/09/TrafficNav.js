import TailButton from '../UI/TailButton'

export default function TrafficNav({title, cArr, sel, setSel}) {
    //import TailButton, {cArr} ==> {tags}, cArr 돌며 요소 받아오는 map method 작성, item을 callback 함수에 전달
    const handleBtClick = (item) => {
        setSel(item);
    };

    const tags = cArr.map((item, idx)=>
        <TailButton caption={item} key={`bt${idx}`} bColor={item === sel ? 'orange' : 'sky'} handleClick={()=>handleBtClick(item)} />
    )



  return (
    <div className='flex bg-slate-200 w-full p-2 my-2'>
        <div className='flex justify-center items-center text-xl w-1/6'>
            {title}
        </div>
        <div className='flex justify-end items-center w-5/6 bg-slate-300'>
            {tags}
        </div>
    </div>
  )
}
