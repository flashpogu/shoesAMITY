import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactHome from './pages/Contact';
import ThemeSwitch from './components/theme-switch';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/contact" element={<ContactHome />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
