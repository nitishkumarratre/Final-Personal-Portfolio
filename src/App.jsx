import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Homepage_dark from './pages/Homepage_dark'
import ServicesDetails from './pages/ServicesDetails'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/dark' Component={Homepage_dark} />
          <Route path='/services-details' Component={ServicesDetails} />
          <Route path='/project-details' Component={ProjectDetails} />
        </Routes>
  


    </>
  )
}

export default App
