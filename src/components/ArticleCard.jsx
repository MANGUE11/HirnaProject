import React from 'react'

const ArticleCard = ({
  image,
  title,
  description,
  date,
  hasNotice = false,
  onView,
  onShare,
  onSave,
}) => {
  return (
    <div className='bg-white rounded-[32px] overflow-hidden shadow-xl max-w-sm font-["Instrument_Sans"]'>
      {/* Partie Image & Notices */}
      <div className='relative h-64'>
        {/* Bande Notice IA (Conditionnelle) */}
        {hasNotice && (
          <div className='absolute top-0 left-0 right-0 bg-[#c76e1e] text-[11px] text-center py-2 px-4 z-10'>
            <span className='text-black font-bold'>Notice IA :</span>{' '}
            <span className='text-white'>
              Cet article semble convenir à votre profil
            </span>
          </div>
        )}

        <img src={image} alt={title} className='w-full h-full object-cover' />

        {/* Badge "Article" - Chevauchement image/contenu */}
        <div className='absolute -bottom-6 left-6'>
          <span className='bg-[#c76e1e] text-white text-3xl font-bold px-6 py-2 rounded-3xl'>
            Article
          </span>
        </div>
      </div>

      {/* Contenu de la card */}
      <div className='p-8 pt-12'>
        <h3 className='text-[#100F20] text-2xl font-bold leading-tight mb-4'>
          {title}
        </h3>

        <p className='text-[#100F20]/80 text-lg leading-relaxed mb-6 line-clamp-3'>
          {description}
        </p>

        {/* Date de publication */}
        <div className='text-right mb-6'>
          <p className='italic text-[#100F20]/70 text-sm'>Publié le : {date}</p>
        </div>

        {/* Barre d'actions optimisée pour éviter les débordements */}
        <div className='flex items-center gap-2'>
          <button
            onClick={onView}
            className='bg-[#100F20] text-white text-[12px] font-bold px-3 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-opacity-90 transition-all shrink-0'
          >
            Voir <i className='fa-solid fa-arrow-right text-[10px]'></i>
          </button>

          <button
            onClick={onShare}
            className='bg-[#c76e1e] text-white text-[12px] font-bold px-3 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-opacity-90 transition-all shrink-0'
          >
            Partager <i className='fa-solid fa-share-nodes text-[10px]'></i>
          </button>

          <button
            onClick={onSave}
            className='border border-[#100F20] text-[#100F20] text-[12px] font-bold px-3 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-[#100F20] hover:text-white transition-all ml-auto shrink-0'
          >
            Sauvegarder <i className='fa-solid fa-download text-[10px]'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
