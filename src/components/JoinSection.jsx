import React from 'react'

const JoinSection = () => {
  const stats = [
    {
      id: 1,
      value: '+5000',
      label: 'connexions crées',
    },
    {
      id: 2,
      value: '+150',
      label: 'écoles partenaires',
    },
    {
      id: 3,
      value: '+300',
      label: 'entreprises inscrites',
    },
  ]

  return (
    <section className='relative bg-hirna-dark py-20 md:py-32 mt-16 md:mt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative grid lg:grid-cols-2 gap-8 items-center'>
          {/* Colonne gauche - Carte Afrique */}
          <div className='relative flex justify-center'>
            <img
              src='/images/Element - Africa.png'
              alt='Carte Afrique avec connexions'
              className='w-full max-w-sm md:max-w-md object-contain'
            />
          </div>

          {/* Colonne droite - Texte */}
          <div className='text-center lg:text-left'>
            {/* Titre */}
            <h2 className='text-3xl md:text-4xl font-bold text-hirna-orange mb-4'>
              Rejoignez Hirna
            </h2>

            {/* Description */}
            <p className='text-white/70 text-base mb-6 max-w-md mx-auto lg:mx-0'>
              Rejoignez des milliers d'étudiants
              <br className='hidden md:block' />
              et de professionnels qui construisent
              <br className='hidden md:block' />
              leur avenir avec{' '}
              <span className='text-hirna-orange font-semibold'>HIRNA</span>
            </p>

            {/* Bouton CTA */}
            <button className='inline-flex items-center gap-2 bg-transparent border-2 border-hirna-orange text-hirna-orange px-6 py-3 rounded-lg font-semibold hover:bg-hirna-orange hover:text-white transition-all duration-300'>
              <svg
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
              S'inscrire
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-12 md:mt-16'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='bg-hirna-orange rounded-xl px-6 md:px-8 py-5 md:py-6 text-center min-w-[160px] md:min-w-[180px]'
            >
              <p className='text-2xl md:text-3xl font-bold text-white mb-1'>
                {stat.value}
              </p>
              <p className='text-sm text-white/90'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinSection
