import React from 'react'

const FormationCard = ({
  image,
  type,
  typeColor = 'bg-hirna-orange',
  price,
  logo,
  category,
  title,
  description,
  university,
  domains,
  location,
  duration,
  startDate,
  hasNotice = false,
  onView,
}) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-lg'>
      {/* Image */}
      <div className='relative h-56'>
        {hasNotice && (
          <div className='absolute top-0 left-0 right-0 bg-hirna-orange text-xs text-center py-2 px-3 z-10'>
            <span className='text-white font-bold'>Notice IA :</span>{' '}
            <span className='text-hirna-dark'>
              Cette formation semble convenir à votre profil
            </span>
          </div>
        )}

        <img src={image} alt={title} className='w-full h-full object-cover' />

        <div className='absolute top-12 left-4'>
          <span
            className={`${typeColor} text-white text-xs font-semibold px-3 py-1.5 rounded`}
          >
            {type}
          </span>
        </div>

        <div className='absolute bottom-4 right-4'>
          <span className='bg-white text-hirna-dark text-sm font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-2'>
            <i className='fa-solid fa-dollar-sign text-hirna-orange'></i>
            {price}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className='p-5'>
        {/* LOGO en float-left pour permettre l'alignement du texte à côté PUIS en dessous */}
        <div className='block overflow-hidden mb-3'>
          <img
            src={logo}
            alt='Logo université'
            className='float-left w-16 h-16 object-contain border border-gray-200 rounded-lg p-1 mr-4 mb-2'
          />

          <div className='flex flex-col'>
            <p className='text-hirna-orange text-xs font-bold uppercase'>
              {category}
            </p>
            <h3 className='text-hirna-dark text-xl font-bold leading-tight'>
              {title}
            </h3>
          </div>
        </div>

        {/* Bloc Infos - Maintenant bien aligné à gauche sous le logo */}
        <div className='clear-both pt-2'>
          <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
            {description}
          </p>

          <div className='space-y-2'>
            <div className='flex items-start gap-1'>
              <i className='fa-solid fa-building text-hirna-orange text-xs mt-1'></i>
              <div>
                <p className='text-hirna-dark text-sm font-semibold leading-none'>
                  {university}
                </p>
                <p className='text-gray-500 text-[11px]'>{domains}</p>
              </div>
            </div>

            <div className='flex items-center gap-1'>
              <i className='fa-solid fa-location-dot text-hirna-orange text-xs'></i>
              <p className='text-hirna-dark text-sm font-semibold'>
                {location}
              </p>
            </div>

            <div className='flex items-center gap-1'>
              <i className='fa-solid fa-clock text-hirna-orange text-xs'></i>
              <p className='text-gray-600 text-sm'>{duration}</p>
            </div>

            <div className='flex items-center gap-1'>
              <i className='fa-solid fa-calendar text-hirna-orange text-xs'></i>
              <p className='text-gray-600 text-sm'>{startDate}</p>
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-4'>
          <button
            onClick={onView}
            className='inline-flex items-center gap-2 bg-[#191536] text-white text-sm px-6 py-2 rounded-full hover:bg-hirna-orange transition-colors'
          >
            Voir
            <i className='fa-solid fa-arrow-right text-xs'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormationCard
