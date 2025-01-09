import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/DISPLAY/Homepage"
import { Images } from "./pages/DISPLAY/Images"
import { Contact } from "./pages/DISPLAY/Contact"
import WorkPage from "./pages/DISPLAY/Work"


const App = () => {
  return (
    <div className="w-screen h-screen bg-white text-black overflow-x-hidden">
    <Router>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/images" element={<Images/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App