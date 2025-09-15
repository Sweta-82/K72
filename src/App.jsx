import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import { Link } from 'react-router-dom'

import { ScrollTrigger } from 'gsap/all'
import Stairs from '../components/common/Stairs'
import Navbar from '../components/Navbar/Navbar'
import FullNavbar from '../components/home/FullNavbar'
import Footer from '../components/common/Footer'
import Marquee from '../components/common/Marquee'
import Contact from './pages/Contact'
import LoadingPage from '../components/common/LoadingPage'
function App() {
  
  return (
    <>
    
    <FullNavbar/>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/agence' element={<Agence/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/loading' element={<LoadingPage/>}></Route>

    </Routes>
    </>
  )
}

export default App