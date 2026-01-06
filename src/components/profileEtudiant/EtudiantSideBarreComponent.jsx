import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHome,
  faUsers,
  faHeart,
  faCrown,
  faComments,
  faBell,
  faCog,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const EtudiantSideBarreComponent = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false) // État pour ouvrir/fermer sur mobile

  const menuItems = [
    { id: 'dashboard', name: 'Tableau de bord', icon: faHome },
    { id: 'candidatures', name: 'Mes candidatures', icon: faUsers },
    { id: 'favoris', name: 'Mes favoris', icon: faHeart },
    { id: 'ambassadeurs', name: 'Ambassadeurs', icon: faCrown },
    { id: 'messages', name: 'Messages', icon: faComments },
    { id: 'notifications', name: 'Notifications', icon: faBell },
    { id: 'parametres', name: 'Paramètres', icon: faCog },
  ]

  // Fonction pour changer d'onglet et fermer le menu automatiquement sur mobile
  const handleNavigation = (id) => {
    setActiveTab(id)
    setIsOpen(false)
  }

  return (
    <>
      {/* BOUTON BURGER : Visible uniquement sur mobile (lg:hidden) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='lg:hidden fixed top-20 left-4 z-50 bg-[#D67D29] text-white p-3 rounded-full shadow-lg border-2 border-[#100F20]'
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* OVERLAY : Fond sombre quand le menu est ouvert sur mobile */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR : Fixe sur mobile avec animation de glissement, statique sur desktop */}
      <div
        className={`
        fixed lg:static top-0 left-0 h-full z-40
        w-72 bg-gradient-to-b from-[#433F86] to-[#100F20] 
        flex flex-col font-sans shrink-0 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
      >
        {/* --- HEADER SIDEBAR (ORANGE) --- */}
        <div className='bg-[#D67D29] p-6 pt-16 lg:pt-10'>
          <h1 className='text-white text-xl lg:text-2xl font-bold'>
            Tableau de bord
          </h1>
          <p className='text-white/80 text-xs lg:text-sm font-medium uppercase tracking-wider'>
            AMINATA DIALLO
          </p>
        </div>

        <div className='flex flex-col gap-4 p-4 lg:p-6 mt-4 overflow-y-auto'>
          {/* BOUTON PROFIL */}
          <button
            onClick={() => handleNavigation('profil')}
            className={`flex items-center gap-4 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ${
              activeTab === 'profil'
                ? 'bg-[#D67D29] scale-105 border-transparent'
                : 'bg-transparent border border-white/30 hover:bg-white/10'
            } text-white`}
          >
            <FontAwesomeIcon icon={faUser} className='text-base lg:text-lg' />
            <span className='font-bold text-base lg:text-lg'>Profil</span>
          </button>

          {/* LISTE DES AUTRES MENUS */}
          <nav className='flex flex-col gap-3 mt-2'>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`flex items-center gap-4 px-4 lg:px-5 py-3 rounded-2xl transition-all duration-300 group border ${
                  activeTab === item.id
                    ? 'bg-[#D67D29] border-transparent shadow-lg scale-105'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className='text-base lg:text-lg w-5 lg:w-6 group-hover:scale-110 transition-transform'
                />
                <span className='font-semibold text-sm lg:text-[15px]'>
                  {item.name}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default EtudiantSideBarreComponent
