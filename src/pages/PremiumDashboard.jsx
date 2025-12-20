import React from 'react'
import { Header, Footer } from '../components'
import PremiumDashboardComponent from '../components/premiumDashboard/PremiumDashboardComponent'

export const PremiumDashboard = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <PremiumDashboardComponent />
        {/* Autres sections de la page Bourse à ajouter ici */}
      </main>
      <Footer />
    </div>
  )
}

export default PremiumDashboard
