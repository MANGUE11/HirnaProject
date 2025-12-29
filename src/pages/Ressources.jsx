import React from 'react'
import { Header, Footer, CommencezCard } from '../components'
import RessourseHeroSectionComponent from '../components/ressources/RessourseHeroSectionComponent'
import FeaturedResourcesComponent from '../components/ressources/FeaturedResourcesComponent'
import MainCategoriesComponent from '../components/ressources/MainCategoriesComponent'
import AboutFaqSection from '../components/about/AboutFaqSection'

const Ressources = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <RessourseHeroSectionComponent />
        {/* Autres sections de la page Bourse à ajouter ici */}
        <FeaturedResourcesComponent />
        <MainCategoriesComponent />
        <AboutFaqSection />
        <CommencezCard />
      </main>
      <Footer />
    </div>
  )
}

export default Ressources
