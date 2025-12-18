import React from 'react'

const EntreprisesCtaSection = () => {
  return (
    <section className='relative py-12 md:py-16 overflow-hidden bg-[#191536]'>
      {/* Gradient orange en bas - au-dessus de l'image */}
      <div
        className='absolute bottom-0 left-0 right-0 h-24 md:h-32 z-20 pointer-events-none'
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.3) 40%, rgba(199, 110, 30, 0.6) 70%, #C76E1E 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-2 items-center'>
          {/* Colonne gauche - Texte avec width agrandi */}
          <div className='max-w-xl'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8'>
              <span className='text-hirna-orange font-bold'>
                Entreprises, créez
              </span>{' '}
              votre
              <br />
              compte sur{' '}
              <span className='text-hirna-orange font-bold'>Hirna</span> et
              <br />
              <span className='text-hirna-orange font-bold'>accédez</span> à une
              nouvelle
              <br />
              génération de{' '}
              <span className='text-hirna-orange font-bold'>talents</span>.
            </h2>

            {/* Bouton Créer un compte */}
            <button className='inline-flex items-center gap-2 bg-hirna-orange text-hirna-dark px-6 py-3 rounded-full font-semibold hover:bg-[#a85a18] hover:text-white transition-all duration-300'>
              <i className='fa-solid fa-user'></i>
              Créer un compte
            </button>
          </div>

          {/* Colonne droite - Image */}
          <div className='relative flex justify-center lg:justify-end z-10'>
            <img
              src='/images/image3.png'
              alt='Talent professionnel'
              className='w-full max-w-lg md:max-w-xl object-contain mb-[-60px] md:mb-[-80px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EntreprisesCtaSection
