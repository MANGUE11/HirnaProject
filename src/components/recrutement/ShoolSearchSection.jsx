import React from 'react'
import SchoolCard from '../SchoolCard'

const ShoolSearchSection = () => {
  const schools = Array(6).fill({
    image: '/images/formation.png',
    logo: '/images/logo ma-sy.jpg',
    name: 'Masy',
    type: 'School',
    location: 'DAKAR, Sénégal',
    offersCount: 4,
    publishedDate: '12/03/2024',
    hasNotice: true,
  })

  return (
    <section className='bg-[#100F20] py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* --- TITRE AVEC GRADIENT ET BORDURE (Style image_ad67c6.png) --- */}
        <div className='flex justify-center mb-14'>
          <div
            className='relative flex items-center gap-4 py-3.5 px-10 rounded-full border border-[#c76e1e]/60 shadow-2xl'
            style={{
              background:
                'linear-gradient(90deg, rgba(199,110,30,1) 0%, rgba(199,110,30,0.3) 50%, rgba(25,21,54,0) 100%)',
            }}
          >
            {/* Cercle Icône blanc à gauche */}
            <div className='flex-shrink-0 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center'>
              <i className='fa-solid fa-building text-white text-sm'></i>
            </div>

            {/* Texte agrandi */}
            <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-wide'>
              Decouvrez les ecoles qui recrutent
            </h2>
          </div>
        </div>

        {/* --- BANDE DE RECHERCHE COMPACTE (Style image_ad63a9.png) --- */}
        <div className='flex justify-center mb-16'>
          <div className='bg-[#191536]/90 border border-white/10 rounded-2xl p-1.5 flex flex-wrap items-center gap-2 shadow-2xl'>
            {/* Bouton Gauche style dégradé */}
            <button className='bg-gradient-to-r from-[#c76e1e] to-[#8a4a14] text-white px-7 py-2.5 rounded-xl font-bold text-sm shadow-md hover:brightness-110 transition-all'>
              Recherchez
            </button>

            {/* Filtres compacts */}
            {['Pays', 'Ville', 'Secteur d’activité', 'Télétravail'].map(
              (filter) => (
                <div key={filter} className='relative group'>
                  <select className='appearance-none bg-[#100F20]/60 border border-[#c76e1e]/30 text-white text-[13px] py-2.5 pl-4 pr-10 rounded-xl focus:outline-none hover:border-[#c76e1e] transition-colors cursor-pointer'>
                    <option>{filter}</option>
                  </select>
                  <i className='fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-white/80 text-[10px] pointer-events-none'></i>
                </div>
              )
            )}

            {/* Bouton Final Loupe + Texte */}
            <button className='bg-[#c76e1e] hover:bg-[#e07d24] text-white px-5 py-2.5 rounded-xl flex items-center gap-3 transition-all shadow-lg'>
              <span className='text-xs font-bold uppercase tracking-tight hidden sm:block'>
                Recherchez
              </span>
              <i className='fa-solid fa-magnifying-glass text-sm'></i>
            </button>
          </div>
        </div>

        {/* --- GRILLE DE 6 SCHOOL CARDS --- */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {schools.map((school, index) => (
            <SchoolCard key={index} {...school} onFollow={() => {}} />
          ))}
        </div>

        {/* --- PAGINATION --- */}
        <div className='flex justify-center items-center gap-2 mt-20'>
          <button className='w-11 h-11 rounded-xl border border-white/10 text-white hover:bg-[#c76e1e] transition-all flex items-center justify-center'>
            <i className='fa-solid fa-chevron-left text-xs'></i>
          </button>

          {[1, 2, 3, '...', 10].map((page, i) => (
            <button
              key={i}
              className={`w-11 h-11 rounded-xl font-bold text-sm transition-all border ${
                page === 1
                  ? 'bg-[#c76e1e] text-white border-[#c76e1e] shadow-lg shadow-orange-900/20'
                  : 'text-white/60 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}

          <button className='w-11 h-11 rounded-xl border border-white/10 text-white hover:bg-[#c76e1e] transition-all flex items-center justify-center'>
            <i className='fa-solid fa-chevron-right text-xs'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShoolSearchSection
