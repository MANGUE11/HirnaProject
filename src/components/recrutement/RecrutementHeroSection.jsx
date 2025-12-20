import React from 'react'

const RecrutementHeroSection = () => {
  return (
    <section className='relative w-full bg-[#100F20] overflow-hidden min-h-[700px] flex items-stretch pt-44'>
      {/* --- GRADIANT D'AMBIANCE UNIQUEMENT AU SOL --- */}
      <div
        className='absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-20'
        style={{
          // Le dégradé part du orange vif tout en bas vers le transparent total vers le haut
          background:
            'linear-gradient(to top, rgba(199,110,30,0.5) 0%, rgba(19,21,54,0) 100%)',
        }}
      />

      {/* Halo de lueur supplémentaire juste derrière le PNG pour l'éclat */}
      <div
        className='absolute bottom-[-100px] right-[10%] w-[500px] h-[300px] rounded-[100%] opacity-40 pointer-events-none z-10'
        style={{
          background:
            'radial-gradient(circle, rgba(199,110,30,0.6) 0%, rgba(19,21,54,0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full'>
        {/* --- CONTENU TEXTE (GAUCHE) --- */}
        <div className='text-left order-2 lg:order-1 self-center pb-24'>
          <h1 className='text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-8'>
            <span className='text-[#c76e1e]'>Attirez</span>, sélectionnez <br />
            et <span className='text-[#c76e1e]'>engagez</span> des <br />
            talents de <br />
            demain
          </h1>

          <p className='text-white/70 text-lg md:text-xl max-w-md mb-10 leading-relaxed'>
            Découvre des centaines d’offres d’emploi, ou explorez des
            entreprises qui recrutent à travers l’Afrique
          </p>

          <div className='flex flex-wrap gap-5 mb-12'>
            <button className='bg-[#c76e1e] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-orange-900/20'>
              Voir les offres disponibles
            </button>
            <button className='bg-white text-[#100F20] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all'>
              Découvrir les entreprises
            </button>
          </div>

          <p className='text-white/40 text-sm font-medium tracking-[0.2em] uppercase'>
            Plus de 3000 opportunités disponibles à travers l’Afrique
          </p>
        </div>

        {/* --- IMAGE (DROITE) --- */}
        {/* Alignée pile sur la ligne de fond */}
        <div className='relative order-1 lg:order-2 flex items-end justify-center lg:justify-end'>
          <img
            src='/images/Group 520.png'
            alt='Talents de demain'
            className='w-full max-w-[550px] lg:max-w-[750px] object-contain block relative z-0'
            style={{ marginBottom: '0px' }}
          />
        </div>
      </div>
    </section>
  )
}

export default RecrutementHeroSection
