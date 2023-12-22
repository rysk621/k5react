import { useParams } from "react-router-dom"; // react - router의 hook

export default function Rpage1() {
  const item = useParams().item1;

  const itemList = {"사과" : "❤", "바나나" : "💛", "당근" : "🧡", }; // 이렇게 object 형식으로 만들 수 있음.

  return (
    <div>
      {/* page1 : {item}{item === "사과" ? "❤" : item === "바나나" ? "💛" : "🧡"} */}
      page1 : {item}{itemList[item]}
    </div>
  )
}
