import React from 'react'

const ProchainJobSection = () => {
  return (
    <section className='relative bg-[#100F20] pt-16 md:pt-24 pb-0 overflow-hidden'>
      {/* Gradient orange en bas */}
      <div
        className='absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none'
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.3) 40%, rgba(199, 110, 30, 0.6) 70%, #C76E1E 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-4 lg:gap-2 items-end'>
          {/* Colonne gauche - Texte */}
          <div className='text-center lg:text-left pb-16 md:pb-24 lg:pb-32'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 md:mb-12 leading-snug font-normal'>
              <span className='text-hirna-orange font-bold'>Obtenez</span> votre
              <br />
              prochain <span className='text-hirna-orange font-bold'>
                job
              </span>{' '}
              sur
              <br />
              <span className='text-hirna-orange font-bold'>Hirna</span>
            </h2>

            {/* Bouton S'inscrire */}
            <button className='inline-flex items-center gap-2 bg-hirna-orange text-hirna-dark px-6 py-3 rounded-full font-semibold hover:bg-[#a85a18] hover:text-white transition-all duration-300'>
              <i className='fa-solid fa-user'></i>
              S'inscrire
            </button>
          </div>

          {/* Colonne droite - Image au-dessus du gradient */}
          <div className='relative flex justify-center lg:justify-start z-20'>
            <img
              src='/images/students.png'
              alt='Étudiants avec laptops'
              className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain object-bottom'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProchainJobSection
