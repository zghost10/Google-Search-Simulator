import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import './App.css'
import Result from "./pages/result"

const App = () => (
  <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="search" element={<Result/>}/>
  </Routes>
)

export default App