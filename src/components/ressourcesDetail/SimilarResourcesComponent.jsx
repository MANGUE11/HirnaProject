import React from 'react'
import ArticleCard from '../ArticleCard' // Vérifie bien le chemin vers ton fichier ArticleCard

const SimilarResourcesComponent = () => {
  // Données pour initialiser exactement 3 cards comme sur l'image
  const similarArticles = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500',
      title: 'Réussir votre entretien d’embauche',
      description: 'Apprenez à convaincre efficacement les recruteurs',
      date: '02/09/2025',
      hasNotice: true, // Active la bande orange "Notice IA"
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500',
      title: 'Réussir votre entretien d’embauche',
      description: 'Apprenez à convaincre efficacement les recruteurs',
      date: '02/09/2025',
      hasNotice: false,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500',
      title: 'Réussir votre entretien d’embauche',
      description: 'Apprenez à convaincre efficacement les recruteurs',
      date: '02/09/2025',
      hasNotice: true,
    },
  ]

  return (
    <section className='bg-[#191536] py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Titre de la section en Orange */}
        <h2 className='text-[#c76e1e] text-3xl md:text-4xl font-extrabold mb-12 text-left uppercase tracking-tight'>
          Ressources similaires
        </h2>

        {/* Grille de 3 cards identique à l'image */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {similarArticles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
              date={article.date}
              hasNotice={article.hasNotice}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimilarResourcesComponent
