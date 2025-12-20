import React from 'react'
import { Header, Footer } from '../components'
import DetailEntrepriseHeroSection from '../components/detailEntreprise/DetailEntrepriseHeroSection'

const DetailEntreprise = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <DetailEntrepriseHeroSection />
        {/* Autres sections de la page Bourse à ajouter ici */}
      </main>
      <Footer />
    </div>
  )
}

export default DetailEntreprise
