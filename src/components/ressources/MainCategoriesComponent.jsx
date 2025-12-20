import React from 'react'
import ArticleCard from '../ArticleCard' // Vérifie que le chemin est correct

const MainCategoriesComponent = () => {
  // Données des catégories du haut
  const categories = [
    { id: 1, name: 'Orientation scolaire', icon: 'fa-bullseye', active: true },
    {
      id: 2,
      name: 'Bourses & Opportunités',
      icon: 'fa-user-graduate',
      active: false,
    },
    {
      id: 3,
      name: 'Guides & Suits',
      icon: 'fa-square-poll-horizontal',
      active: false,
    },
    { id: 4, name: 'Emploi', icon: 'fa-magnifying-glass-chart', active: false },
  ]

  // Données des articles du bas
  const articles = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500',
      title: 'Obtenir une bourse en Afrique',
      description:
        'Des conseils pour obtenir une bourse de mobilité en Afrique',
      date: '02/09/2025',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500',
      title: 'Obtenir une bourse en Afrique',
      description:
        'Des conseils pour obtenir une bourse de mobilité en Afrique',
      date: '02/09/2025',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500',
      title: 'Obtenir une bourse en Afrique',
      description:
        'Des conseils pour obtenir une bourse de mobilité en Afrique',
      date: '02/09/2025',
    },
  ]

  return (
    <section className='bg-[#191536] py-20 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* TITRE PRINCIPAL */}
        <h2 className='text-white text-3xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider'>
          CATEGORIES PRINCIPALES
        </h2>

        {/* GRILLE DES BLOCS CATEGORIES (Plus compacts) */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border transition-all cursor-pointer h-64 w-full max-w-[280px] mx-auto text-center gap-6 ${
                cat.active
                  ? 'border-[#c76e1e] bg-gradient-to-b from-[#c76e1e11] to-transparent shadow-lg shadow-[#c76e1e]/10'
                  : 'border-white/20 hover:border-[#c76e1e]/50 bg-white/5'
              }`}
            >
              {/* Icône */}
              <div className='text-5xl text-white'>
                <i className={`fa-solid ${cat.icon}`}></i>
              </div>

              {/* Nom */}
              <span className='text-xl font-bold leading-tight text-[#c76e1e]'>
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* SECTION DES ARTICLES */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {articles.map((art) => (
            <ArticleCard
              key={art.id}
              image={art.image}
              title={art.title}
              description={art.description}
              date={art.date}
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div className='mt-20 flex justify-center items-center gap-3'>
          <button className='w-10 h-10 rounded-full border border-[#c76e1e] text-white flex items-center justify-center hover:bg-[#c76e1e] transition-all group'>
            <i className='fa-solid fa-chevron-left text-xs group-hover:text-white'></i>
          </button>

          <button className='w-10 h-10 rounded-full bg-[#c76e1e] text-white font-bold shadow-lg shadow-[#c76e1e]/20'>
            1
          </button>
          <button className='w-10 h-10 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all'>
            2
          </button>
          <button className='w-10 h-10 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all'>
            3
          </button>
          <span className='text-white px-2'>...</span>
          <button className='w-10 h-10 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all'>
            10
          </button>

          <button className='w-10 h-10 rounded-full border border-[#c76e1e] text-white flex items-center justify-center hover:bg-[#c76e1e] transition-all group'>
            <i className='fa-solid fa-chevron-right text-xs group-hover:text-white'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MainCategoriesComponent
