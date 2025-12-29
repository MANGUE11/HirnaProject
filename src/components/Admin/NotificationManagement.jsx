import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCheckDouble,
  faEnvelope,
  faCheck,
  faSearch,
  faChevronDown,
  faCommentAlt,
  faClock,
  faGift,
} from '@fortawesome/free-solid-svg-icons'

const NotificationManagement = () => {
  return (
    <div className='min-h-screen bg-[#0F0E17] pt-20 px-6 pb-12 font-sans text-white'>
      {/* --- BANDEAU TITRE --- */}
      <div className='border border-[#D67D29]/30 rounded-xl p-4 flex justify-between items-center mb-10 bg-[#0F0E17]'>
        <div className='flex items-center gap-4'>
          <div className='text-[#D67D29] text-2xl'>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div>
            <h1 className='text-xl font-black leading-none'>Notifications</h1>
            <p className='text-gray-400 text-xs mt-1'>
              Gérez toutes vos notifications
            </p>
          </div>
        </div>
        <button className='text-[#D67D29] text-[10px] font-bold flex items-center gap-2 uppercase hover:underline'>
          <FontAwesomeIcon icon={faCheckDouble} className='text-xs' /> Tout
          marquer comme lu
        </button>
      </div>

      {/* --- CARDS STATISTIQUES --- */}
      <div className='flex gap-6 mb-10 overflow-x-auto pb-2'>
        <StatCard
          icon={faBell}
          label='Total'
          count='13'
          color='text-[#D67D29]'
        />
        <StatCard
          icon={faEnvelope}
          label='Non lues'
          count='1'
          color='text-[#D67D29]'
        />
        <StatCard
          icon={faCheck}
          label='Lues'
          count='12'
          color='text-[#100F20]'
          bgColor='bg-[#100F20]'
        />
      </div>

      {/* --- BARRE DE RECHERCHE --- */}
      <div className='bg-[#F3F4F6] rounded-lg p-1.5 flex flex-wrap items-center gap-2 mb-8'>
        <div className='relative flex-1 min-w-[200px] border border-gray-200 rounded-md bg-white'>
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-[#D67D29] text-sm'
          />
          <input
            type='text'
            placeholder='Mot - clé'
            className='w-full pl-10 pr-4 py-2 text-gray-800 text-sm focus:outline-none bg-transparent'
          />
        </div>
        <FilterItem label='Date' />
        <FilterItem label='Type notifications' />
      </div>

      {/* --- LISTE DES NOTIFICATIONS --- */}
      <div className='bg-white rounded-[40px] p-10 text-[#100F20]'>
        {/* SECTION AUJOURD'HUI */}
        <h2 className='text-xl font-bold mb-6'>Aujourd'hui</h2>
        <div className='space-y-4 mb-10'>
          <NotificationItem
            icon={faCommentAlt}
            title='Abonnement premium - Entreprise'
            desc='Paiement effectué'
            sub='Orange Guinée'
            date='19 novembre 2025 à 12:16'
            isOrangeSub
          />
          <NotificationItem
            icon={faClock}
            title='Date limite approche'
            desc="La candidature pour 'Développeur Full Stack' expire dans 3 jours"
            date='19 novembre 2025 à 07:16'
            badge='J-3'
          />
        </div>

        {/* SECTION HIER */}
        <h2 className='text-xl font-bold mb-6'>Hier</h2>
        <div className='space-y-4'>
          <NotificationItem
            icon={faGift}
            title='Récompense Ambassadeur'
            desc='Jacques Moundekeno a parrainé 12 Candidats'
            date='16 novembre 2025 à 12:16'
          />
          <NotificationItem
            icon={faGift}
            title='Récompense Ambassadeur'
            desc='Jacques Moundekeno a parrainé 12 Candidats'
            date='16 novembre 2025 à 12:16'
          />
        </div>
      </div>
    </div>
  )
}

// --- COMPOSANTS INTERNES ---

const StatCard = ({ icon, label, count, color, bgColor = 'bg-white' }) => (
  <div className='bg-white p-4 rounded-xl flex items-center gap-6 min-w-[180px] shadow-sm'>
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
        bgColor === 'bg-white' ? 'bg-[#100F20]' : 'bg-[#D67D29]/10'
      }`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={bgColor === 'bg-white' ? 'text-white' : 'text-[#D67D29]'}
      />
    </div>
    <div>
      <p className='text-gray-400 text-[11px] font-bold uppercase'>{label}</p>
      <p className={`text-2xl font-black ${color}`}>{count}</p>
    </div>
  </div>
)

const FilterItem = ({ label }) => (
  <div className='text-gray-500 text-[12px] px-6 py-2 cursor-pointer flex items-center gap-4'>
    {label}{' '}
    <FontAwesomeIcon
      icon={faChevronDown}
      className='text-[10px] text-gray-400'
    />
  </div>
)

const NotificationItem = ({
  icon,
  title,
  desc,
  sub,
  date,
  badge,
  isOrangeSub,
}) => (
  <div className='border border-[#D67D29]/30 rounded-xl p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors'>
    <div className='text-[#D67D29] mt-1 text-lg'>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className='flex-1'>
      <div className='flex justify-between items-start'>
        <div>
          <h4 className='font-black text-[15px]'>{title}</h4>
          <p className='text-gray-600 text-sm mt-0.5'>{desc}</p>
          {sub && (
            <p className='text-[#D67D29] font-bold text-sm mt-2'>{sub}</p>
          )}
          {badge && (
            <span className='inline-block bg-[#D67D29] text-white text-[10px] font-black px-2 py-0.5 rounded mt-2 uppercase'>
              {badge}
            </span>
          )}
        </div>
        <span className='text-gray-500 text-[13px]'>{date}</span>
      </div>
    </div>
  </div>
)

export default NotificationManagement
