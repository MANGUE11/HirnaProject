import React from 'react'

const AboutInfoSection = () => {
  const features = [
    {
      id: 1,
      icon: <i className='fa-solid fa-link text-white text-base'></i>,
      title: 'Accès simplifié',
      description:
        'aux formations et aux bourses pour les étudiants africains.',
    },
    {
      id: 2,
      icon: <i className='fa-solid fa-circle-check text-white text-base'></i>,
      title: 'Meilleure employabilité',
      description: "Accès direct aux offres d'emploi et de stage.",
    },
    {
      id: 3,
      icon: (
        <i className='fa-solid fa-map-location-dot text-white text-base'></i>
      ),
      title: 'Valorisation des écoles locales',
      description: "Développement d'un marché africain.",
    },
  ]

  return (
    // MODIFICATION : py-10 md:py-16 pour réduire l'espace en haut et en bas
    <section className='relative bg-[#191536] py-10 md:py-16 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-y-6 lg:gap-0 items-center'>
          {/* Colonne gauche - Texte */}
          <div className='w-full lg:pl-20'>
            {/* MODIFICATION : Tout le titre est maintenant en text-white */}
            <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
              A propos Hirna
            </h2>

            <div className='text-white/70 text-sm md:text-lg space-y-4 mb-6 max-w-md'>
              <p>
                L'éducation représente l'un des leviers les plus puissants pour
                transformer l'Afrique. Chaque année, des millions de jeunes
                aspirent à un avenir meilleur, mais se heurtent à plusieurs
                obstacles.
              </p>
              <p>
                Notre plateforme est née d'un constat clair : il est temps
                d'offrir une passerelle{' '}
                <span className='text-hirna-orange'>moderne</span>,{' '}
                <span className='text-hirna-orange'>fiable</span> et{' '}
                <span className='text-hirna-orange'>inclusive</span>.
              </p>
            </div>
          </div>

          {/* Colonne droite - Image ampoule */}
          <div className='flex justify-center lg:justify-start'>
            <img
              src='/images/lampe Hirna.png'
              alt='Ampoule Hirna'
              className='w-80 md:w-[32rem] lg:w-[35rem] object-contain'
            />
          </div>
        </div>

        {/* Feature Cards */}
        {/* MODIFICATION : mt-12 au lieu de mt-20 */}
        <div className='mt-12 max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-3 shadow-xl'>
            {features.map((feature, index) => (
              <div key={feature.id} className='relative z-20'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                  <div className='w-10 h-10 rounded-full bg-hirna-orange flex items-center justify-center shadow-lg'>
                    {feature.icon}
                  </div>
                </div>

                <div
                  className={`relative text-center pt-12 pb-6 px-6 bg-white h-full
                    ${index === 0 ? 'md:rounded-l-2xl' : ''}
                    ${index === features.length - 1 ? 'md:rounded-r-2xl' : ''}
                    ${features.length === 1 ? 'rounded-2xl' : ''}
                  `}
                >
                  {index !== features.length - 1 && (
                    <div className='hidden md:block absolute right-0 top-0 h-full w-px bg-gray-200 z-10'></div>
                  )}

                  {index !== features.length - 1 && (
                    <div className='md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-11/12 h-px bg-gray-200'></div>
                  )}

                  <h3
                    className='font-bold text-hirna-orange mb-2 mt-0'
                    style={{ fontSize: '24px', lineHeight: '1.1' }}
                  >
                    {feature.title}
                  </h3>

                  <p className='text-hirna-dark/70 text-sm'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boutons */}
        {/* MODIFICATION : mt-10 au lieu de mt-16 */}
        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-10'>
          <button className='bg-hirna-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#a85a18] transition-colors'>
            Voir les offres d'emploi
          </button>
          <button className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-hirna-dark transition-colors'>
            Voir les programmes et bourses
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutInfoSection
