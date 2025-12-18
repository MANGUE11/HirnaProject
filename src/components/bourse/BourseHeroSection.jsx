import React from 'react'

const BourseHeroSection = () => {
  return (
    <section className='relative bg-[#191536] min-h-[90vh] overflow-hidden'>
      {/* Gradient orange en bas */}
      <div
        className='absolute bottom-0 left-0 right-0 h-48 md:h-64 pointer-events-none z-20'
        style={{
          background:
            'linear-gradient(to top, rgba(199, 110, 30, 0.5) 0%, rgba(199, 110, 30, 0.2) 50%, transparent 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24'>
        {/* Petit titre en haut */}
        <p className='text-hirna-orange text-center text-sm font-bold uppercase tracking-wider mb-6'>
          Rejoignez des étudiants brillants
        </p>

        {/* Titre principal avec badge */}
        <div className='flex justify-center mb-6'>
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
            <h2 className='text-2xl md:text-3xl font-bold text-white'>
              Bourses & Opportunités académiques
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-white text-center text-sm md:text-base max-w-2xl mx-auto mb-12'>
          Hirna vous connecte aux meilleurs opportunités grâce à des aides sur
          mesure
        </p>

        {/* Image étudiant centrée */}
        <div className='flex justify-center'>
          <img
            src='/images/image3.png'
            alt='Étudiant'
            className='w-full max-w-md object-contain relative z-10'
          />
        </div>
      </div>
    </section>
  )
}

export default BourseHeroSection
