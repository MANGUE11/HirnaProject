import React, { useState } from 'react'
import FormationCard from '../FormationCard'

const FormationBourseBourseListSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  const filters = [
    {
      id: 1,
      label: 'Recherchez une bourse',
      hasDropdown: false,
      isFirst: true,
    },
    { id: 2, label: "Domaine d'etudes", hasDropdown: true, isFirst: false },
    { id: 3, label: 'Niveau', hasDropdown: true, isFirst: false },
    { id: 4, label: 'Pays', hasDropdown: true, isFirst: false },
    { id: 5, label: 'Ville', hasDropdown: true, isFirst: false },
  ]

  const bourses = [
    {
      id: 1,
      image: '/images/formation.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo ma-sy.jpg',
      category: 'Bourse',
      title: 'Bourse de mérite 2025',
      description:
        "La bourse 2025 vise à encourager l'excellence académique et à valoriser les étudiants africains qui se distinguent par leurs résultats.",
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '04 ans',
      startDate: 'Deadline : 03 Décembre 2025',
      hasNotice: true,
    },
    {
      id: 2,
      image: '/images/formation.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo ma-sy.jpg',
      category: 'Bourse',
      title: 'Bourse de mobilité',
      description:
        "La bourse 2025 vise à encourager l'excellence académique et à valoriser les étudiants africains qui se distinguent par leurs résultats.",
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '04 ans',
      startDate: 'Deadline : 03 Décembre 2025',
      hasNotice: true,
    },
    {
      id: 3,
      image: '/images/formation.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo ma-sy.jpg',
      category: 'Bourse',
      title: 'Bourse de mérite 2025',
      description:
        "La bourse 2025 vise à encourager l'excellence académique et à valoriser les étudiants africains qui se distinguent par leurs résultats.",
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '04 ans',
      startDate: 'Deadline : 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 4,
      image: '/images/formation.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo ma-sy.jpg',
      category: 'Bourse',
      title: 'Bourse de mobilité',
      description:
        "La bourse 2025 vise à encourager l'excellence académique et à valoriser les étudiants africains qui se distinguent par leurs résultats.",
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '04 ans',
      startDate: 'Deadline : 03 Décembre 2025',
      hasNotice: false,
    },
  ]

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))
  }

  return (
    <section className='relative bg-[#100F20] overflow-hidden py-16'>
      {/* Header avec titre */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
        {/* Titre avec badge - bordure orange */}
        <div className='flex justify-center mb-8'>
          <div
            className='inline-flex items-center gap-3 rounded-full px-8 py-4 border border-hirna-orange'
            style={{
              background:
                'linear-gradient(to right, #C76E1E 0%, rgba(199, 110, 30, 0.3) 100%)',
            }}
          >
            <div className='w-10 h-10 rounded-full bg-[#191536] flex items-center justify-center'>
              <i className='fa-solid fa-graduation-cap text-white text-lg'></i>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
              Les Bourses disponibles
            </h2>
          </div>
        </div>
      </div>

      {/* Barre de filtres */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
        <div className='flex flex-wrap justify-center gap-2 bg-[#191536] rounded-full py-3 px-4'>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className='inline-flex items-center gap-1 text-white text-xs md:text-sm px-3 py-2 rounded-full border border-hirna-orange transition-colors'
              style={
                filter.isFirst
                  ? {
                      background:
                        'linear-gradient(to right, #C76E1E 0%, rgba(199, 110, 30, 0.3) 100%)',
                    }
                  : {}
              }
            >
              {filter.label}
              {filter.hasDropdown && (
                <i className='fa-solid fa-chevron-down text-xs'></i>
              )}
            </button>
          ))}
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white text-xs md:text-sm px-4 py-2 rounded-full'>
            Recherchez
            <i className='fa-solid fa-magnifying-glass text-xs'></i>
          </button>
        </div>
      </div>

      {/* Cards - 2 par ligne */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-6 mb-12'>
          {bourses.map((bourse) => (
            <FormationCard
              key={bourse.id}
              image={bourse.image}
              type={bourse.type}
              typeColor={bourse.typeColor}
              price={bourse.price}
              logo={bourse.logo}
              category={bourse.category}
              title={bourse.title}
              description={bourse.description}
              university={bourse.university}
              domains={bourse.domains}
              location={bourse.location}
              duration={bourse.duration}
              startDate={bourse.startDate}
              hasNotice={bourse.hasNotice}
              onView={() => console.log('View', bourse.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center gap-3'>
          {/* Flèche gauche */}
          <button
            onClick={handlePrev}
            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors'
          >
            <i className='fa-solid fa-chevron-left text-sm'></i>
          </button>

          {/* Numéros de page */}
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                currentPage === page
                  ? 'bg-hirna-orange text-white'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Flèche droite */}
          <button
            onClick={handleNext}
            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors'
          >
            <i className='fa-solid fa-chevron-right text-sm'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FormationBourseBourseListSection
