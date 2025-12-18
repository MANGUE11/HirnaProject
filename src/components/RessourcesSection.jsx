import React from 'react'
import RessourceCard from './RessourceCard'

const RessourcesSection = () => {
  const ressources = [
    {
      id: 1,
      image: '/images/formation.png',
      category: 'Conseils',
      categoryColor: 'bg-hirna-orange',
      title: 'Comment rédiger un CV efficace et professionnel',
      description:
        'Explorez les meilleures pratiques pour rédiger un CV percutant et attractif',
      publishedDate: '02/09/2025',
      hasNotice: true,
    },
    {
      id: 2,
      image: '/images/formation.png',
      category: 'Education',
      categoryColor: 'bg-hirna-orange',
      title: 'Avantages de la formation en ligne',
      description: "Bénéficiez des opportunités de l'apprentissage en ligne",
      publishedDate: '02/09/2025',
      hasNotice: false,
    },
    {
      id: 3,
      image: '/images/formation.png',
      category: 'Vidéo',
      categoryColor: 'bg-hirna-orange',
      title: "Réussir votre entretien d'embauche",
      description: 'Apprenez à convaincre efficacement les recruteurs',
      publishedDate: '02/09/2025',
      hasNotice: true,
    },
  ]

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#100F20]'>
      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Image ampoule en haut */}
        <div className='flex justify-center mb-8'>
          <img
            src='/images/Hirna - element.png'
            alt='Ampoule Hirna'
            className='h-50 md:h-100 object-contain'
          />
        </div>

        {/* Header avec icône - gradient orange */}
        <div className='flex justify-center mb-6'>
          <div
            className='inline-flex items-center gap-3 rounded-full px-6 py-3'
            style={{
              background:
                'linear-gradient(to right, #C76E1E 0%, rgba(199, 110, 30, 0.3) 100%)',
            }}
          >
            <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'>
              <i className='fa-solid fa-lightbulb text-hirna-orange text-sm'></i>
            </div>
            <h2 className='text-xl md:text-2xl font-bold text-white'>
              Ressources & Conseils
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className='text-center text-white/70 mb-12 max-w-2xl mx-auto text-lg'>
          Articles et Vidéos pour guider votre parcours sur{' '}
          <span className='text-hirna-orange font-bold'>HIRNA</span>
        </p>

        {/* Ressources Cards Grid - gap réduit */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {ressources.map((ressource) => (
            <RessourceCard
              key={ressource.id}
              image={ressource.image}
              category={ressource.category}
              categoryColor={ressource.categoryColor}
              title={ressource.title}
              description={ressource.description}
              publishedDate={ressource.publishedDate}
              hasNotice={ressource.hasNotice}
            />
          ))}
        </div>

        {/* Bouton voir toutes */}
        <div className='flex justify-center mt-12'>
          <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
            Voir toutes les ressources pépites
          </button>
        </div>
      </div>
    </section>
  )
}

export default RessourcesSection
