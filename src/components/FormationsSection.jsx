import React from 'react'
import FormationCard from './FormationCard'

const FormationsSection = () => {
  const filters = [
    { id: 1, label: 'Recherchez une...', hasDropdown: false },
    { id: 2, label: 'Pays', hasDropdown: true },
    { id: 3, label: 'Spécialité', hasDropdown: true },
    { id: 4, label: "Type d'établissement", hasDropdown: true },
  ]

  const formations = [
    {
      id: 1,
      type: 'FORMATION EN LIGNE',
      typeColor: 'bg-hirna-orange',
      image: '/images/formation.png',
      logo: '/images/logo-univ.png',
      price: '3500$ - 8000$',
      category: 'MASTER',
      title: 'Data Analyst',
      description:
        'Analyser les besoins des utilisateurs et rédiger les spécifications techniques',
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Médecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '02 ans',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: true,
    },
    {
      id: 2,
      type: 'FORMATION EN PRESENTIEL',
      typeColor: 'bg-hirna-orange',
      image: '/images/formation.png',
      logo: '/images/logo-univ.png',
      price: '3500$ - 8000$',
      category: 'LICENCE',
      title: 'Ingénieur logiciel',
      description:
        'Analyser les besoins des utilisateurs et rédiger les spécifications techniques',
      university: 'Simandou Academy',
      domains: 'Santé, Ingénierie, Médecine, Technologies',
      location: 'Conakry, Guinée',
      duration: '03 ans',
      startDate: 'A partir du 03 Décembre 2025',
      hasNotice: false,
    },
    {
      id: 3,
      type: "BOURSE D'ETUDE",
      typeColor: 'bg-hirna-orange',
      image: '/images/formation.png',
      logo: '/images/logo-univ.png',
      price: '8000$',
      category: 'Bourse',
      title: 'Bourse de mérite 2025',
      description:
        "La Bourse de Mérite 2025 vise à encourager l'excellence académique en Afrique.",
      university: 'Université Privée de Marrakech',
      domains: 'Santé, Ingénierie, Médecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '04 ans',
      startDate: 'Deadline : 03 Décembre 2025',
      hasNotice: true,
    },
  ]

  const handleView = (id) => {
    // TODO: Navigation vers la page détail
    console.log('Voir formation:', id)
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
              Découvrir nos formations et bourses
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-center text-white/70 mb-8 max-w-2xl mx-auto'>
          Notre mission est de rendre la formation accessible à tous, en offrant
          des programmes pratiques, innovants et adaptés aux besoins du marché
          actuel
        </p>

        {/* Bande Filtres - bg #191536 */}
        <div className='bg-[#191536] rounded-2xl px-6 py-4 mb-10'>
          <div className='flex flex-wrap justify-center gap-3'>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className='inline-flex items-center gap-2 bg-hirna-dark border border-hirna-orange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-hirna-orange/20 transition-colors'
              >
                {filter.label}
                {filter.hasDropdown && (
                  <i className='fa-solid fa-chevron-down text-xs'></i>
                )}
              </button>
            ))}
            {/* Bouton Rechercher - bg orange */}
            <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#a85a18] transition-colors'>
              Recherchez
              <i className='fa-solid fa-magnifying-glass text-xs'></i>
            </button>
          </div>
        </div>

        {/* Formation Cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {formations.map((formation) => (
            <FormationCard
              key={formation.id}
              type={formation.type}
              typeColor={formation.typeColor}
              image={formation.image}
              logo={formation.logo}
              price={formation.price}
              category={formation.category}
              title={formation.title}
              description={formation.description}
              university={formation.university}
              domains={formation.domains}
              location={formation.location}
              duration={formation.duration}
              startDate={formation.startDate}
              hasNotice={formation.hasNotice}
              onView={() => handleView(formation.id)}
            />
          ))}
        </div>

        {/* Bouton voir toutes */}
        <div className='flex justify-center mt-12'>
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
            Voir toutes les formations et bourses
          </button>
        </div>
      </div>
    </section>
  )
}

export default FormationsSection
