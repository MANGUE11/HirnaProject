import React from 'react'

const FormationHeroSection = () => {
  return (
    <section className='relative bg-[#191536] min-h-[80vh] overflow-hidden'>
      {/* Gradient orange en bas */}
      <div
        className='absolute bottom-0 left-0 right-0 h-32 md:h-48 pointer-events-none'
        style={{
          background:
            'linear-gradient(to top, rgba(199, 110, 30, 0.5) 0%, rgba(199, 110, 30, 0.2) 50%, transparent 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24'>
        <div className='flex items-center'>
          {/* Image étudiante à gauche */}
          <div className='w-1/2'>
            <img
              src='/images/image2.png'
              alt='Étudiante'
              className='w-full max-w-lg object-contain'
            />
          </div>

          {/* Texte à droite - proche de l'image */}
          <div className='w-1/2 -ml-16'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              <span className='text-white'>Découvrez</span>
              <br />
              <span className='text-white font-normal'>toutes vos</span>
              <br />
              <span className='text-white'>formations</span>
              <br />
              <span className='text-white font-normal'>sur </span>
              <span className='text-hirna-orange'>Hirna</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormationHeroSection
