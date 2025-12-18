import React, { useState } from 'react'
import EcoleCard from './EcoleCard'

const FormationBourseEcolesSection = () => {
  const [currentPage, setCurrentPage] = useState(2)
  const totalPages = 4

  const filters = [
    { id: 1, label: 'Recherchez une...', hasDropdown: true, isFirst: true },
    { id: 2, label: 'Pays', hasDropdown: true, isFirst: false },
    { id: 3, label: 'Ville', hasDropdown: true, isFirst: false },
    { id: 4, label: "Type d'établissement", hasDropdown: true, isFirst: false },
    { id: 5, label: 'Domaine', hasDropdown: true, isFirst: false },
    {
      id: 6,
      label: "Langue d'enseignement",
      hasDropdown: true,
      isFirst: false,
    },
    { id: 7, label: 'Scolarité', hasDropdown: true, isFirst: false },
  ]

  const ecoles = [
    {
      id: 1,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'Université Cheikh Anta Diop de Dakar',
      description:
        "Établissement d'enseignement supérieur de recherche et d'expertise en facultés.",
      location: 'DAKAR, Sénégal',
      country: 'Sénégal',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      levels: 'Licence, Doctorat & Master',
      offersCount: 200,
      price: '5000$ - 8000$',
      hasNotice: true,
    },
    {
      id: 2,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'UPM - Université Privée de Marrakech',
      description:
        "Pôle Ingénierie et Innovation vous ouvre l'accès à des cursus de formation.",
      location: 'MARRAKECH, Maroc',
      country: 'Maroc',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      levels: 'Licence, Doctorat & Master',
      offersCount: 200,
      price: '5400$ - 8000$',
      hasNotice: true,
    },
    {
      id: 3,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'Ghana university',
      description:
        'Université publique ghanéenne créée en 1948, basée à Legon, Accra.',
      location: 'ACCRA, Ghana',
      country: 'Ghana',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      levels: 'Licence, Doctorat & Master',
      offersCount: 200,
      price: '5000$ - 8000$',
      hasNotice: true,
    },
    {
      id: 4,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'Université Cheikh Anta Diop de Dakar',
      description:
        "Établissement d'enseignement supérieur de recherche et d'expertise en facultés.",
      location: 'DAKAR, Sénégal',
      country: 'Sénégal',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      levels: 'Licence, Doctorat & Master',
      offersCount: 200,
      price: '5000$ - 8000$',
      hasNotice: false,
    },
    {
      id: 5,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'UPM - Université Privée de Marrakech',
      description:
        "Pôle Ingénierie et Innovation vous ouvre l'accès à des cursus de formation.",
      location: 'MARRAKECH, Maroc',
      country: 'Maroc',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      levels: 'Licence, Doctorat & Master',
      offersCount: 200,
      price: '5400$ - 8000$',
      hasNotice: false,
    },
    {
      id: 6,
      image: '/images/formation.png',
      logo: '/images/logo ma-sy.jpg',
      name: 'Ghana university',
      description:
        'Université publique ghanéenne créée en 1948, basée à Legon, Accra.',
      location: 'ACCRA, Ghana',
      country: 'Ghana',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      levels: 'Licence, Doctorat & Master',
      offersCount: 200,
      price: '5000$ - 8000$',
      hasNotice: false,
    },
  ]

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))
  }

  return (
    <section className='relative bg-[#100F20] overflow-hidden py-16'>
      {/* Header avec titre */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
        {/* Titre avec badge - bordure orange */}
        <div className='flex justify-center mb-4'>
          <div
            className='inline-flex items-center gap-3 rounded-full px-8 py-4 border border-hirna-orange'
            style={{
              background:
                'linear-gradient(to right, #C76E1E 0%, rgba(199, 110, 30, 0.3) 100%)',
            }}
          >
            <div className='w-10 h-10 rounded-full bg-[#191536] flex items-center justify-center'>
              <i className='fa-solid fa-building-columns text-white text-lg'></i>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white '>
              Nos écoles partenaires
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-white/70 text-center text-sm md:text-base'>
          Découvrez les institutions qui façonnent l'éducation de l'Afrique
        </p>
      </div>

      {/* Barre de filtres */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
        <div className='flex flex-wrap justify-center gap-2 bg-[#191536] rounded-full py-3 px-4'>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className='inline-flex items-center gap-1 text-white text-xs md:text-sm px-3 py-2 rounded-full border border-hirna-orange transition-colors'
              style={
                filter.isFirst
                  ? {
                      background:
                        'linear-gradient(to right, #C76E1E 0%, rgba(199, 110, 30, 0.3) 100%)',
                    }
                  : {}
              }
            >
              {filter.label}
              {filter.hasDropdown && (
                <i className='fa-solid fa-chevron-down text-xs'></i>
              )}
            </button>
          ))}
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white text-xs md:text-sm px-4 py-2 rounded-full'>
            Recherchez
            <i className='fa-solid fa-magnifying-glass text-xs'></i>
          </button>
        </div>
      </div>

      {/* Cards - 3 par ligne */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
          {ecoles.map((ecole) => (
            <EcoleCard
              key={ecole.id}
              image={ecole.image}
              logo={ecole.logo}
              name={ecole.name}
              description={ecole.description}
              location={ecole.location}
              country={ecole.country}
              domains={ecole.domains}
              levels={ecole.levels}
              offersCount={ecole.offersCount}
              price={ecole.price}
              hasNotice={ecole.hasNotice}
              onView={() => console.log('View', ecole.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center gap-3 mb-16'>
          {/* Flèche gauche */}
          <button
            onClick={handlePrev}
            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors'
          >
            <i className='fa-solid fa-chevron-left text-sm'></i>
          </button>

          {/* Numéros de page */}
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                currentPage === page
                  ? 'bg-hirna-orange text-white'
                  : 'border border-white/30 text-white/70 hover:bg-white/10'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Flèche droite */}
          <button
            onClick={handleNext}
            className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors'
          >
            <i className='fa-solid fa-chevron-right text-sm'></i>
          </button>
        </div>

        {/* Section Commencez maintenant */}
        <div className='text-center'>
          <h3 className='text-2xl md:text-3xl font-bold text-hirna-orange mb-2'>
            Commencez maintenant
          </h3>
          <p className='text-white/70 text-sm mb-6'>
            Trouvez votre voie dès aujourd'hui
          </p>
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
            <i className='fa-solid fa-user text-sm'></i>
            S'inscrire
          </button>
        </div>
      </div>
    </section>
  )
}

export default FormationBourseEcolesSection
