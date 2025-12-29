import React from 'react'

const ressourcesDetailHeroComponent = () => {
  return (
    <section className='relative w-full bg-[#100F20] text-white py-12 px-6 md:px-16 mt-20'>
      {/* mt-20 pour éviter la superposition avec le menu fixe */}

      <div className='max-w-7xl mx-auto'>
        {/* HEADER : Badge, Titre et Meta Infos */}
        <div className='mb-8'>
          <span className='bg-[#c76e1e] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase mb-4 inline-block'>
            Article
          </span>

          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl'>
            Comment rédiger un{' '}
            <span className='text-[#c76e1e]'>CV efficace et professionnel</span>
          </h1>

          <div className='flex items-center gap-6 mt-6 text-gray-400 text-sm'>
            <span className='border border-gray-600 rounded-full px-4 py-1 bg-white/5 text-white'>
              Emploi
            </span>
            <p className='italic'>Publié le : 02/09/2025</p>
            <div className='flex items-center gap-2 text-[#c76e1e]'>
              <i className='fa-solid fa-eye'></i>
              <span className='font-bold'>245</span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT : Image + Sidebar Auteur */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          {/* Colonne de gauche : Image et texte descriptif */}
          <div className='lg:col-span-8 space-y-8'>
            <div className='rounded-3xl overflow-hidden border border-white/10 shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200'
                alt='Conseils CV'
                className='w-full h-auto object-cover'
              />
            </div>

            <div className='space-y-4'>
              <h2 className='text-[#c76e1e] text-xl font-bold'>
                Rédiger un CV efficace et professionnel
              </h2>
              <p className='text-gray-300 leading-relaxed text-base md:text-lg'>
                Rédiger un CV efficace est une étape essentielle pour décrocher
                un emploi ou un stage. Que vous soyez étudiant, jeune diplômé ou
                professionnel en reconversion, votre CV est votre premier outil
                de communication avec un recruteur. Il doit être clair,
                pertinent et refléter fidèlement votre parcours. <br />
                <br />
                Dans cet article, nous vous guidons pas à pas pour créer un CV
                professionnel, moderne et attractif.
              </p>
            </div>
          </div>

          {/* Colonne de droite : Sidebar Auteur (Gradient sombre) */}
          <div className='lg:col-span-4'>
            <div className='bg-gradient-to-b from-[#191536] to-[#2a1a12] rounded-3xl p-8 flex flex-col items-center text-center border border-white/5 min-h-[450px] sticky top-28'>
              <div className='w-24 h-24 rounded-full border-2 border-[#c76e1e] p-1 mb-6'>
                <img
                  src='https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200'
                  alt='Auteur'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <h3 className='text-xl font-bold'>Jacques Moundekeno</h3>
              <p className='text-[#c76e1e] text-sm mb-8'>Rédacteur</p>

              <div className='flex gap-4 mt-auto'>
                <a
                  href='#'
                  className='text-white hover:text-[#c76e1e] transition-colors text-xl'
                >
                  <i className='fa-brands fa-facebook'></i>
                </a>
                <a
                  href='#'
                  className='text-white hover:text-[#c76e1e] transition-colors text-xl'
                >
                  <i className='fa-brands fa-linkedin'></i>
                </a>
                <a
                  href='#'
                  className='text-white hover:text-[#c76e1e] transition-colors text-xl'
                >
                  <i className='fa-brands fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTIONS : Partager et Sauvegarder */}
        <div className='flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10'>
          <button className='bg-[#c76e1e] hover:bg-[#a65b18] text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 transition-all active:scale-95'>
            Partager <i className='fa-solid fa-share-nodes'></i>
          </button>

          <button className='bg-transparent border border-gray-500 hover:border-white text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 transition-all active:scale-95'>
            Sauvegarder <i className='fa-solid fa-download'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ressourcesDetailHeroComponent
