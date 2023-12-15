export default function TailCard({ imgSrc, title, subtitle, tags }) {
    return (
        <div className="flex flex-col m-5 p-5 border-solid border border-gray-200 rounded-ee-2xl">
            <div>
                <img src={imgSrc} alt={title} />
            </div>
            <div className="text-gray-500 text-sm p-2">
                <div className="font-bold text-center m-2">
                    {title}
                </div>
                <div>
                    {subtitle}
                </div>
                <div>
                    {tags}
                </div>
            </div>
        </div>
    )
}
