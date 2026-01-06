import React, { useState } from 'react'
import { Header, Footer } from '../components'
import EtudiantSideBarreComponent from '../components/profileEtudiant/EtudiantSideBarreComponent'
import ProfilCandidatComponent from '../components/profileEtudiant/ProfilCandidatComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faBell,
  faCommentDots,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'

const EtudiantProfilePage = () => {
  // Modification ici : 'profil' est maintenant l'onglet par défaut
  const [activeTab, setActiveTab] = useState('profil')

  // TopBar réutilisable exactement comme sur l'image
  const TopBar = () => (
    <div className='flex items-center justify-between bg-white rounded-xl p-4 mb-10 shadow-md'>
      <div className='relative w-1/2'>
        <input
          type='text'
          placeholder='Recherchez'
          className='w-full bg-[#D67D29] text-white placeholder-white/80 rounded-full py-2 px-6 pr-10 focus:outline-none'
        />
        <FontAwesomeIcon
          icon={faSearch}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-white'
        />
      </div>

      <div className='flex items-center gap-6'>
        <div className='bg-[#100F20] p-2 rounded-lg cursor-pointer'>
          <FontAwesomeIcon icon={faEyeSlash} className='text-[#D67D29]' />
        </div>
        <div className='h-8 w-[1px] bg-gray-300'></div>
        <div className='relative cursor-pointer border border-[#D67D29] rounded-xl p-2'>
          <FontAwesomeIcon icon={faBell} className='text-[#D67D29] text-xl' />
          <span className='absolute -top-1 -right-1 bg-[#E11D48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full'>
            1
          </span>
        </div>
        <div className='relative cursor-pointer border border-[#D67D29] rounded-xl p-2'>
          <FontAwesomeIcon
            icon={faCommentDots}
            className='text-[#D67D29] text-xl'
          />
          <span className='absolute -top-1 -right-1 bg-[#E11D48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full'>
            1
          </span>
        </div>
        <div className='bg-[#D67D29] text-white font-bold text-xl h-12 w-12 flex items-center justify-center rounded-xl shadow-lg'>
          AD
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'profil': // Le cas Profil est maintenant prioritaire
        return (
          <>
            <TopBar />
            <ProfilCandidatComponent />
          </>
        )
      case 'dashboard':
        return (
          <>
            <TopBar />
            <h2 className='text-2xl font-bold mb-2 text-white'>
              Mon Tableau de bord
            </h2>
            <p className='text-gray-400'>
              Bienvenue, Aminata ! Voici un aperçu de votre activité.
            </p>
          </>
        )
      case 'candidatures':
        return (
          <>
            <TopBar />
            <h2 className='text-2xl font-bold text-white'>Mes Candidatures</h2>
          </>
        )
      default:
        return (
          <>
            <TopBar />
            <h2 className='text-2xl font-bold text-white capitalize'>
              {activeTab}
            </h2>
          </>
        )
    }
  }

  return (
    <div className='min-h-screen bg-[#100F20] flex flex-col'>
      <Header />

      <div className='flex flex-1 overflow-hidden pt-12'>
        {' '}
        {/* Espace sous le header */}
        <aside className='h-full shrink-0'>
          <EtudiantSideBarreComponent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </aside>
        <main className='flex-1 overflow-y-auto bg-[#0a0a12] p-6 md:p-10 rounded-tl-3xl'>
          <div className='max-w-7xl mx-auto'>{renderContent()}</div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default EtudiantProfilePage
