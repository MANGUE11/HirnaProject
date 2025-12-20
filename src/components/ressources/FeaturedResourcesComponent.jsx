import React, { useState } from 'react'
import ArticleCard from '../ArticleCard'

const FeaturedResourcesComponent = () => {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const resources = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500',
      title: 'Comment rédiger un CV efficace et professionnel',
      description:
        'Explorez les meilleures pratiques pour rédiger un CV percutant et attractif',
      date: '02/09/2025',
      category: 'Conseils',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500',
      title: 'Avantages de la formation en ligne',
      description:
        'Bénéficiez des opportunités de l’apprentissage en ligne pour booster votre carrière',
      date: '02/09/2025',
      category: 'Education',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500',
      title: 'Réussir votre entretien d’embauche',
      description:
        'Apprenez à convaincre efficacement les recruteurs lors de vos échanges',
      date: '02/09/2025',
      category: 'Vidéo',
    },
  ]

  const filters = [
    { name: 'Tous', icon: 'fa-list-ul' },
    { name: 'Articles', icon: 'fa-file-lines' },
    { name: 'Guides', icon: 'fa-book-open' },
    { name: 'Vidéos', icon: 'fa-video' },
  ]

  return (
    <section className='bg-[#100F20] py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-white text-4xl md:text-5xl font-bold text-center mb-10'>
          Ressources mises en avant
        </h2>

        {/* BANDE DE RECHERCHE CENTRÉE ET COMPACTE (#191536) */}
        <div className='flex justify-center mb-16'>
          <div className='bg-[#191536] rounded-2xl p-3 flex flex-wrap items-center justify-center gap-2 md:gap-3 border border-white/5 shadow-2xl'>
            {/* Input Recherche compact */}
            <div className='relative'>
              <input
                type='text'
                placeholder='Mot clé...'
                className='bg-transparent border border-[#c76e1e] text-white rounded-full px-5 py-2 text-sm outline-none w-36 md:w-44 focus:ring-1 focus:ring-[#c76e1e] transition-all'
              />
            </div>

            {/* Boutons Filtres Rapprochés */}
            <div className='flex flex-wrap items-center gap-2'>
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all font-medium ${
                    activeFilter === filter.name
                      ? 'bg-[#c76e1e] border-[#c76e1e] text-white shadow-lg shadow-[#c76e1e]/20'
                      : 'border-[#c76e1e] text-white hover:bg-[#c76e1e]/10'
                  }`}
                >
                  <i className={`fa-solid ${filter.icon} text-xs`}></i>
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Bouton Recherche Orange Rapproché */}
            <button className='flex items-center bg-[#c76e1e] text-white rounded-full px-5 py-2 gap-2 hover:bg-[#a65b18] transition-all shadow-lg active:scale-95'>
              <span className='text-xs font-bold uppercase tracking-wider'>
                Rechercher
              </span>
              <i className='fa-solid fa-magnifying-glass text-xs'></i>
            </button>
          </div>
        </div>

        {/* GRILLE DE CARDS COMPACTE (gap-6) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {resources.map((res) => (
            <ArticleCard
              key={res.id}
              image={res.image}
              title={res.title}
              description={res.description}
              date={res.date}
              // Pour rendre le badge dynamique, assure-toi que ton ArticleCard accepte une prop pour le texte
            />
          ))}
        </div>

        {/* PAGINATION COMPACTE */}
        <div className='mt-16 flex justify-center items-center gap-2'>
          <button className='w-9 h-9 rounded-full border border-[#c76e1e] text-white flex items-center justify-center hover:bg-[#c76e1e] transition-all'>
            <i className='fa-solid fa-chevron-left text-[10px]'></i>
          </button>

          <button className='w-9 h-9 rounded-full bg-[#c76e1e] text-white font-bold text-sm'>
            1
          </button>
          <button className='w-9 h-9 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-all text-sm'>
            2
          </button>
          <button className='w-9 h-9 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-all text-sm'>
            3
          </button>
          <span className='text-white px-1'>...</span>
          <button className='w-9 h-9 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-all text-sm'>
            10
          </button>

          <button className='w-9 h-9 rounded-full border border-[#c76e1e] text-white flex items-center justify-center hover:bg-[#c76e1e] transition-all'>
            <i className='fa-solid fa-chevron-right text-[10px]'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedResourcesComponent
