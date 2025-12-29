import React from 'react'
import { Header, Footer, CommencezCard } from '../components'
import PremiumAbonementComponent from '../components/premium/PremiumAbonementComponent'

const PremiumAbonnement = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        {/* Autres sections de la page Bourse à ajouter ici */}

        <PremiumAbonementComponent />
      </main>
      <Footer />
    </div>
  )
}

export default PremiumAbonnement
