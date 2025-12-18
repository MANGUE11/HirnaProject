import React from 'react'

const TemoignagesSection = () => {
  const mainVideo = {
    id: 1,
    thumbnail: '/images/formation.png',
    title:
      'Avec Hirna nous avons divisé notre de temps de recrutement en deux(2)',
    author: 'Mme SANOGO Rika - DRH TOTAL ENERGIES',
    publishedDate: '07/09/2025',
    hasNotice: true,
  }

  const sideVideos = [
    {
      id: 2,
      number: '01',
      thumbnail: '/images/formation.png',
      title:
        'Pourquoi choisir Hirna pour trouver votre voie et bâtir une carrière...',
      publishedDate: '07/09/2025',
    },
    {
      id: 3,
      number: '02',
      thumbnail: '/images/formation.png',
      title:
        'Pourquoi choisir Hirna pour trouver votre voie et bâtir une carrière...',
      publishedDate: '07/09/2025',
    },
    {
      id: 4,
      number: '03',
      thumbnail: '/images/formation.png',
      title:
        'Pourquoi choisir Hirna pour trouver votre voie et bâtir une carrière...',
      publishedDate: '07/09/2025',
    },
  ]

  return (
    <section className='relative py-20 md:py-32 overflow-hidden bg-[#191536]'>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
              <i className='fa-solid fa-star text-hirna-orange text-sm'></i>
            </div>
            <h2 className='text-xl md:text-2xl font-bold text-white'>
              Découvrez nos témoignages
            </h2>
          </div>
        </div>

        {/* Sous-titre */}
        <h3 className='text-center text-hirna-orange text-2xl md:text-3xl font-bold mb-10'>
          Témoignages
        </h3>

        {/* Contenu - Vidéo principale + liste */}
        <div className='grid lg:grid-cols-2 gap-2 items-start'>
          {/* Vidéo principale à gauche - avec bordure gradient */}
          <div className='max-w-md'>
            <div
              className='rounded-2xl p-[2px]'
              style={{
                background: 'linear-gradient(to bottom, #EAEAEA, #666666)',
              }}
            >
              <div className='bg-[#191536] rounded-2xl overflow-hidden'>
                {/* Notice IA - fond orange */}
                {mainVideo.hasNotice && (
                  <div className='bg-hirna-orange text-white text-xs text-center py-2 px-3'>
                    <span className='font-bold'>Notice IA :</span> Ce témoignage
                    semble convenir à votre profil
                  </div>
                )}

                {/* Thumbnail avec bouton play */}
                <div className='relative'>
                  <img
                    src={mainVideo.thumbnail}
                    alt={mainVideo.title}
                    className='w-full h-56 md:h-64 object-cover'
                  />
                  {/* Bouton play */}
                  <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <button className='w-16 h-16 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform'>
                      <i className='fa-solid fa-play text-hirna-dark text-xl ml-1'></i>
                    </button>
                    <span className='text-white font-semibold mt-2 text-sm text-center'>
                      Regarder la
                      <br />
                      <span className='italic'>vidéo</span>
                    </span>
                  </div>
                </div>

                {/* Infos vidéo - fond #191536 */}
                <div className='p-4'>
                  <h4 className='text-white font-bold text-lg mb-1'>
                    {mainVideo.title}
                  </h4>
                  <p className='text-white/80 text-sm mb-3'>
                    {mainVideo.author}
                  </p>
                  <p className='text-white/70 text-xs text-right italic'>
                    Publié le : {mainVideo.publishedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des vidéos à droite */}
          <div className='flex flex-col gap-3'>
            {sideVideos.map((video) => (
              <div key={video.id} className='flex gap-3 items-start'>
                {/* Thumbnail avec numéro */}
                <div className='relative flex-shrink-0 w-28 h-18 md:w-36 md:h-22 rounded-xl overflow-hidden'>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className='w-full h-full object-cover'
                  />
                  {/* Numéro */}
                  <div className='absolute top-2 left-2 w-6 h-6 rounded-full bg-hirna-orange flex items-center justify-center'>
                    <span className='text-white text-xs font-bold'>
                      {video.number}
                    </span>
                  </div>
                </div>

                {/* Infos - width réduit */}
                <div className='flex-1 max-w-[180px]'>
                  <h4 className='text-white font-bold text-sm leading-tight line-clamp-3'>
                    {video.title}
                  </h4>
                  <p className='text-white/70 text-xs text-right italic mt-2'>
                    Publié le : {video.publishedDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TemoignagesSection
