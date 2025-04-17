import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/DISPLAY/Homepage"
import { Images } from "./pages/DISPLAY/Images"
import { Contact } from "./pages/DISPLAY/Contact"
import WorkPage from "./pages/DISPLAY/Work"
import { ImageView } from "./pages/DISPLAY/ImageView"
import ScrollToTop from "./component/ScrollToTop"


const App = () => {
  return (
    <div className="w-screen h-full bg-[#f6f3ea] text-black overflow-x-hidden">
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/images" element={<Images/>} />
        <Route path="/image/:imageId" element={<ImageView/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App