import React from 'react'

const FormationBourseBourseSection = () => {
  const bourses = [
    {
      id: 1,
      icon: <i className='fa-solid fa-trophy text-white text-lg'></i>,
      title: "Bourses d'excellence académiques",
      description:
        'Atteignez vos objectifs et ouvrez vous les portes des meilleures opportunités',
      buttonText: 'Voir les bourses',
    },
    {
      id: 2,
      icon: <i className='fa-solid fa-globe text-white text-lg'></i>,
      title: 'Programmes de mobilité régionale',
      description:
        'Immergez vous dans des cultures et des symptômes éducatifs différents en Afrique',
      buttonText: 'Voir les bourses',
    },
    {
      id: 3,
      icon: <i className='fa-solid fa-dollar-sign text-white text-lg'></i>,
      title: 'Aide financière au mérite',
      description:
        "Profitez d'une assistance financière basée sur vos performances académiques",
      buttonText: 'Voir les bourses',
    },
  ]

  return (
    <section className='relative bg-[#191536] py-20 md:py-32 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
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

        {/* Cards */}
        <div className='flex flex-wrap justify-center gap-4'>
          {bourses.map((bourse) => (
            <div
              key={bourse.id}
              className='relative pt-6'
              style={{ width: '335px' }}
            >
              {/* Icône flottante */}
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 z-10'>
                <div className='w-12 h-12 rounded-full bg-hirna-orange flex items-center justify-center shadow-lg'>
                  {bourse.icon}
                </div>
              </div>

              {/* Card */}
              <div
                className='border border-hirna-orange rounded-2xl pt-12 pb-8 px-6 text-center flex flex-col justify-between'
                style={{
                  background:
                    'linear-gradient(to bottom, #191536 0%, #191536 85%, rgba(199, 110, 30, 0.15) 100%)',
                  height: '560px',
                }}
              >
                <div>
                  {/* Titre - 32px */}
                  <h3
                    className='text-hirna-orange font-bold mb-6'
                    style={{ fontSize: '32px', lineHeight: '1.2' }}
                  >
                    {bourse.title}
                  </h3>

                  {/* Description - 30px */}
                  <p
                    className='text-white'
                    style={{ fontSize: '30px', lineHeight: '1.3' }}
                  >
                    {bourse.description}
                  </p>
                </div>

                {/* Bouton */}
                <div className='mt-8'>
                  <button className='inline-flex items-center gap-2 bg-hirna-orange text-white text-sm px-6 py-3 rounded-full hover:bg-[#a85a18] transition-colors'>
                    {bourse.buttonText}
                    <i className='fa-solid fa-arrow-right text-sm'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FormationBourseBourseSection
