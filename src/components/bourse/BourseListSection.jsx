import React, { useState } from 'react'
import FormationCard from '../FormationCard'
import CommencezCard from '../CommencezCard'

const BourseListSection = () => {
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
      image: '/images/bourse.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo masy design.jpg',
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
      id: 2,
      image: '/images/bourse.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo masy design.jpg',
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
    {
      id: 3,
      image: '/images/bourse.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo masy design.jpg',
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
      image: '/images/bourse.png',
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      price: '8000$',
      logo: '/images/logo masy design.jpg',
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

  const handlePrev = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
  const handleNext = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))

  return (
    <section className='relative bg-[#100F20] overflow-hidden py-16'>
      {/* Gradient Orange en bas */}
      <div
        className='absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.15) 100%)',
        }}
      />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Barre de filtres - spécifique aux bourses */}
        <div className='mb-12'>
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

        {/* Grille des bourses - 2 par ligne */}
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            {bourses.map((bourse) => (
              <FormationCard key={bourse.id} {...bourse} />
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center items-center gap-3 mb-20'>
            <button
              onClick={handlePrev}
              className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10'
            >
              <i className='fa-solid fa-chevron-left text-sm'></i>
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentPage === page
                    ? 'bg-hirna-orange text-white'
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNext}
              className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10'
            >
              <i className='fa-solid fa-chevron-right text-sm'></i>
            </button>
          </div>

          {/* Insertion du composant CommencezCard */}
          <div className='mt-12'>
            <CommencezCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BourseListSection
