import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Photocard from './page/Photocard'

import Header from './page/Header'

function App() {
  

  return (
    <>
  <Routes>

 
  <Route path='/card' element={<Photocard/>} />
  <Route path='/header' element={<Header/>} />
  </Routes>
   
    </>
  )
}

export default App
