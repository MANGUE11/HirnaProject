import React from 'react'

const AboutHeroSection = () => {
  return (
    <section className='relative overflow-hidden pt-16'>
      <div className='relative'>
        <div className='relative overflow-hidden'>
          {/* Bordure gauche orange */}
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-hirna-orange z-10'></div>

          {/* Image - fit content */}
          <img
            src='/images/formation.png'
            alt='Équipe Hirna'
            className='w-full block h-[300px] md:h-[400px] lg:h-[450px] object-cover'
          />

          {/* Gradient orange du bas vers le haut */}
          <div
            className='absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none z-10'
            style={{
              background:
                'linear-gradient(to top, #C76E1E 0%, rgba(199, 110, 30, 0.6) 30%, rgba(199, 110, 30, 0.3) 60%, transparent 100%)',
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection
