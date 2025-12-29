import React from 'react'

const JoinNetworkSection = () => {
  return (
    <section className='relative bg-[#191536] py-24 px-4 overflow-hidden'>
      {/* --- EFFET DE LUMIÈRE DISCRET --- */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-[#c76e1e]/5 blur-[100px] rounded-full pointer-events-none'></div>

      <div className='max-w-4xl mx-auto text-center relative z-10'>
        {/* --- TITRE AJUSTÉ (MOINS GROS) --- */}
        <h2 className='flex flex-col gap-1'>
          <span className='text-[#c76e1e] text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase'>
            Rejoignez
          </span>
          <span className='text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            le réseau d’entreprises <br className='hidden md:block' />
            qui façonnent l’avenir du <br className='hidden md:block' />
            recrutement en Afrique
          </span>
        </h2>

        {/* --- BOUTON D'ACTION (ÉPURÉ) --- */}
        <div className='mt-12 flex justify-center'>
          <button className='bg-[#c76e1e] hover:bg-[#e07d24] text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all shadow-lg hover:-translate-y-1 active:scale-95'>
            Publier votre première offre
          </button>
        </div>

        {/* --- DÉCORATION SUBTILE --- */}
        <div className='mt-16 flex justify-center opacity-10'>
          <div className='w-16 h-0.5 bg-[#c76e1e] rounded-full'></div>
        </div>
      </div>
    </section>
  )
}

export default JoinNetworkSection
