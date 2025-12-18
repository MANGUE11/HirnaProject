import React from 'react'
import { Header, Footer } from '../components'
import {
  AboutHeroSection,
  AboutInfoSection,
  AboutMissionSection,
  AboutTeamSection,
  AboutFaqSection,
  AboutContactSection,
} from '../components/about'

const About = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <AboutHeroSection />
        {/* Autres sections de la page À propos à ajouter ici */}
        <AboutInfoSection />
        <AboutMissionSection />
        <AboutTeamSection />
        <AboutFaqSection />
        <AboutContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default About
