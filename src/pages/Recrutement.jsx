import React from 'react'
import { Header, Footer } from '../components'
import RecrutementHeroSection from '../components/recrutement/RecrutementHeroSection'
import PuissanceIaComponent from '../components/recrutement/PuissanceIaComponent'
import CompanySearchSection from '../components/recrutement/CompanySearchSection'
import ShoolSearchSection from '../components/recrutement/ShoolSearchSection'
import ProfilAppelComponent from '../components/recrutement/ProfilAppelComponent'
import WhyCompaniesChooseHirna from '../components/recrutement/WhyCompaniesChooseHirna'
import JoinNetworkSection from '../components/recrutement/JoinNetworkSection'
import PartenairesSection from '../components/PartenairesSection'

const Recrutement = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <RecrutementHeroSection />
        {/* Autres sections de la page Bourse à ajouter ici */}
        <PuissanceIaComponent />
        <CompanySearchSection />
        <ShoolSearchSection />
        <ProfilAppelComponent />
        <WhyCompaniesChooseHirna />
        <JoinNetworkSection />
        <PartenairesSection />
      </main>
      <Footer />
    </div>
  )
}

export default Recrutement
