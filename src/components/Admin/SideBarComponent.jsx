import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine,
  faUsers,
  faFileAlt,
  faCreditCard,
  faBell,
  faBars, // Pour le bouton mobile
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const SidebarComponent = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false) // État pour le menu mobile

  const menuOptions = [
    { id: 'dashboard', label: 'Tableau de bord', icon: faChartLine },
    { id: 'utilisateurs', label: 'Utilisateurs', icon: faUsers },
    { id: 'contenus', label: 'Contenus', icon: faFileAlt },
    { id: 'paiements', label: 'Paiements', icon: faCreditCard },
    { id: 'notification', label: 'Notification', icon: faBell },
  ]

  return (
    <>
      {/* BOUTON MOBILE (Affiché uniquement sur petit écran) */}
      <button
        className='lg:hidden fixed top-4 left-4 z-50 p-3 bg-[#D67D29] text-white rounded-full shadow-lg'
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 min-h-screen flex flex-col shadow-2xl transition-all duration-300 border-r border-white/5
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{ background: 'linear-gradient(to bottom, #433F86, #100F20)' }}
      >
        {/* Header Administration */}
        <div className='bg-[#D67D29] p-7 text-center shadow-lg mt-20'>
          <h2 className='text-white font-black text-2xl uppercase tracking-wider'>
            Administration
          </h2>
          <p className='text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mt-1'>
            Panneau de supervision
          </p>
        </div>

        {/* Navigation Menus avec MARGE HAUTE (mt-12) */}
        <nav className='flex-1 px-5 mt-12 mb-10 space-y-4 overflow-y-auto'>
          {menuOptions.map((option) => {
            const isActive = activeTab === option.id

            return (
              <button
                key={option.id}
                onClick={() => {
                  setActiveTab(option.id)
                  setIsOpen(false) // Ferme le menu après clic sur mobile
                }}
                className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl border-2 transition-all duration-200 group
                  ${
                    isActive
                      ? 'bg-[#D67D29] border-[#D67D29] shadow-[0_4px_15px_rgba(214,125,41,0.4)]'
                      : 'bg-transparent border-white/10 hover:border-white/30 hover:bg-white/5'
                  }`}
              >
                <div
                  className={`w-5 flex justify-center ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 group-hover:text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={option.icon} className='text-lg' />
                </div>
                <span
                  className={`text-sm font-bold tracking-wide ${
                    isActive
                      ? 'text-white'
                      : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  {option.label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* OVERLAY (Fond sombre quand le menu est ouvert sur mobile) */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-30 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default SidebarComponent
