import Navbar from './components/Navbar/Navbar'
import Home from  "./components/Home/Home"
import Trainers from "./components/Trainers/Trainers"
import FAQ from './components/Question/Question'
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer'
import Timetable from "./components/Timetable/Timetable"
import Membership from './components/Membership/Membership'
import {Routes,Route} from "react-router-dom"


function App() {
  
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/timetable" element={<Timetable />}></Route>
        <Route path="/trainers" element={<Trainers />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
      </Routes>
      <Footer />
      
      
      
    </div>
  )
}

export default App
