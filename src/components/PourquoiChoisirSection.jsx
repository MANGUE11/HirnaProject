import React from 'react'

const PourquoiChoisirSection = () => {
  const features = [
    {
      id: 1,
      icon: '/images/element1.png',
      title: 'Large choix',
      description: "Des opportunités variées d'éducation et d'emploi",
    },
    {
      id: 2,
      icon: '/images/element2.png',
      title: 'Accompagnement dédié',
      description: 'Un soutien personnalisé tout au long du parcours',
    },
    {
      id: 3,
      icon: '/images/element3.png',
      title: 'Plateforme intuitive',
      description: 'Navigation simple & intuitive',
    },
    {
      id: 4,
      icon: '/images/element4.png',
      title: "Orienté vers l'Afrique",
      description: "Des opportunités variées d'éducation et d'emploi",
    },
  ]

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#100F20]'>
      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre */}
        <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-12'>
          Pourquoi choisir Hirna
        </h2>

        {/* Grid 2x2 avec traits */}
        <div className='relative'>
          {/* Trait horizontal orange au milieu */}
          <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-hirna-orange'></div>

          {/* Trait vertical orange au milieu */}
          <div className='absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-hirna-orange'></div>

          <div className='grid grid-cols-2'>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex items-start gap-4 p-6 md:p-8 ${
                  index === 0
                    ? 'pr-8 pb-8'
                    : index === 1
                    ? 'pl-8 pb-8'
                    : index === 2
                    ? 'pr-8 pt-8'
                    : 'pl-8 pt-8'
                }`}
              >
                {/* Icône */}
                <div className='flex-shrink-0'>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className='w-12 h-12 md:w-16 md:h-16 object-contain'
                  />
                </div>

                {/* Texte */}
                <div>
                  <h3 className='text-xl md:text-2xl font-bold text-hirna-orange mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-white/70 text-base md:text-lg'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PourquoiChoisirSection
