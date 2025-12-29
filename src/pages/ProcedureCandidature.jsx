import React from 'react'
import { Header, Footer } from '../components'
import ProcedureCandidatureComponent from '../components/candidature/ProcedureCandidatureComponent'

export const ProcedureCandidature = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <ProcedureCandidatureComponent />
        {/* Autres sections de la page Bourse à ajouter ici */}
      </main>
      <Footer />
    </div>
  )
}

export default ProcedureCandidature
