import React from 'react'

const OrientationSection = () => {
  return (
    <section className='relative bg-[#100F20] pt-0 md:pt-24 pb-0 overflow-hidden'>
      {/* Gradient orange en bas - au-dessus de l'image */}
      <div
        className='absolute bottom-0 left-0 right-0 h-32 md:h-48 z-20 pointer-events-none'
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.3) 40%, rgba(199, 110, 30, 0.6) 70%, #C76E1E 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 items-start'>
          {/* Colonne gauche - Texte centré vers le haut */}
          <div className='text-center lg:text-left pt-8 md:pt-16'>
            <h2 className='text-4xl md:text-5xl lg:text-5xl text-white mb-16 leading-snug font-normal'>
              Faciliter votre{' '}
              <span className='text-hirna-orange font-bold'>orientation</span>
              <br className='hidden md:block' />
              sur <span className='text-hirna-orange font-bold'>Hirna</span> et
              accéder à des
              <br className='hidden md:block' />
              <span className='text-hirna-orange font-bold'>formations</span> et
              des <span className='text-hirna-orange font-bold'>bourses</span>
              <br className='hidden md:block' />
              dès aujourd'hui
            </h2>

            {/* Bouton S'inscrire */}
            <button className='inline-flex items-center gap-2 bg-transparent border-2 border-hirna-orange text-hirna-orange px-6 py-3 rounded-lg font-semibold hover:bg-hirna-orange hover:text-white transition-all duration-300'>
              <i className='fa-solid fa-user'></i>
              S'inscrire
            </button>
          </div>

          {/* Colonne droite - Image collée en bas et descendue */}
          <div className='relative flex justify-center lg:justify-end mb-[-40px] md:mb-[-100px]'>
            <img
              src='/images/image2.png'
              alt='Étudiante avec documents'
              className='w-full max-w-sm md:max-w-md lg:max-w-lg object-contain object-bottom'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrientationSection
