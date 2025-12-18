import React from 'react'
import { Header, Footer } from '../components'
import {
  FormationBourseHeroSection,
  FormationBourseMissionSection,
  FormationBourseProgrammesSection,
  FormationBourseEcolesSection,
  FormationBourseBourseSection,
  FormationBourseBourseListSection,
  FormationBourseRejoindreSection,
} from '../components/formationBourse'

const FormationBourse = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <FormationBourseHeroSection />
        {/* Autres sections de la page Formation et Bourse à ajouter ici */}{' '}
        <FormationBourseMissionSection />
        <FormationBourseProgrammesSection />
        <FormationBourseEcolesSection />
        <FormationBourseBourseSection />
        <FormationBourseBourseListSection />
        <FormationBourseRejoindreSection />
      </main>
      <Footer />
    </div>
  )
}

export default FormationBourse
