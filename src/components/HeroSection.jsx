import React, { useState } from 'react'

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSlide, setActiveSlide] = useState(1) // 0, 1, 2 pour les 3 slides

  const handleSearch = (e) => {
    e.preventDefault()
    // TODO: Implémenter la recherche avec l'API
    console.log('Recherche:', searchQuery)
  }

  return (
    <section
      className='relative overflow-hidden  mb-20'
      style={{ height: '900px' }}
    >
      {/* Image de fond */}
      <div className='absolute inset-0 overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
          src='/images/Vidéo - intro.mp4' // <-- ta vidéo ici
        ></video>

        {/* Overlay sombre */}
        <div className='absolute inset-0 bg-hirna-dark/50'></div>

        {/* Gradient orange en bas de la vidéo */}
        <div
          className='absolute bottom-0 left-0 right-0 h-48'
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(199, 110, 30, 0.3) 40%, rgba(199, 110, 30, 0.7) 70%, #C76E1E 100%)',
          }}
        ></div>
      </div>

      {/* Bande violette/pourpre en bas */}
      <div className='absolute bottom-0 left-0 right-0 h-1.5 bg-hirna-purple z-20'></div>

      {/* Contenu Hero - positionné vers le bas */}
      <div className='relative z-10 h-full flex flex-col justify-end pb-20 px-4 sm:px-6 lg:px-8'>
        {/* Slider Indicators */}
        <div className='flex items-center justify-center gap-3 mb-8'>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'w-14 bg-hirna-orange'
                  : 'w-10 bg-hirna-orange/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Barre de recherche avec glass effect gradient */}
        <form onSubmit={handleSearch} className='w-full max-w-xl mx-auto'>
          <div
            className='relative flex items-center rounded-full shadow-xl overflow-hidden backdrop-blur-md p-[1px]'
            style={{
              background:
                'linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.05) 100%)',
            }}
          >
            <div
              className='flex items-center w-full rounded-full'
              style={{
                background:
                  'linear-gradient(to right, rgba(199, 110, 30, 0.6) 0%, rgba(199, 110, 30, 0.3) 30%, rgba(255, 255, 255, 0.2) 100%)',
              }}
            >
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Vous recherchez une  une formation, un emploi...'
                className='w-full py-4 px-6 pr-16 bg-transparent text-white text-sm placeholder-white/70 focus:outline-none'
              />
              <button
                type='submit'
                className='absolute right-2 w-11 h-11 rounded-full bg-hirna-orange flex items-center justify-center hover:bg-[#a85a18] transition-colors'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2.5}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default HeroSection
