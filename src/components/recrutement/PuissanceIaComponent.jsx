import React from 'react'

const PuissanceIaComponent = () => {
  const features = [
    {
      title: 'Matching optimisé',
      description:
        'Identifier les talents idéaux grâce à notre algorithme de correspondance avancée',
      icon: 'fa-solid fa-users-between-lines',
    },
    {
      title: 'Gain de temps',
      description:
        "Accélérez votre processus de recrutement avec nos outils d'automatisme",
      icon: 'fa-solid fa-gauge-high',
    },
    {
      title: 'Gain de temps', // Tu peux changer le titre si c'est une répétition sur ton image
      description:
        "Accélérez votre processus de recrutement avec nos outils d'automatisme",
      icon: 'fa-solid fa-user-check',
    },
  ]

  return (
    <section className='relative bg-[#100F20] py-24 px-6 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* --- COLONNE GAUCHE (TITRE + VIDÉO) --- */}
        <div className='flex flex-col gap-12'>
          <div className='space-y-6'>
            <h2 className='text-white text-5xl md:text-6xl font-black leading-tight'>
              La Puissance <br />
              de l’<span className='text-[#c76e1e]'>IA</span> de{' '}
              <span className='text-[#c76e1e]'>Hirna</span>
            </h2>
            <p className='text-white/70 text-lg max-w-md leading-relaxed'>
              Notre intelligence révolutionne le recrutement et propulse votre
              entreprise vers de nouveaux sommets.
            </p>
          </div>

          {/* CONTENEUR VIDÉO */}
          <div className='relative aspect-video w-full max-w-[580px] bg-[#0d0d1d] rounded-[45px] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer'>
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Lueur orange derrière le bouton */}
              <div className='absolute w-44 h-44 bg-[#c76e1e]/20 rounded-full blur-[60px] group-hover:scale-125 transition-all duration-700'></div>

              {/* Bouton Play Blanc */}
              <div className='relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300'>
                <i className='fa-solid fa-play text-[#100F20] text-3xl ml-1'></i>
              </div>
            </div>

            {/* Effet visuel IA optionnel (Overlay) */}
            <div className='absolute inset-0 bg-gradient-to-tr from-[#c76e1e]/5 to-transparent opacity-50'></div>
          </div>
        </div>

        {/* --- COLONNE DROITE (LISTE D'ICÔNES ET TEXTE) --- */}
        <div className='flex flex-col gap-14 lg:pl-10'>
          {features.map((item, index) => (
            <div key={index} className='flex items-start gap-8 group'>
              {/* Icône Font Awesome */}
              <div className='flex-shrink-0 mt-1'>
                <i className={`${item.icon} text-[#c76e1e] text-4xl`}></i>
              </div>

              {/* Contenu Texte */}
              <div className='space-y-3'>
                <h3 className='text-[#c76e1e] text-2xl font-black uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300'>
                  {item.title}
                </h3>
                <p className='text-white/60 text-lg leading-snug max-w-sm'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Décoration : Petit point de lumière en arrière-plan */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#c76e1e]/5 rounded-full blur-[120px] pointer-events-none'></div>
    </section>
  )
}

export default PuissanceIaComponent
