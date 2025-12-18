import React from 'react'

const FormationBourseRejoindreSection = () => {
  const logos = [
    { id: 1, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 1' },
    { id: 2, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 2' },
    { id: 3, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 3' },
    { id: 4, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 4' },
    { id: 5, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 5' },
    { id: 6, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 6' },
    { id: 7, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 7' },
  ]

  // const logosBottom = [
  //   { id: 8, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 8' },
  //   { id: 9, src: '/images/LOGO-ORIGINAL.png', alt: 'Partenaire 9' },
  // ]

  return (
    <section className='relative bg-[#100F20] py-20 md:py-32 overflow-hidden'>
      {/* Gradient orange en bas */}
      <div
        className='absolute bottom-0 left-0 right-0 h-48 md:h-64 pointer-events-none'
        style={{
          background:
            'linear-gradient(to top, rgba(199, 110, 30, 0.6) 0%, rgba(199, 110, 30, 0.1) 50%, transparent 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Titre principal - 60px */}
        <h2
          className='font-bold text-white mb-2'
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        >
          Rejoignez le réseau
        </h2>
        <h2
          className='font-bold text-hirna-orange mb-6'
          style={{ fontSize: '60px', lineHeight: '1.1' }}
        >
          HIRNA
        </h2>

        {/* Description */}
        <p className='text-white text-base md:text-lg mb-8'>
          Faites partie de la plateforme qui transforme l'éducation en Afrique
        </p>

        {/* Bouton */}
        <button className='inline-flex items-center gap-2 bg-hirna-orange text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-[#a85a18] transition-colors mb-16'>
          Développez vos partenariats
        </button>

        {/* Logos partenaires - première ligne - agrandi */}
        <div className='flex flex-wrap justify-center items-center gap-8 mb-8'>
          {logos.map((logo) => (
            <div key={logo.id} className='w-20 h-20 md:w-28 md:h-28'>
              <img
                src={logo.src}
                alt={logo.alt}
                className='w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity'
              />
            </div>
          ))}
        </div>

        {/* Logos partenaires - deuxième ligne - agrandi */}
        {/* <div className='flex flex-wrap justify-center items-center gap-8'>
          {logosBottom.map((logo) => (
            <div key={logo.id} className='w-20 h-20 md:w-28 md:h-28'>
              <img
                src={logo.src}
                alt={logo.alt}
                className='w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity'
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default FormationBourseRejoindreSection
