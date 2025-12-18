import React from 'react'
import SchoolCard from './SchoolCard'

const SchoolsSection = () => {
  const schools = [
    {
      id: 1,
      image: '/images/formation.png',
      logo: '/images/riotinto.png',
      name: 'UCAD',
      type: 'Enseignement supérieur',
      location: 'DAKAR, Sénégal',
      offersCount: 1,
      publishedDate: '02/09/2025',
      hasNotice: false,
    },
    {
      id: 2,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'UCAD',
      type: 'Enseignement supérieur',
      location: 'DAKAR, Sénégal',
      offersCount: 1,
      publishedDate: '02/09/2025',
      hasNotice: false,
    },
    {
      id: 3,
      image: '/images/formation.png',
      logo: '/images/riotinto.png',
      name: 'UCAD',
      type: 'Enseignement supérieur',
      location: 'DAKAR, Sénégal',
      offersCount: 1,
      publishedDate: '02/09/2025',
      hasNotice: true,
    },
  ]

  const handleFollow = (id) => {
    console.log('Suivre école:', id)
  }

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#100F20]'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header avec icône - gradient orange */}
        <div className='flex justify-center mb-6'>
          <div
            className='inline-flex items-center gap-3 rounded-full px-6 py-3'
            style={{
              background:
                'linear-gradient(to right, #C76E1E 0%, rgba(199, 110, 30, 0.3) 100%)',
            }}
          >
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'>
              <i className='fa-solid fa-graduation-cap text-hirna-orange text-sm'></i>
            </div>
            <h2 className='text-xl md:text-2xl font-bold text-white'>
              Les écoles qui recrutent
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-center text-white/70 mb-12 max-w-3xl mx-auto text-lg'>
          Parcourez les écoles, universités et institutions partenaires.
          Comparez leurs programmes et choisissez l'établissement qui reflète
          vos aspirations.
        </p>

        {/* School Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {schools.map((school) => (
            <SchoolCard
              key={school.id}
              image={school.image}
              logo={school.logo}
              name={school.name}
              type={school.type}
              location={school.location}
              offersCount={school.offersCount}
              publishedDate={school.publishedDate}
              onFollow={() => handleFollow(school.id)}
              hasNotice={school.hasNotice}
            />
          ))}
        </div>

        {/* Bouton découvrir toutes */}
        <div className='flex justify-center mt-12'>
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
            Découvrir toutes les écoles
          </button>
        </div>
      </div>
    </section>
  )
}

export default SchoolsSection
