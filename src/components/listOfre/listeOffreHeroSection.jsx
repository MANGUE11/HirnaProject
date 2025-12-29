import React from 'react'

const ListeOffreHeroSection = () => {
  return (
    <section className='relative w-full bg-[#100F20] pt-10 md:pt-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center'>
        {/* Texte Principal - Très proche de l'image */}
        <div className='text-center mb-4 md:mb-6'>
          <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight'>
            <span className='text-hirna-orange'>Hirna</span>{' '}
            <span className='text-white'>c'est votre allié</span>
            <br />
            <span className='text-white'>pour </span>
            <span className='text-white font-extrabold'>trouver la bonne</span>
            <br />
            <span className='text-white font-extrabold'>opportunité</span>
          </h1>
        </div>

        {/* Conteneur de l'image PNG - Agrandissement maximum */}
        <div className='relative w-full max-w-6xl mx-auto flex justify-center items-end'>
          <img
            src='/images/Group 521.png'
            alt='Alliés Hirna'
            className='w-full h-auto object-contain z-20'
            style={{
              maxHeight: 'min(800px, 85vh)', // Image beaucoup plus grande
              filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.5))', // Donne du relief au PNG
            }}
          />
        </div>
      </div>

      {/* Le Gradient du bas - Très prononcé pour l'effet de fusion */}
      <div
        className='absolute bottom-0 left-0 w-full h-32 md:h-56 z-40 pointer-events-none'
        style={{
          background:
            'linear-gradient(to top, rgba(234, 114, 31, 0.5) 0%, rgba(16, 15, 32, 0) 100%)',
        }}
      ></div>
    </section>
  )
}

export default ListeOffreHeroSection
