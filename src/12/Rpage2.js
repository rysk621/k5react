import { useSearchParams } from "react-router-dom"

export default function Rpage2() {
  const [sParams, setSParams] = useSearchParams();

  console.log(sParams.get('item1')); //주소창의 page2?item1="사과" 에서 '사과'만 추출하여 console에 출력
  console.log(sParams.get('item2'));

  const itemList = {"사과" : "❤", "바나나" : "💛", "당근" : "🧡", };
  
  const item1 = sParams.get('item1')
  const item2 = sParams.get('item2')

  return (
    <div>
        {/* page2 : {itemList[sParams.get('item1')]}{itemList[sParams.get('item2')]} */}
        page2 : {item1 && itemList[item1]}{item2 && itemList[item2]}
    </div>
  )
}
