import React from 'react'
import SchoolCard from './SchoolCard'

const EntreprisesSection = () => {
  const entreprises = [
    {
      id: 1,
      image: '/images/formation.png',
      logo: '/images/orange.png',
      name: 'Ecobank',
      type: 'Banque',
      location: 'DAKAR, Sénégal',
      offersCount: 1,
      publishedDate: '02/09/2025',
      hasNotice: true,
    },
    {
      id: 2,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'OIF',
      type: 'Organisation internationale',
      location: "ABIDJAN, Côte d'Ivoire",
      offersCount: 1,
      publishedDate: '02/09/2025',
      hasNotice: true,
    },
    {
      id: 3,
      image: '/images/formation.png',
      logo: '/images/riotinto.png',
      name: 'Rio Tinto',
      type: 'Mines',
      location: 'CONAKRY, Guinée',
      offersCount: 1,
      publishedDate: '02/09/2025',
      hasNotice: false,
    },
  ]

  const handleFollow = (id) => {
    console.log('Suivre entreprise:', id)
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
              <i className='fa-solid fa-building text-hirna-orange text-sm'></i>
            </div>
            <h2 className='text-xl md:text-2xl font-bold text-white'>
              Les entreprises qui recrutent sur Hirna
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-center text-white/70 mb-12 max-w-3xl mx-auto text-lg'>
          Explorez les entreprises qui recrutent et découvrez les opportunités
          qu'elles offrent chez{' '}
          <span className='text-hirna-orange font-bold'>UNIVERS HIRNA</span>
        </p>

        {/* Entreprises Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {entreprises.map((entreprise) => (
            <SchoolCard
              key={entreprise.id}
              image={entreprise.image}
              logo={entreprise.logo}
              name={entreprise.name}
              type={entreprise.type}
              location={entreprise.location}
              offersCount={entreprise.offersCount}
              publishedDate={entreprise.publishedDate}
              onFollow={() => handleFollow(entreprise.id)}
              hasNotice={entreprise.hasNotice}
            />
          ))}
        </div>

        {/* Bouton découvrir toutes */}
        <div className='flex justify-center mt-12'>
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
            Découvrir toutes les entreprises
          </button>
        </div>
      </div>
    </section>
  )
}

export default EntreprisesSection
