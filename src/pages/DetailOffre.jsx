import React from 'react'
import { Header, Footer } from '../components'
import DetailSingleOffreComponent from '../components/detailOffre/DetailSingleOffreComponent'

export const DetailOffre = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <DetailSingleOffreComponent />
        {/* Autres sections de la page Bourse à ajouter ici */}
      </main>
      <Footer />
    </div>
  )
}

export default DetailOffre
