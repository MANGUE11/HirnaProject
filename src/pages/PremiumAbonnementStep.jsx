import React from 'react'
import { Header, Footer, CommencezCard } from '../components'
import PremiumAbonnementComponentStep from '../components/premiumPaiement/PremiumAbonnementComponentStep'

const PremiumAbonnementStep = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        {/* Autres sections de la page Bourse à ajouter ici */}

        <PremiumAbonnementComponentStep />
      </main>
      <Footer />
    </div>
  )
}

export default PremiumAbonnementStep
