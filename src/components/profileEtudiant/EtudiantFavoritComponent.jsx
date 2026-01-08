import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

// Import de tes cartes
import JobCard from '../JobCard'
import SchoolCard from '../SchoolCard'
import FormationCard from '../FormationCard' // Code fourni par toi
import RessourceCard from '../RessourceCard' // Code fourni par toi

const EtudiantFavoritComponent = () => {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'Tout' },
    { id: 'jobs', label: "Offres d'emploi" },
    { id: 'schools', label: 'Établissements' },
    { id: 'formations', label: 'Formations' },
    { id: 'resources', label: 'Ressources' },
  ]

  // Données simulées (4 items par catégorie)
  const favorites = {
    jobs: Array(4).fill({
      title: 'Développeur Fullstack',
      company: 'Orange SN',
      location: 'Dakar',
      contractType: 'CDI',
      experience: '2 ans',
      publishedDate: '2j',
      logo: 'https://via.placeholder.com/40',
    }),
    schools: Array(4).fill({
      name: 'Université de Maroc',
      type: 'Enseignement Sup',
      location: 'Marrakech',
      offersCount: '12',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=300',
    }),
    formations: Array(4).fill({
      title: 'Master IA & Data',
      university: 'UAM',
      location: 'Dakar',
      price: '2500€',
      type: 'Master',
      category: 'Informatique',
      duration: '2 ans',
      startDate: 'Oct 2025',
      logo: 'https://via.placeholder.com/50',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=300',
    }),
    resources: Array(4).fill({
      title: 'Réussir son entretien',
      category: 'Conseils',
      description:
        'Découvrez les clés pour convaincre les recruteurs en 5 minutes.',
      publishedDate: '12/10/2025',
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=300',
    }),
  }

  const SectionHeader = ({ title }) => (
    <div className='flex items-center gap-3 mb-6'>
      <FontAwesomeIcon icon={faHeart} className='text-[#D67D29]' />
      <h2 className='text-xl font-bold text-white'>{title}</h2>
      <div className='flex-grow h-[1px] bg-white/10'></div>
    </div>
  )

  return (
    <div className='flex flex-col gap-8 animate-fadeIn text-white'>
      {/* --- HEADER --- */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div>
          <h1 className='text-3xl font-bold'>Mes Favoris</h1>
          <p className='text-gray-400 text-sm'>
            Retrouvez tout ce que vous avez enregistré
          </p>
        </div>
        <div className='relative w-full md:w-64'>
          <input
            type='text'
            placeholder='Rechercher dans mes favoris...'
            className='w-full bg-white rounded-full py-2 px-4 text-xs italic text-black'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'
          />
        </div>
      </div>

      {/* --- TABS FILTERS --- */}
      <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#D67D29] text-white shadow-lg'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- CONTENT SECTIONS --- */}
      <div className='space-y-12'>
        {/* SECTION JOBS */}
        {(activeTab === 'all' || activeTab === 'jobs') && (
          <section>
            <SectionHeader title="Offres d'emploi enregistrées" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {favorites.jobs.map((job, i) => (
                <JobCard key={i} {...job} />
              ))}
            </div>
            <Pagination />
          </section>
        )}

        {/* SECTION SCHOOLS */}
        {(activeTab === 'all' || activeTab === 'schools') && (
          <section>
            <SectionHeader title='Établissements favoris' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {favorites.schools.map((school, i) => (
                <SchoolCard key={i} {...school} />
              ))}
            </div>
            <Pagination />
          </section>
        )}

        {/* SECTION FORMATIONS */}
        {(activeTab === 'all' || activeTab === 'formations') && (
          <section>
            <SectionHeader title="Formations d'intérêt" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {favorites.formations.map((f, i) => (
                <FormationCard key={i} {...f} />
              ))}
            </div>
            <Pagination />
          </section>
        )}

        {/* SECTION RESSOURCES */}
        {(activeTab === 'all' || activeTab === 'resources') && (
          <section>
            <SectionHeader title='Articles & Ressources' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {favorites.resources.map((res, i) => (
                <RessourceCard key={i} {...res} />
              ))}
            </div>
            <Pagination />
          </section>
        )}
      </div>
    </div>
  )
}

// Petit composant de pagination réutilisable
const Pagination = () => (
  <div className='flex justify-center items-center gap-3 mt-8'>
    <button className='w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D67D29] transition-colors'>
      <FontAwesomeIcon icon={faChevronLeft} size='xs' />
    </button>
    <span className='text-xs font-bold bg-[#D67D29] w-8 h-8 rounded-full flex items-center justify-center'>
      1
    </span>
    <button className='w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D67D29] transition-colors'>
      <FontAwesomeIcon icon={faChevronRight} size='xs' />
    </button>
  </div>
)

export default EtudiantFavoritComponent
