import React from 'react'

const WhyCompaniesChooseHirna = () => {
  const features = [
    {
      icon: 'fa-key',
      title: 'Accès à un vivier de talents qualifiés',
      description: 'Découvrez et recrutez les meilleurs talents du continent',
    },
    {
      icon: 'fa-brain',
      title: 'Recrutement assisté par IA',
      description: "Profitez d'un système intelligent",
    },
    {
      icon: 'fa-people-group',
      title: 'Valoriser votre marque employeur',
      description:
        'Attirez les jeunes talents grâce à votre visibilité sur Hirna',
    },
    {
      icon: 'fa-bolt',
      title: "Gagnez du temps et de l'efficacité",
      description:
        "Automatisez vos processus et concentrez-vous sur l'essentiel",
    },
  ]

  return (
    <section className='bg-[#191536] py-32 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        {/* Titre principal */}
        <h2 className='text-white text-4xl md:text-6xl font-black mb-6'>
          Pourquoi les entreprises choisissent{' '}
          <span className='text-[#c76e1e]'>Hirna</span>
        </h2>

        {/* Sous-titre */}
        <p className='text-white/70 text-lg md:text-xl mb-24'>
          Une technologie intelligente, un réseau qualifié, une expérience
          fluide
        </p>

        {/* Grille des cartes */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20'>
          {features.map((item, index) => (
            <div
              key={index}
              className='relative group p-8 pt-12 rounded-3xl border border-white/10 flex flex-col items-center text-center transition-all hover:border-[#c76e1e]/40 min-h-[280px]'
              style={{
                background:
                  'linear-gradient(0deg, rgba(199, 110, 30, 0.12) 0%, rgba(16, 15, 32, 0) 70%)',
              }}
            >
              {/* Icône FLOTTANTE sur la ligne supérieure */}
              <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c76e1e] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(199,110,30,0.4)] z-20 group-hover:scale-110 transition-transform'>
                <i className={`fa-solid ${item.icon} text-white text-xl`}></i>
              </div>

              {/* Titre de la carte */}
              <h3 className='text-[#c76e1e] font-bold text-xl mb-4 leading-tight'>
                {item.title}
              </h3>

              {/* Description */}
              <p className='text-white/70 text-base leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyCompaniesChooseHirna
