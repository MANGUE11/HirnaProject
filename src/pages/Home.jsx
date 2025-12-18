import React from 'react'
import {
  Header,
  HeroSection,
  FindSection,
  Footer,
  JoinSection,
  FormationsSection,
  OrientationSection,
  JobsSection,
  SchoolsSection,
  ProchainJobSection,
  EntreprisesSection,
  TemoignagesSection,
  RessourcesSection,
  CommentCaMarcheSection,
  PourquoiChoisirSection,
  EntreprisesCtaSection,
  PartenairesSection,
} from '../components'

const Home = () => {
  return (
    <div className='min-h-screen bg-hirna-dark'>
      {/* Header */}
      <Header />
      {/* Hero Section avec image de fond */}
      <HeroSection />
      {/* Section Trouvez l'école ou l'emploi */}
      <FindSection />
      {/* JoinSection */}
      <JoinSection />
      {/* JoinSection */}
      <FormationsSection />
      {/* Orientation */}
      <OrientationSection />
      {/* JobSection */}
      <JobsSection />
      {/* SchoolSection */}
      <SchoolsSection />
      {/* ProchainJobSection */}
      <ProchainJobSection />
      {/* EntreprisesSection */}
      <EntreprisesSection />
      {/* TemoignagesSection */}
      <TemoignagesSection />
      {/* RessourcesSection */}
      <RessourcesSection />
      {/* CommentCaMarcheSection */}
      <CommentCaMarcheSection />
      {/* PourquoiChoisirSection */}
      <PourquoiChoisirSection />
      {/* EntreprisesCtaSection */}
      <EntreprisesCtaSection />
      {/* PartenairesSection */}
      <PartenairesSection />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
