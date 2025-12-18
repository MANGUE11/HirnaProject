import React from 'react'

const CommentCaMarcheSection = () => {
  const steps = [
    {
      id: 1,
      icon: 'fa-solid fa-user',
      title: 'Inscrivez-vous',
      description:
        'Créer votre compte gratuitement et compléter votre profil selon vos ambitions',
      link: "Commencer l'inscription",
      hasLink: true,
    },
    {
      id: 2,
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Explorez',
      description:
        "Parcourez les les écoles, les formations et les offres d'emploi correspondant à votre profil",
      hasLink: false,
    },
    {
      id: 3,
      icon: 'fa-solid fa-user-group',
      title: 'Contentez-vous',
      description:
        'Postulez, échangez avec les recruteurs ou prenez contact avec une école partenaire',
      hasLink: false,
    },
  ]

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#100F20]'>
      {/* Image point d'interrogation en arrière-plan - monté */}
      <div className='absolute right-[10%] md:right-[15%] lg:right-[20%] top-[40%] -translate-y-1/2 opacity-20 pointer-events-none'>
        <img
          src='/images/question.png'
          alt='Point d interrogation'
          className='h-[400px] md:h-[500px] object-contain'
        />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre et description */}
        <div className='mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            Comment ça marche
          </h2>
          <p className='text-white/70 text-base max-w-xl'>
            En trois (3) étapes simples, trouvez votre école, votre entreprise
            ou votre prochaine opportunité sur{' '}
            <span className='text-hirna-orange font-bold'>HIRNA</span>
          </p>
        </div>

        {/* Steps Cards - gap réduit */}
        <div className='grid md:grid-cols-3 gap-2'>
          {steps.map((step) => (
            <div key={step.id} className='relative pt-6'>
              {/* Icône flottante au-dessus de la card */}
              <div className='absolute top-0 left-1/2 -translate-x-1/2 z-10'>
                <div className='w-12 h-12 rounded-full bg-hirna-orange flex items-center justify-center shadow-lg'>
                  <i className={`${step.icon} text-white text-lg`}></i>
                </div>
              </div>

              {/* Card - scale augmenté */}
              <div className='bg-[#191536] border border-hirna-orange rounded-2xl px-5 pt-10 pb-8 text-center h-full min-h-[280px] max-w-[240px] mx-auto flex flex-col'>
                {/* Titre */}
                <h3 className='text-2xl font-bold text-hirna-orange mb-4'>
                  {step.title}
                </h3>

                {/* Description */}
                <p className='text-white/70 text-base flex-1'>
                  {step.description}
                </p>

                {/* Lien si présent */}
                {step.hasLink && (
                  <a
                    href='#'
                    className='text-hirna-orange text-sm font-semibold italic hover:underline mt-4'
                  >
                    {step.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommentCaMarcheSection
