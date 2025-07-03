import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Header from './Header'
import Main1 from './Main1'
import Courses from './Courses'
import Achivement from './Achivements'
import Library from './Library'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Foot from './Foot'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Main1/>
      <Courses/>
      <Achivement/>
      <Library/>
      <Newsletter/>
      <Footer/>
      <Foot/>
    </>
  )
}

export default App;
