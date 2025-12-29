import React from 'react'
import { Header, Footer } from '../components'
import ListeOffreHeroSection from '../components/listOfre/listeOffreHeroSection'
import CtaJobSection from '../components/listOfre/CtaJobSection'
import JobBoardSection from '../components/listOfre/JobBoardSection'

const ListeOffre = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <ListeOffreHeroSection />
        {/* Autres sections de la page Bourse à ajouter ici */}{' '}
        <CtaJobSection />
        <JobBoardSection />
      </main>
      <Footer />
    </div>
  )
}

export default ListeOffre
