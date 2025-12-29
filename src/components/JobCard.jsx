import React from 'react'

const JobCard = ({
  logo,
  title,
  company,
  contractType,
  experience,
  location,
  publishedDate,
  hasNotice = false,
  onView,
}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden flex flex-col'>
      {/* Bande Notice IA (Conditionnelle) */}
      {hasNotice && (
        <div className='bg-[#c76e1e] text-[10px] md:text-[11px] text-center py-1.5 px-4'>
          <span className='text-black font-bold'>Notice IA :</span>{' '}
          <span className='text-white'>
            Cette offre semble convenir à votre profil
          </span>
        </div>
      )}

      {/* Contenu intérieur */}
      <div className='p-5'>
        {/* Header avec logo et titre */}
        <div className='flex items-start gap-4 mb-4'>
          <div className='w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 p-1'>
            <img
              src={logo}
              alt={company}
              className='w-full h-full object-contain rounded'
            />
          </div>

          <div>
            <h3 className='text-xl font-bold text-[#100F20]'>{title}</h3>
            <p className='text-sm text-gray-500'>{company}</p>
          </div>
        </div>

        {/* Infos contrat et expérience */}
        <div className='flex items-center gap-4 mb-2 text-xs'>
          <div className='flex items-center gap-1'>
            <i className='fa-solid fa-file-contract text-[#c76e1e]'></i>
            <span className='font-bold text-[#100F20]'>Contrat :</span>
            <span className='text-gray-600'>{contractType}</span>
          </div>
          <div className='flex items-center gap-1'>
            <i className='fa-solid fa-briefcase text-[#c76e1e]'></i>
            <span className='font-bold text-[#100F20]'>Expérience :</span>
            <span className='text-gray-600'>{experience}</span>
          </div>
        </div>

        {/* Lieu */}
        <div className='flex items-center gap-1 mb-4 text-xs'>
          <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>
          <span className='font-bold text-[#100F20]'>Lieu :</span>
          <span className='text-gray-600'>{location}</span>
        </div>

        {/* Footer avec bouton ARRONDI et date */}
        <div className='flex items-center justify-between mt-auto'>
          <button
            onClick={onView}
            className='bg-[#100F20] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1a1930] transition-colors shadow-sm'
          >
            Voir l'offre
          </button>
          <span className='text-[10px] text-gray-500 italic'>
            Publié le : {publishedDate}
          </span>
        </div>
      </div>
    </div>
  )
}

export default JobCard
