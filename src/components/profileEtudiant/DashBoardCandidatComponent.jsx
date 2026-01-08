import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faBriefcase,
  faCheckCircle,
  faTimesCircle,
  faClock,
  faEnvelope,
  faEdit,
  faChevronDown,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

// Import de tes composants existants
import JobCard from '../JobCard'
import SchoolCard from '../SchoolCard'

const DashBoardCandidatComponent = () => {
  const stats = [
    { label: 'Vue de profil', value: '2500', change: '+20', icon: faEye },
    { label: 'Offres postulées', value: '03', change: null, icon: faBriefcase },
    {
      label: 'Candidatures acceptées',
      value: '02',
      change: '45',
      icon: faCheckCircle,
    },
    {
      label: 'Candidatures refusées',
      value: '03',
      change: '12',
      icon: faTimesCircle,
    },
    {
      label: 'Candidatures en attente',
      value: '00',
      change: null,
      icon: faClock,
    },
    { label: 'Messages non lus', value: '03', change: null, icon: faEnvelope },
  ]

  // Données pour les établissements (4 cards)
  const schools = [
    {
      name: 'Université de Maroc',
      type: 'Enseignement supérieur',
      location: 'Marrakech, Maroc',
      count: '2',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=300',
    },
    {
      name: 'ESMA Abidjan',
      type: 'École de Management',
      location: 'Abidjan, CI',
      count: '4',
      img: 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=300',
    },
    {
      name: 'Ghana University',
      type: 'Université Publique',
      location: 'Accra, Ghana',
      count: '1',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=300',
    },
    {
      name: 'BEM Dakar',
      type: 'Business School',
      location: 'Dakar, Sénégal',
      count: '3',
      img: 'https://images.unsplash.com/photo-1498243639359-2ead17105004?q=80&w=300',
    },
  ]

  // Données pour les entreprises (4 cards)
  const companies = [
    {
      name: "Wave Côte d'ivoire",
      type: 'Fintech',
      location: 'Abidjan, CI',
      count: '5',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300',
    },
    {
      name: 'Orange Sénégal',
      type: 'Télécom',
      location: 'Dakar, SN',
      count: '20',
      img: 'https://images.unsplash.com/photo-1516387933901-8261444c391d?q=80&w=300',
    },
    {
      name: 'MTN Maroc',
      type: 'Télécom',
      location: 'Casablanca, MA',
      count: '12',
      img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=300',
    },
    {
      name: 'Ecobank SN',
      type: 'Banque',
      location: 'Dakar, SN',
      count: '8',
      img: 'https://images.unsplash.com/photo-1454165833767-027eeea1367b?q=80&w=300',
    },
  ]

  return (
    <div className='flex flex-col gap-8 p-4 md:p-0 animate-fadeIn font-sans text-white'>
      {/* --- HEADER --- */}
      <div>
        <h1 className='text-2xl md:text-3xl font-bold'>Tableau de bord</h1>
        <p className='text-gray-400 text-sm mt-1'>
          Bienvenue sur HIRNA,{' '}
          <span className='text-[#D67D29] font-bold'>Aminata</span>
        </p>
      </div>

      {/* --- STATISTIQUES --- */}
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='bg-white rounded-xl p-4 flex flex-col shadow-sm text-[#100F20]'
          >
            <FontAwesomeIcon
              icon={stat.icon}
              className='text-[#D67D29] text-lg self-start'
            />
            <div className='mt-2'>
              <span className='text-2xl font-bold block'>{stat.value}</span>
              <span className='text-[10px] text-gray-500 font-medium leading-tight block'>
                {stat.label}
              </span>
            </div>
            {stat.change && (
              <div className='mt-2 text-[10px] font-bold text-[#D67D29]'>
                ↗ {stat.change}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- SECTION MES CANDIDATURES --- */}
      <div className='bg-[#191536] border border-white/10 rounded-3xl p-6'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-[#D67D29] text-xl font-bold underline underline-offset-8'>
            Mes candidatures
          </h3>
          <div className='relative'>
            <input
              type='text'
              placeholder='Rechercher...'
              className='bg-white rounded-full py-1 px-4 text-xs text-black italic w-48 md:w-64'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='relative'>
            <div className='absolute top-2 right-2 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#D67D29] text-white italic'>
              en attente
            </div>
            <JobCard
              title='Ingénieur Robotique'
              company='Université de Maroc'
              logo='https://via.placeholder.com/150'
              contractType='CDI'
              experience='2-3 ans'
              location='Dakar'
              publishedDate='il y a 5h'
            />
          </div>
          <div className='relative'>
            <div className='absolute top-2 right-2 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gray-500 text-white italic'>
              refusé
            </div>
            <JobCard
              title='Développeur Web'
              company='CANAL + SENEGAL'
              logo='https://upload.wikimedia.org/wikipedia/commons/0/01/Canal%2B.svg'
              contractType='CDD'
              experience='1-2 ans'
              location='Dakar'
              publishedDate='il y a 1j'
            />
          </div>
          <div className='relative'>
            <div className='absolute top-2 right-2 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-green-600 text-white italic'>
              accepté
            </div>
            <JobCard
              title='Data Analyst'
              company='Université Senghor'
              logo='https://via.placeholder.com/150'
              contractType='CDI'
              experience='3 ans'
              location='Sénégal'
              publishedDate='il y a 2 sem'
            />
          </div>
        </div>
        <button className='w-full text-center mt-6 text-xs text-gray-400 flex items-center justify-center gap-2'>
          Voir plus <FontAwesomeIcon icon={faChevronDown} size='xs' />
        </button>
      </div>

      {/* --- SECTION MESSAGES RÉCENTS --- */}
      <div className='bg-[#191536] border border-white/10 rounded-3xl p-6'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-[#D67D29] text-xl font-bold'>Messages récents</h3>
          <div className='bg-white rounded-full flex items-center px-3 py-1 max-w-[200px] shadow-sm'>
            <FontAwesomeIcon
              icon={faSearch}
              className='text-gray-400 text-xs mr-2'
            />
            <input
              type='text'
              placeholder='Mot - clé'
              className='text-[10px] text-black italic outline-none w-full'
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          {[
            {
              name: 'Université de Maroc',
              img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100',
              time: '2 heures',
            },
            {
              name: 'ECOBANK Senegal',
              img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
              time: '1 jour',
            },
            {
              name: 'Ghana University',
              img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100',
              time: 'une semaine',
            },
          ].map((msg, idx) => (
            <div
              key={idx}
              className='bg-white rounded-2xl p-4 flex items-center justify-between text-[#100F20] shadow-sm'
            >
              <div className='flex items-center gap-4'>
                <img
                  src={msg.img}
                  alt='User'
                  className='w-10 h-10 rounded-full object-cover border-2 border-[#D67D29]'
                />
                <div>
                  <h4 className='font-bold text-sm'>{msg.name}</h4>
                  <p className='text-[10px] text-gray-500 italic'>
                    Direction des ressources humaines
                  </p>
                </div>
              </div>
              <div className='text-right'>
                <div className='flex items-center gap-2'>
                  <span className='text-[10px] font-bold'>Nouveau message</span>
                  <span className='bg-[#D67D29] text-white text-[10px] px-1.5 rounded'>
                    01
                  </span>
                </div>
                <p className='text-[9px] text-gray-400 mt-1 italic'>
                  Il y a {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className='w-full text-center mt-4 text-xs text-[#D67D29] font-bold hover:underline'>
          Voir plus de messages ∨
        </button>
      </div>

      {/* --- SECTION SUIVIS --- */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Établissements */}
        <div className='bg-[#191536] border border-white/10 rounded-3xl p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-[#D67D29] text-lg font-bold underline underline-offset-4'>
              Etablissements suivis
            </h2>
            <div className='relative'>
              <input
                type='text'
                placeholder='Rechercher...'
                className='bg-white rounded-full py-1 px-4 text-[9px] text-black italic w-32'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {schools.map((school, i) => (
              <SchoolCard
                key={i}
                name={school.name}
                type={school.type}
                location={school.location}
                offersCount={school.count}
                publishedDate='10/2025'
                logo='https://via.placeholder.com/50'
                image={school.img}
              />
            ))}
          </div>
          <button className='w-full text-center mt-6 text-[10px] text-gray-400 font-bold'>
            Voir plus ∨
          </button>
        </div>

        {/* Entreprises */}
        <div className='bg-[#191536] border border-white/10 rounded-3xl p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-[#D67D29] text-lg font-bold underline underline-offset-4'>
              Entreprises suivies
            </h2>
            <div className='relative'>
              <input
                type='text'
                placeholder='Rechercher...'
                className='bg-white rounded-full py-1 px-4 text-[9px] text-black italic w-32'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {companies.map((company, i) => (
              <SchoolCard
                key={i}
                name={company.name}
                type={company.type}
                location={company.location}
                offersCount={company.count}
                publishedDate='12/2025'
                logo='https://via.placeholder.com/50'
                image={company.img}
              />
            ))}
          </div>
          <button className='w-full text-center mt-6 text-[10px] text-gray-400 font-bold'>
            Voir plus ∨
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashBoardCandidatComponent
