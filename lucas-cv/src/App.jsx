import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import WMSGame from './components/WMSGame'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <WMSGame />
      </main>
      <Footer />
    </div>
  )
}
