import React from 'react'

const SchoolCard = ({
  image,
  logo,
  name,
  type,
  location,
  offersCount,
  publishedDate,
  onFollow,
  hasNotice = false,
}) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-lg h-full'>
      {/* Image de l'école avec Notice IA */}
      <div className='relative h-48'>
        {/* Notice IA au-dessus de l'image */}
        {hasNotice && (
          <div className='absolute top-0 left-0 right-0 bg-hirna-orange text-white text-xs text-center py-2 px-3 z-10'>
            <span className='font-bold'>Notice IA :</span> Cette entreprise
            semble convenir à votre profil
          </div>
        )}
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </div>

      {/* Contenu */}
      <div className='p-4'>
        {/* Header avec logo et infos */}
        <div className='flex items-start gap-3 mb-3'>
          {/* Logo avec bordure */}
          <div className='w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 p-1 bg-white'>
            <img
              src={logo}
              alt={name}
              className='w-full h-full object-contain rounded'
            />
          </div>

          {/* Nom et type */}
          <div>
            <h3 className='text-lg font-bold text-hirna-dark'>{name}</h3>
            <p className='text-xs text-gray-500'>{type}</p>
            <div className='flex items-center gap-1 text-xs text-gray-600 mt-1'>
              <i className='fa-solid fa-location-dot text-hirna-orange'></i>
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Badge offres disponibles */}
        <div className='mb-3'>
          <span className='inline-block bg-hirna-orange text-white text-xs font-semibold px-3 py-1 rounded-full'>
            Un ({offersCount}) offre disponible
          </span>
        </div>

        {/* Footer avec bouton et date */}
        <div className='flex items-center justify-between'>
          <button
            onClick={onFollow}
            className='bg-transparent border border-hirna-dark text-hirna-dark px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-hirna-dark hover:text-white transition-colors'
          >
            Suivre
          </button>
          <span className='text-xs text-gray-500'>
            Publié le : {publishedDate}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard
