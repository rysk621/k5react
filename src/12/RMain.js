import { BrowserRouter, Routes, Route } from "react-router-dom"
import RHome from "./RHome"
import Rpage1 from "./Rpage1"
import Rpage2 from "./Rpage2"
import RNav from "./RNav"

export default function RMain() {
  return (
    <main className="container mx-auto p-4">
        {/* brower에서 routing 기능 이용 */}
        <BrowserRouter>
            <RNav />
            <Routes>
                <Route path="/" element={<RHome />}></Route>
                <Route path="/page1" element={<Rpage1 />}></Route>
                <Route path="/page2" element={<Rpage2 />}></Route>
            </Routes>
        </BrowserRouter>
    </main>
  )
}
