import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const CtaJobSection = () => {
  return (
    <section className='bg-[#100F20] py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center flex flex-col items-center'>
        {/* Texte principal avec mise en évidence orange selon l'image */}
        <h2 className='text-white text-3xl md:text-5xl font-bold leading-tight mb-8'>
          <span className='text-hirna-orange'>Obtenez</span> votre prochain{' '}
          <span className='text-hirna-orange'>job</span> sur <br />
          <span className='text-hirna-orange'>Hirna</span>
        </h2>

        {/* Bouton "Créer votre profil" avec Font Awesome */}
        <button className='bg-hirna-orange hover:bg-[#d4651b] text-[#100F20] flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 mb-6 shadow-lg'>
          <FaUserCircle size={32} />
          <span className='text-xl md:text-2xl font-extrabold'>
            Créer votre profil
          </span>
        </button>

        {/* Sous-texte blanc */}
        <p className='text-white text-lg md:text-xl font-light opacity-90'>
          C'est gratuit et c'est en 2 clics
        </p>
      </div>
    </section>
  )
}

export default CtaJobSection
