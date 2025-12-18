import React from 'react'
import { Header, Footer } from '../components'
import {
  SchoolDetailHeroSection,
  SchoolInfoTabsSection,
} from '../components/SchoolDetail'

const About = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <SchoolDetailHeroSection />
        {/* Autres sections de la page À propos à ajouter ici */}
        <SchoolInfoTabsSection />
      </main>
      <Footer />
    </div>
  )
}

export default About
