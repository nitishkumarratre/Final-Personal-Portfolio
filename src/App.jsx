import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Homepage_dark from './pages/Homepage_dark'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/dark' Component={Homepage_dark} />
      </Routes>

    </>
  )
}

export default App
