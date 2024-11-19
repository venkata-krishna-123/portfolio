import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import EducationDetails from './Components/EducationDetails'


const App = () => {
  return (
    <div>
      <Navbar/>/
      <Hero/>
      <About/>
      <EducationDetails/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
