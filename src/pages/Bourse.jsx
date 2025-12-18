import React from 'react'
import { Header, Footer } from '../components'
import { BourseHeroSection, BourseListSection } from '../components/bourse'

const Bourse = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <BourseHeroSection />
        {/* Autres sections de la page Bourse à ajouter ici */}

        <BourseListSection />
      </main>
      <Footer />
    </div>
  )
}

export default Bourse
