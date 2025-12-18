import React from 'react'
import JobCard from './JobCard'

const JobsSection = () => {
  const filters = [
    { id: 1, label: 'Recherchez une...', hasDropdown: false, isActive: true },
    { id: 2, label: 'Dernières', hasDropdown: false, isActive: false },
    { id: 3, label: 'Recommandées', hasDropdown: false, isActive: false },
    { id: 4, label: 'Populaires', hasDropdown: false, isActive: false },
    { id: 5, label: 'Pays', hasDropdown: true, isActive: false },
    { id: 6, label: 'Type de Contrat', hasDropdown: true, isActive: false },
  ]

  const jobs = [
    {
      id: 1,
      logo: '/images/orange.png',
      title: 'Développeur Web',
      company: 'ORANGE SENEGAL',
      contractType: 'CDI',
      experience: '01 - 03 ans',
      location: 'Conakry',
      publishedDate: '15/10/2025',
    },
    {
      id: 2,
      logo: '/images/logo ma-sy.jpg',
      title: 'Ingénieur IT',
      company: 'CANAL + FRANCE',
      contractType: 'CDI',
      experience: '01 - 03 ans',
      location: 'Conakry',
      publishedDate: '17/10/2025',
    },
    {
      id: 3,
      logo: '/images/orange.png',
      title: 'Développeur Web',
      company: 'ORANGE SENEGAL',
      contractType: 'CDI',
      experience: '01 - 03 ans',
      location: 'Conakry',
      publishedDate: '15/10/2025',
    },
    {
      id: 4,
      logo: '/images/riotinto.png',
      title: 'Assistante RH',
      company: 'RIO TINTO',
      contractType: 'CDI',
      experience: '01 - 03 ans',
      location: 'Conakry',
      publishedDate: '02/09/2025',
    },
    {
      id: 5,
      logo: '/images/logo ma-sy.jpg',
      title: 'Ingénieur IT',
      company: 'CANAL + FRANCE',
      contractType: 'CDI',
      experience: '01 - 03 ans',
      location: 'Conakry',
      publishedDate: '17/10/2025',
    },
    {
      id: 6,
      logo: '/images/orange.png',
      title: 'Assistante RH',
      company: 'RIO TINTO',
      contractType: 'CDI',
      experience: '01 - 03 ans',
      location: 'Conakry',
      publishedDate: '02/09/2025',
    },
  ]

  const handleView = (id) => {
    console.log('Voir offre:', id)
  }

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#100F20]'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Image élément décoratif centré */}
        <div className='flex justify-center mb-4'>
          <img
            src='/images/Hirna - element.png'
            alt='Hirna element'
            className='h-50 md:h-100 object-contain'
          />
        </div>

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
              <i className='fa-solid fa-briefcase text-hirna-orange text-sm'></i>
            </div>
            <h2 className='text-xl md:text-2xl font-bold text-white'>
              Explorez nos offres d'emploi
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-center text-white/70 mb-8 max-w-3xl mx-auto text-lg'>
          Plongez au cœur de l'
          <span className='text-hirna-orange font-bold'>UNIVERS HIRNA</span> et
          découvrez un écosystème d'entreprises innovantes, complémentaires et
          engagées dans l'excellence.
        </p>

        {/* Bande Filtres - bg #191536 */}
        <div className='bg-[#191536] rounded-2xl px-6 py-4 mb-10'>
          <div className='flex flex-wrap justify-center gap-3'>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter.isActive
                    ? 'bg-hirna-orange text-white'
                    : 'bg-hirna-dark border border-hirna-orange text-white hover:bg-hirna-orange/20'
                }`}
              >
                {filter.label}
                {filter.hasDropdown && (
                  <i className='fa-solid fa-chevron-down text-xs'></i>
                )}
              </button>
            ))}
            {/* Bouton Rechercher */}
            <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#a85a18] transition-colors'>
              Recherchez
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              logo={job.logo}
              title={job.title}
              company={job.company}
              contractType={job.contractType}
              experience={job.experience}
              location={job.location}
              publishedDate={job.publishedDate}
              onView={() => handleView(job.id)}
            />
          ))}
        </div>

        {/* Bouton voir toutes */}
        <div className='flex justify-center mt-12'>
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
            Voir toutes les offres d'emploi
          </button>
        </div>
      </div>
    </section>
  )
}

export default JobsSection
