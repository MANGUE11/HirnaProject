import React from 'react'

const JobCard = ({
  logo,
  title,
  company,
  contractType,
  experience,
  location,
  publishedDate,
  onView,
}) => {
  return (
    <div className='bg-white rounded-xl p-5 shadow-lg'>
      {/* Header avec logo et titre */}
      <div className='flex items-start gap-4 mb-4'>
        {/* Logo entreprise avec bordure grise */}
        <div className='w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 p-1'>
          <img
            src={logo}
            alt={company}
            className='w-full h-full object-contain rounded'
          />
        </div>

        {/* Titre et entreprise */}
        <div>
          <h3 className='text-xl font-bold text-hirna-dark'>{title}</h3>
          <p className='text-sm text-gray-500'>{company}</p>
        </div>
      </div>

      {/* Infos contrat et expérience sur la même ligne */}
      <div className='flex items-center gap-4 mb-2 text-xs'>
        <div className='flex items-center gap-1'>
          <i className='fa-solid fa-file-contract text-hirna-orange'></i>
          <span className='font-bold text-hirna-dark'>Contrat :</span>
          <span className='text-gray-600'>{contractType}</span>
        </div>
        <div className='flex items-center gap-1'>
          <i className='fa-solid fa-briefcase text-hirna-orange'></i>
          <span className='font-bold text-hirna-dark'>Expérience :</span>
          <span className='text-gray-600'>{experience}</span>
        </div>
      </div>

      {/* Lieu sur une nouvelle ligne */}
      <div className='flex items-center gap-1 mb-4 text-xs'>
        <i className='fa-solid fa-location-dot text-hirna-orange'></i>
        <span className='font-bold text-hirna-dark'>Lieu :</span>
        <span className='text-gray-600'>{location}</span>
      </div>

      {/* Footer avec bouton et date */}
      <div className='flex items-center justify-between'>
        <button
          onClick={onView}
          className='bg-[#100F20] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a1930] transition-colors'
        >
          Voir l'offre
        </button>
        <span className='text-xs text-gray-500'>
          Publié le : {publishedDate}
        </span>
      </div>
    </div>
  )
}

export default JobCard
