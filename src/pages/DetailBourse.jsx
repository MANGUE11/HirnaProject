import React from 'react'
import { Header, Footer } from '../components'
import DetailBourseHeroSection from '../components/detailbourse/DetailBourseHeroSection'

const DetailBourse = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <DetailBourseHeroSection />
        {/* Autres sections de la page Bourse à ajouter ici */}
      </main>
      <Footer />
    </div>
  )
}

export default DetailBourse
