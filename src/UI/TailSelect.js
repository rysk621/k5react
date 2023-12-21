export default function TailSelect({opItem, handleChange}) {
    const ops = opItem.map((item, idx)=>
        <option key={`op${idx}`} value={item}>{item}</option>
    );

    return (
        <select className="w-full border p-1" onChange={handleChange}>
            <option value=''>===선택===</option>
            {ops}
        </select>
    )
}
