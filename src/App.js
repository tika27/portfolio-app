import './App.scss'
import NavBar from './components/NavBar';

import React from 'react'

function App() {
  return (
    <div className= "App">
      <div className="sidebar">
      <NavBar />
      </div>
      <div className="main-contain"></div>
      
    </div>
  )
}

export default App;