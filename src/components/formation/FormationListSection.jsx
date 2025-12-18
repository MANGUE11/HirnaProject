import React, { useState } from 'react'
import FormationCard from '../FormationCard'
import CommencezCard from '../CommencezCard'

const FormationListSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  const filters = [
    { id: 1, label: 'Recherchez une...', hasDropdown: true, isFirst: true },
    { id: 2, label: "Domaine d'etudes", hasDropdown: true, isFirst: false },
    { id: 3, label: 'Niveau', hasDropdown: true, isFirst: false },
    { id: 4, label: 'Pays', hasDropdown: true, isFirst: false },
    { id: 5, label: 'Ville', hasDropdown: true, isFirst: false },
    { id: 6, label: 'Prix de la scolarité', hasDropdown: true, isFirst: false },
    { id: 7, label: 'Bourse disponible', hasDropdown: true, isFirst: false },
  ]

  const formations = [
    {
      id: 1,
      image: '/images/formation.png',
      type: 'FORMATION EN LIGNE',
      typeColor: 'bg-hirna-orange',
      price: '3500$ - 8000$',
      logo: '/images/logo masy design.jpg',
      category: 'CERTIFICAT',
      title: 'Data Analyst',
      description:
        'Collecter, trier et structurer les données issues de différentes sources (sites web, ventes, réseaux sociaux',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 2,
      image: '/images/formation.png',
      type: 'FORMATION EN PRESENTIEL',
      typeColor: 'bg-hirna-orange',
      price: '3500$ - 8000$',
      logo: '/images/logo masy design.jpg',
      category: 'LICENCE',
      title: 'Ingénieur logiciel',
      description:
        'Analyser les besoins des utilisateurs et rédiger les spécifications techniques',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 3,
      image: '/images/formation.png',
      type: 'FORMATION EN PRESENTIEL',
      typeColor: 'bg-hirna-orange',
      price: '3500$ - 8000$',
      logo: '/images/logo masy design.jpg',
      category: 'LICENCE',
      title: 'Ingénieur logiciel',
      description:
        'Analyser les besoins des utilisateurs et rédiger les spécifications techniques',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 4,
      image: '/images/formation.png',
      type: 'FORMATION EN LIGNE',
      typeColor: 'bg-hirna-orange',
      price: '3500$ - 8000$',
      logo: '/images/logo masy design.jpg',
      category: 'CERTIFICAT',
      title: 'Data Analyst',
      description:
        'Collecter, trier et structurer les données issues de différentes sources (sites web, ventes, réseaux sociaux',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 5,
      image: '/images/formation.png',
      type: 'FORMATION EN LIGNE',
      typeColor: 'bg-hirna-orange',
      price: '3500$ - 8000$',
      logo: '/images/logo masy design.jpg',
      category: 'MASTER',
      title: 'Marketing Digital',
      description:
        'Maîtriser les stratégies de marketing digital et les outils de communication',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '12 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 6,
      image: '/images/formation.png',
      type: 'FORMATION EN PRESENTIEL',
      typeColor: 'bg-hirna-orange',
      price: '3500$ - 8000$',
      logo: '/images/logo masy design.jpg',
      category: 'LICENCE',
      title: 'Génie Civil',
      description:
        'Concevoir et superviser la construction des infrastructures',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '36 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 7,
      image: '/images/formation.png',
      type: 'FORMATION EN LIGNE',
      typeColor: 'bg-hirna-orange',
      price: '2500$ - 5000$',
      logo: '/images/logo masy design.jpg',
      category: 'CERTIFICAT',
      title: 'Cybersécurité',
      description: 'Protéger les systèmes informatiques contre les menaces',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 8,
      image: '/images/formation.png',
      type: 'FORMATION EN PRESENTIEL',
      typeColor: 'bg-hirna-orange',
      price: '4000$ - 9000$',
      logo: '/images/logo masy design.jpg',
      category: 'MASTER',
      title: 'Intelligence Artificielle',
      description:
        "Développer des solutions basées sur l'IA et le machine learning",
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '24 Mois',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
  ]

  const handlePrev = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
  const handleNext = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))

  return (
    <section className='relative bg-[#100F20] overflow-hidden py-16'>
      {/* Gradient Orange en bas */}
      <div
        className='absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.15) 100%)',
        }}
      />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Barre de filtres */}
        <div className='mb-12'>
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
              Recherchez{' '}
              <i className='fa-solid fa-magnifying-glass text-xs'></i>
            </button>
          </div>
        </div>

        {/* Grille des 8 formations */}
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            {formations.map((formation) => (
              <FormationCard key={formation.id} {...formation} />
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center items-center gap-3 mb-20'>
            <button
              onClick={handlePrev}
              className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10'
            >
              <i className='fa-solid fa-chevron-left text-sm'></i>
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentPage === page
                    ? 'bg-hirna-orange text-white'
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNext}
              className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10'
            >
              <i className='fa-solid fa-chevron-right text-sm'></i>
            </button>
          </div>

          {/* Insertion du composant CommencezCard ici */}
          <div className='mt-12'>
            <CommencezCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormationListSection
