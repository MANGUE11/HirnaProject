import React from 'react'
import { Link } from 'react-router-dom'

const FormationBourseMissionSection = () => {
  const buttons = [
    { id: 1, label: 'Découvrir les ecoles partenaires', link: '#' },
    { id: 2, label: 'Trouver une formation', link: '/formation' },
    { id: 3, label: 'Trouver une bourse', link: '/bourse' },
  ]

  const features = [
    {
      id: 1,
      icon: <i className='fa-solid fa-chart-line text-white text-lg'></i>,
      title: 'Attirez des étudiants locaux et internationaux',
      description: 'Augmentez vos revenus grâce à Hirna',
    },
    {
      id: 2,
      icon: <i className='fa-solid fa-graduation-cap text-white text-lg'></i>,
      title: 'Formez les talents de demain',
      description: 'Promouvoir vos programmes au besoin du marché',
    },
    {
      id: 3,
      icon: <i className='fa-solid fa-id-card text-white text-lg'></i>,
      title: 'Renforcez votre image de marque',
      description: 'Mettez en lumière vos établissements et vos reussites',
    },
  ]

  return (
    <section className='relative bg-[#100F20] pt-32 pb-20 md:pb-32 overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        {/* Boutons en haut - Centrés */}
        <div className='flex flex-wrap justify-center gap-4 mb-16'>
          {buttons.map((button) => (
            <Link
              key={button.id}
              to={button.link}
              className='bg-hirna-orange text-white px-8 py-5 rounded-xl font-semibold text-sm hover:bg-[#a85a18] transition-all hover:scale-105 shadow-lg'
            >
              {button.label}
            </Link>
          ))}
        </div>

        {/* Titre - Centré */}
        <div className='text-center mb-6'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl text-white leading-tight'>
            <span className='text-hirna-orange font-bold'>Notre mission</span>
            ,
            <br />
            pour les écoles africaines
          </h2>
        </div>

        {/* Description - Centrée */}
        <p className='text-white/70 text-center text-sm md:text-base max-w-2xl mx-auto mb-16'>
          Hirna favorise la visibilité des établissements via notre réseau
          intelligent, tout en formant la prochaine génération de talents et de
          leaders
        </p>

        {/* Cards - Centrées au milieu du site avec Gradient SUR la carte */}
        <div className='grid md:grid-cols-3 gap-6 w-full justify-center'>
          {features.map((feature) => (
            <div key={feature.id} className='relative pt-8'>
              {/* Icône flottante */}
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 z-20'>
                <div className='w-14 h-14 rounded-full bg-hirna-orange flex items-center justify-center shadow-lg border-4 border-[#100F20]'>
                  {feature.icon}
                </div>
              </div>

              {/* Card - Gradient appliqué directement sur le fond de l'image/bloc */}
              <div
                className='relative border border-hirna-orange/30 rounded-3xl pt-20 pb-12 px-6 text-center h-full flex flex-col items-center justify-center min-h-[320px] overflow-hidden'
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(25, 21, 54, 1) 0%, rgba(25, 21, 54, 0.95) 70%, rgba(199, 110, 30, 0.25) 100%)',
                }}
              >
                {/* Titre */}
                <h3 className='relative z-10 text-hirna-orange font-bold text-xl mb-4 leading-snug'>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className='relative z-10 text-white/70 text-base leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FormationBourseMissionSection
