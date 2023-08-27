// import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Wk1 from "./App_wk1"
import Wk2 from './App_wk2'

function App() {

  const style = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : ''
    }
  }

  return (
    <>
      <div>
        <NavLink to="/" style={style}>第一週作業</NavLink> |
        <NavLink to="/Wk2" style={style}>第二週作業</NavLink> 
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Wk1 />}></Route>
        <Route path="/Wk2" element={<Wk2 />}></Route>
      </Routes>
    </>
  )
}

export default App
