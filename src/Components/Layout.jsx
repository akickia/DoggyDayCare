import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import ManageDogs from "../Pages/ManageDogs"
import About from "../Pages/About"
import PresentDogs from "../Pages/PresentDogs"
import Header from "./Header"

export default function Layout() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dogs" element={<PresentDogs />}></Route>
        <Route path="/manage" element={<ManageDogs />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>
    
    </BrowserRouter>
  )
}
