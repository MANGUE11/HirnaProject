import React from 'react'

const EcoleCard = ({
  image,
  logo,
  name,
  description,
  location,
  country,
  domains,
  levels,
  offersCount,
  price,
  hasNotice = false,
  onView,
}) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-lg'>
      {/* Image */}
      <div className='relative h-40'>
        {/* Notice IA - texte plus petit */}
        {hasNotice && (
          <div className='absolute top-0 left-0 right-0 bg-hirna-orange text-center py-1 px-2 z-10'>
            <span className='text-white font-bold text-[10px]'>
              Notice IA :
            </span>{' '}
            <span className='text-hirna-dark text-[10px]'>
              Cette école semble convenir à votre profil
            </span>
          </div>
        )}

        <img src={image} alt={name} className='w-full h-full object-cover' />

        {/* Logo école - Position dynamique si notice présente */}
        <div
          className={`absolute left-2 transition-all ${
            hasNotice ? 'top-8' : 'top-2'
          }`}
        >
          <img
            src={logo}
            alt='Logo école'
            className='w-12 h-12 object-contain bg-white rounded-lg p-1 border border-gray-200'
          />
        </div>
      </div>

      {/* Contenu */}
      <div className='p-4'>
        {/* Nom de l'école - en #100F20 et plus grand */}
        <h3 className='text-[#100F20] text-lg font-bold mb-1 leading-tight'>
          {name}
        </h3>

        {/* Description */}
        <p className='text-gray-600 text-xs mb-3 line-clamp-2'>{description}</p>

        {/* Location */}
        <div className='flex items-center gap-1 mb-1'>
          <i className='fa-solid fa-location-dot text-hirna-orange text-xs'></i>
          <p className='text-hirna-dark text-xs font-semibold'>{location}</p>
        </div>

        {/* Pays */}
        <div className='flex items-center gap-1 mb-1'>
          <i className='fa-solid fa-flag text-hirna-orange text-xs'></i>
          <p className='text-gray-600 text-xs'>{country}</p>
        </div>

        {/* Domaines */}
        <div className='flex items-center gap-1 mb-1'>
          <i className='fa-solid fa-book text-hirna-orange text-xs'></i>
          <p className='text-gray-600 text-xs line-clamp-1'>{domains}</p>
        </div>

        {/* Niveaux */}
        <div className='flex items-center gap-1 mb-1'>
          <i className='fa-solid fa-graduation-cap text-hirna-orange text-xs'></i>
          <p className='text-gray-600 text-xs'>{levels}</p>
        </div>

        {/* Offres disponibles */}
        <div className='flex items-center gap-1 mb-2'>
          <i className='fa-solid fa-briefcase text-hirna-orange text-xs'></i>
          <p className='text-gray-600 text-xs'>
            {offersCount} places disponibles
          </p>
        </div>

        {/* Prix et bouton */}
        <div className='flex items-center justify-between mt-3'>
          <span className='text-hirna-orange text-sm font-bold inline-flex items-center gap-1'>
            <i className='fa-solid fa-dollar-sign text-hirna-orange text-xs'></i>
            {price}
          </span>
          <button
            onClick={onView}
            className='inline-flex items-center gap-1 bg-[#100F20] text-white text-xs px-3 py-1.5 rounded-full hover:bg-hirna-orange transition-colors'
          >
            Découvrir cette école
            <i className='fa-solid fa-arrow-right text-xs'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EcoleCard
