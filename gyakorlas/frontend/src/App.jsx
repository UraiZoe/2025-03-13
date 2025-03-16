import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Valasztott from "./pages/Valasztott.jsx";
import Navbar from "./Navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="valasztott/:id" element={<Valasztott />} />
            </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
