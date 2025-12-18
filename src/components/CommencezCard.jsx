import React from 'react'
import { Link } from 'react-router-dom'

const CommencezCard = () => {
  return (
    <section className='relative  py-16 overflow-hidden'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Titre */}
        <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
          Commencez maintenant
        </h3>

        {/* Sous-titre */}
        <p className='text-white text-sm mb-6'>
          Trouvez votre voie dès aujourd'hui
        </p>

        {/* Bouton S'inscrire */}
        <Link
          to='/inscription'
          className='inline-flex items-center gap-2 bg-hirna-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'
        >
          <i className='fa-solid fa-user text-sm'></i>
          S'inscrire
        </Link>
      </div>
    </section>
  )
}

export default CommencezCard
