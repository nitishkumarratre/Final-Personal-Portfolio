import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Homepage_dark from './pages/Homepage_dark'
import ServicesDetails from './pages/ServicesDetails'
import ProjectDetails from './pages/ProjectDetails'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dark' element={<Homepage_dark />} />
          <Route path='/services-details' element={<ServicesDetails />} />
          <Route path='/project-details' element={<ProjectDetails />} />
          <Route path='/services' element={<Services />} />  
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
