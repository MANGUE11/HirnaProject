import React from 'react'
import JobCard from '../JobCard'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

const JobBoardSection = () => {
  const jobsData = Array(18).fill({
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1024px-Orange_logo.svg.png',
    title: 'Développeur Web',
    company: 'ORANGE SENEGAL',
    contractType: 'CDI',
    experience: '01 - 03 ans',
    location: 'Conakry',
    publishedDate: '15/10/2025',
    hasNotice: false,
  })

  return (
    <section className='bg-[#100F20] py-12 px-4 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center text-hirna-orange text-2xl md:text-4xl font-bold mb-10'>
          Découvrez les offres sur Hirna
        </h2>

        {/* BARRE DE RECHERCHE RESPONSIVE */}
        <div className='bg-[#191536] p-4 md:p-3 rounded-2xl md:rounded-full shadow-2xl mb-12 flex flex-col md:flex-row items-center gap-3'>
          {/* Input Recherche avec Dégradé */}
          <div
            className='w-full md:flex-1 min-w-[150px] rounded-full border border-hirna-orange/30 overflow-hidden'
            style={{
              background:
                'linear-gradient(90deg, rgba(234, 114, 31, 0.25) 0%, rgba(25, 21, 54, 0) 60%)',
            }}
          >
            <input
              type='text'
              placeholder='Recherchez une...'
              className='w-full bg-transparent py-2.5 px-5 text-white placeholder:text-gray-400 focus:outline-none text-sm font-semibold'
            />
          </div>

          {/* Conteneur des filtres - Scrollable sur très petit mobile ou Wrap sur tablette */}
          <div className='flex flex-wrap justify-center md:justify-start items-center gap-2 w-full md:w-auto'>
            {[
              'secteur',
              'Localisation',
              'Type de contrat',
              "Niveau d'expérience",
            ].map((filter, index) => (
              <div
                key={index}
                className='flex items-center gap-2 border border-hirna-orange/40 rounded-full px-3 py-1.5 md:px-4 md:py-2 cursor-pointer hover:bg-white/5 transition-colors'
              >
                <span className='text-white text-[10px] md:text-xs font-bold whitespace-nowrap'>
                  {filter}
                </span>
                <FaChevronDown className='text-white/70' size={10} />
              </div>
            ))}
          </div>

          {/* Bouton Rechercher - Large sur mobile, Auto sur desktop */}
          <button className='w-full md:w-auto bg-hirna-orange hover:bg-opacity-90 transition-all text-[#100F20] font-extrabold text-sm px-8 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-md mt-2 md:mt-0'>
            <span>Rechercher</span>
            <FaSearch size={14} />
          </button>
        </div>

        {/* GRILLE DE CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {jobsData.map((job, index) => (
            <JobCard
              key={index}
              {...job}
              hasNotice={index === 1 || index === 4}
              onView={() => console.log("Voir l'offre", index)}
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className='flex justify-center items-center gap-3'>
          <button className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 text-white text-sm font-bold hover:border-hirna-orange transition-colors'>
            1
          </button>
          <button className='w-9 h-9 md:w-10 md:h-10 rounded-full bg-hirna-orange text-[#100F20] text-sm font-bold shadow-lg'>
            2
          </button>
          <button className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 text-white text-sm font-bold hover:border-hirna-orange transition-colors'>
            3
          </button>
          <span className='text-white font-bold px-1 md:px-2'>...</span>
          <button className='w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 text-white text-sm font-bold hover:border-hirna-orange transition-colors'>
            10
          </button>
        </div>
      </div>
    </section>
  )
}

export default JobBoardSection
