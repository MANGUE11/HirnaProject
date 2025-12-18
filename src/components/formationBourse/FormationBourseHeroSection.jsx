import React from 'react'

const FormationBourseHeroSection = () => {
  const features = [
    {
      id: 1,
      icon: <i className='fa-solid fa-eye text-white text-base'></i>,
      title: 'Visibilité accrue',
    },
    {
      id: 2,
      icon: <i className='fa-solid fa-shuffle text-white text-base'></i>,
      title: 'Mobilité inter-pays',
    },
    {
      id: 3,
      icon: <i className='fa-solid fa-users text-white text-base'></i>,
      title: "Collaboration au coeur de l'Afrique",
    },
  ]

  return (
    <section className='relative bg-[#191536] pt-20 pb-16 min-h-[80vh] flex flex-col justify-center'>
      {/* Gradient orange de fond */}
      <div
        className='absolute bottom-0 left-0 right-0 h-64 z-10 pointer-events-none'
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.3) 40%, rgba(199, 110, 30, 0.6) 70%, #C76E1E 100%)',
        }}
      ></div>

      <div className='relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Grille ajustée pour un centrage parfait */}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-0 items-center'>
          {/* Colonne gauche - Texte BIEN CENTRÉ */}
          <div className='text-center lg:text-left lg:pr-6 flex flex-col justify-center'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-medium mb-6'>
              <span className='text-hirna-orange font-bold'>Hirna</span>,
              <br />
              la <span className='font-bold'>plateforme</span>
              <br />
              qui unit <span className='font-bold'>savoir</span>,
              <br />
              <span className='font-bold'>talents</span> et
              <br />
              <span className='font-bold'>opportunités</span>.
            </h1>
          </div>

          {/* Colonne droite - Image téléphone */}
          <div className='flex justify-center lg:justify-end lg:pl-6'>
            <img
              src='/images/telphone.png'
              alt='Application Hirna'
              className='w-52 md:w-64 lg:w-72 h-auto object-contain'
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className='mt-12 mx-auto w-full max-w-4xl'>
          <div className='grid grid-cols-1 md:grid-cols-3 shadow-2xl relative z-30'>
            {features.map((feature, index) => (
              <div key={feature.id} className='relative'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                  <div className='w-9 h-9 rounded-full bg-hirna-orange flex items-center justify-center shadow-lg'>
                    {feature.icon}
                  </div>
                </div>

                <div
                  className={`relative text-center pt-10 pb-6 px-4 bg-white h-full flex items-center justify-center
                    ${index === 0 ? 'md:rounded-l-2xl' : ''}
                    ${index === features.length - 1 ? 'md:rounded-r-2xl' : ''}
                    ${index === 0 ? 'rounded-t-2xl md:rounded-tr-none' : ''}
                    ${
                      index === features.length - 1
                        ? 'rounded-b-2xl md:rounded-bl-none'
                        : ''
                    }
                  `}
                  style={{ minHeight: '110px' }}
                >
                  {index !== features.length - 1 && (
                    <div className='hidden md:block absolute right-0 top-0 h-full w-px bg-gray-200 z-10'></div>
                  )}
                  {index !== features.length - 1 && (
                    <div className='md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-11/12 h-px bg-gray-200'></div>
                  )}

                  {/* MODIFICATION : Couleur #191536 et Taille 20px */}
                  <h3
                    className='font-bold text-[#191536]'
                    style={{ fontSize: '20px', lineHeight: '1.2' }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormationBourseHeroSection
