import React from 'react'
import { Header, Footer } from '../components'
import {
  FormationHeroSection,
  FormationListSection,
} from '../components/formation'

const Formation = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <FormationHeroSection />
        {/* Autres sections de la page Formation et Bourse à ajouter ici */}{' '}
        <FormationListSection />
      </main>
      <Footer />
    </div>
  )
}

export default Formation
