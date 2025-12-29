import React from 'react'

const ProfilAppelComponent = () => {
  return (
    <section className='relative bg-[#100F20] pt-32 pb-40 px-4 overflow-hidden min-h-[850px] flex flex-col justify-start'>
      {/* --- FOND : MAP MONDE POSITIONNÉE EN BAS --- */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* L'image est descendue pour libérer tout l'espace du haut */}
        <img
          src='/images/monde.png'
          alt=''
          className='w-full h-full object-cover object-bottom opacity-60 translate-y-40 scale-105'
        />

        {/* DÉGRADÉ NOIR PROGRESSIF : Très sombre en haut, s'éclaircit vers le bas */}
        <div className='absolute inset-0 bg-gradient-to-t from-transparent via-[#100F20]/50 to-[#100F20]'></div>
      </div>

      {/* --- CONTENU (Z-INDEX 10) --- */}
      <div className='max-w-5xl mx-auto text-center relative z-10'>
        {/* TITRE : Agrandi et très aéré */}
        <h2 className='text-[#c76e1e] text-3xl md:text-5xl lg:text-1xl font-black leading-[1.1] mb-10 tracking-tighter uppercase'>
          Créer votre profil et <br />
          laissez les recruteurs <br />
          venir vers vous
        </h2>

        {/* SOUS-TITRE : Augmenté pour l'équilibre visuel */}
        <p className='text-white/90 text-xl md:text-3xl max-w-4xl mx-auto mb-14 leading-relaxed font-light'>
          En un seul clic, atteignez des centaines d’entreprises à travers
          l’Afrique.
        </p>

        {/* BOUTON D'ACTION */}
        <div className='flex justify-center mb-10'>
          <button className='bg-[#c76e1e] hover:bg-[#e07d24] text-[#100F20] pl-4 pr-12 py-4 rounded-full font-bold text-2xl flex items-center gap-6 transition-all shadow-[0_20px_50px_rgba(199,110,30,0.3)] hover:scale-105 active:scale-95'>
            <div className='bg-[#100F20] w-14 h-14 rounded-full flex items-center justify-center shadow-inner border border-white'>
              <i className='fa-solid fa-user text-[#c76e1e] text-xl'></i>
            </div>
            <span>Créer votre profil Hirna</span>
          </button>
        </div>

        {/* TEXTE DE RÉASSURANCE */}
        <p className='text-white text-lg italic tracking-widest'>
          C’est simple, rapide et 100% gratuit
        </p>
      </div>

      {/* LUEUR DE FOND (GLOW) POUR LA PROFONDEUR */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#c76e1e]/10 blur-[150px] rounded-full pointer-events-none z-0'></div>
    </section>
  )
}

export default ProfilAppelComponent
