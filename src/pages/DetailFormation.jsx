import React from 'react'
import { Header, Footer } from '../components'
import DetailFormationHeroSection from '../components/detailFormation/DetailFormationHeroSection'

const DetailFormation = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <DetailFormationHeroSection />
        {/* Autres sections de la page À propos à ajouter ici */}
      </main>
      <Footer />
    </div>
  )
}

export default DetailFormation
