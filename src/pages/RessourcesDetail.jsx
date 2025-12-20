import React from 'react'
import { Header, Footer } from '../components'
import RessourcesDetailHeroComponent from '../components/ressourcesDetail/ressourcesDetailHeroComponent'
import SimilarResourcesComponent from '../components/ressourcesDetail/SimilarResourcesComponent'

const RessoursesDetail = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <RessourcesDetailHeroComponent />
        {/* Autres sections de la page Bourse à ajouter ici */}
        <SimilarResourcesComponent />
      </main>
      <Footer />
    </div>
  )
}

export default RessoursesDetail
