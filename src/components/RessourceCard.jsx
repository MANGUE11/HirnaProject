import React from 'react'

const RessourceCard = ({
  image,
  category,
  categoryColor = 'bg-hirna-orange',
  title,
  description,
  publishedDate,
  hasNotice = false,
}) => {
  return (
    <div className='bg-white rounded-2xl overflow-visible shadow-lg h-full max-w-[300px] mx-auto'>
      {/* Image */}
      <div className='relative h-56 rounded-t-2xl overflow-hidden'>
        {/* Notice IA */}
        {hasNotice && (
          <div className='absolute top-0 left-0 right-0 bg-hirna-orange text-black text-xs text-center py-1.5 px-3 z-10'>
            <span className='font-bold'>Notice IA :</span> Cet article semble
            convenir à votre profil
          </div>
        )}

        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>

      {/* Contenu avec badge flottant */}
      <div className='relative p-4 pt-6'>
        {/* Badge catégorie flottant entre image et texte */}
        <div className='absolute -top-3 left-4'>
          <span
            className={`${categoryColor} text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md`}
          >
            {category}
          </span>
        </div>

        {/* Titre */}
        <h3 className='text-base font-bold text-hirna-dark mb-2 leading-tight'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-sm text-gray-600 mb-4 line-clamp-3'>{description}</p>

        {/* Date */}
        <p className='text-xs text-gray-500 text-right italic'>
          Publié le : {publishedDate}
        </p>
      </div>
    </div>
  )
}

export default RessourceCard
