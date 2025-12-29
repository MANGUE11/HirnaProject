import React from 'react'

const RessourseHeroSectionComponent = () => {
  return (
    <section className='relative w-full bg-[#191536] text-white overflow-hidden flex items-center px-6 md:px-16 py-12 mt-16'>
      {/* GRADIENT DE TÊTE : Effet lumineux sous le menu */}
      <div className='absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-[#ff7a0044] to-transparent pointer-events-none z-0'></div>

      {/* Effet de lumière Orange circulaire à gauche */}
      <div className='absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#c76e1e33] to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10'>
        {/* TEXT CONTENT : Poussé encore plus vers la droite avec translate-x-32 */}
        <div className='space-y-8 text-left lg:ml-auto lg:translate-x-32 max-w-2xl'>
          <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
            Découvre les
            <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#ff9d42] to-[#ff7a00] ml-3'>
              meilleures ressources
            </span>
            <br />
            pour vous <span className='font-extrabold'>orienter</span> et{' '}
            <span className='font-extrabold'>réussir</span>
          </h1>

          <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
            Articles, guides, vidéos, outils pratiques... <br />
            Tout pour éclairer votre avenir académique et professionnel
          </p>

          {/* BOUTONS : Centrés sous le texte */}
          <div className='flex flex-wrap justify-center gap-6 pt-2'>
            <button className='bg-[#c76e1e] hover:bg-[#a65b18] text-white px-10 py-4 rounded-xl font-bold transition-all min-w-[200px] shadow-lg'>
              Explorer les ressources
            </button>
            <button className='bg-[#c76e1e] hover:bg-[#a65b18] text-white px-10 py-4 rounded-xl font-bold transition-all min-w-[200px] shadow-lg'>
              Suggérer
            </button>
          </div>
        </div>

        {/* IMAGE PNG SECTION : Rapprochée vers la gauche */}
        <div className='flex justify-center lg:justify-start mt-8 lg:mt-0'>
          <div className='relative w-full max-w-[250px] md:max-w-xs'>
            <img
              src='/images/element2.png'
              alt='Illustration Ressources'
              className='w-full h-auto object-contain transition-transform duration-500 hover:scale-105'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RessourseHeroSectionComponent
