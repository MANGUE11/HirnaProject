import React, { useState } from 'react'

const PartenairesSection = () => {
  const [currentPage, setCurrentPage] = useState(2)
  const totalPages = 4

  const partenaires = [
    { id: 1, logo: '/images/ecobank-logo-white.png', alt: 'Ecobank' },
    { id: 2, logo: '/images/weego-logo.png', alt: 'Weego' },
    { id: 3, logo: '/images/ucad-logo-white.png', alt: 'UCAD' },
    { id: 4, logo: '/images/ecobank-logo-white.png', alt: 'Ecobank' },
    { id: 5, logo: '/images/weego-logo.png', alt: 'Weego' },
  ]

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))
  }

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#100F20]'>
      {/* Radial gradient en bas - à moitié visible */}
      <div
        className='absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(199, 110, 30, 0.4) 0%, transparent 70%)',
        }}
      ></div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre */}
        <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-4'>
          Nos partenaires
        </h2>

        {/* Description */}
        <p className='text-white/70 text-center mb-12'>
          Ils nous font confiance à travers l'Afrique
        </p>

        {/* Logos partenaires */}
        <div className='flex justify-center items-center gap-8 md:gap-12 mb-12 overflow-hidden'>
          {partenaires.map((partenaire) => (
            <div key={partenaire.id} className='flex-shrink-0'>
              <img
                src={partenaire.logo}
                alt={partenaire.alt}
                className='h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity'
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center gap-3'>
          {/* Flèche gauche */}
          <button
            onClick={handlePrev}
            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors'
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
                  : 'border border-white/30 text-white/70 hover:bg-white/10'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Flèche droite */}
          <button
            onClick={handleNext}
            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors'
          >
            <i className='fa-solid fa-chevron-right text-sm'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PartenairesSection
