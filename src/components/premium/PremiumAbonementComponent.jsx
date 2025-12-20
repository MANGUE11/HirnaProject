import React from 'react'

const PremiumAbonementComponent = () => {
  return (
    <section className='bg-[#100F20] text-white py-16'>
      {/* BANDEAU SUPÉRIEUR ORANGE */}
      <div className='bg-[#c76e1e] py-6 text-center mb-12 px-6'>
        <h2 className='text-3xl md:text-4xl font-bold uppercase tracking-tight'>
          Passez au Premium
        </h2>
        <p className='text-sm md:text-base mt-2 opacity-90'>
          Débloquez des fonctionnalités avancées et boostez votre présence sur
          la plateforme
        </p>
      </div>

      <div className='max-w-7xl mx-auto px-6 flex flex-col items-center'>
        {/* ICÔNE MÉDAILLE CENTRALE */}
        <div className='mb-10 text-6xl text-white'>
          <i className='fa-solid fa-award'></i>
        </div>

        {/* SÉLECTEUR D'ONGLETS AVEC GRADIENT GAUCHE-DROITE */}
        <div className='bg-gradient-to-r from-[#100F20] to-[#433F86] p-2 rounded-2xl flex items-center gap-2 mb-16 border border-white/10 shadow-2xl'>
          <button className='bg-[#c76e1e] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 transition-all'>
            <i className='fa-solid fa-graduation-cap'></i> Écoles & Universités
          </button>
          <button className='text-white/80 hover:text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 transition-all'>
            <i className='fa-solid fa-building'></i> Entreprises
          </button>
        </div>

        {/* GRILLE DES TARIFS (Hauteurs alignées avec items-stretch) */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch'>
          {/* CARTE MENSUEL */}
          <div className='bg-white rounded-[32px] p-8 text-[#100F20] flex flex-col h-full shadow-xl'>
            <div className='flex items-center gap-3 mb-4'>
              <i className='fa-solid fa-medal text-[#c76e1e] text-2xl'></i>
              <h3 className='text-2xl font-bold'>Mensuel</h3>
            </div>
            <div className='mb-8'>
              <span className='text-4xl font-black'>30$/</span>
              <span className='text-gray-500 font-medium'> mois</span>
            </div>
            <ul className='space-y-4 mb-10 flex-grow text-sm font-medium'>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i> Accès
                à la base de candidats filtrable
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i> Mise
                en avant dans l'annuaire
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Statistiques avancées & exports
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Publication illimitée de formations
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Publication illimitée de bourses
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Support prioritaire
              </li>
            </ul>
            <button className='w-full border border-gray-300 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all mt-auto'>
              Activer le premium
            </button>
          </div>

          {/* CARTE TRIMESTRIEL (LE PLUS POPULAIRE) */}
          <div className='flex flex-col h-full'>
            <div className='bg-[#191536] text-white text-center py-3 rounded-t-[32px] font-bold text-sm border-x border-t border-white/10'>
              Le plus populaire
            </div>
            <div className='bg-white rounded-b-[32px] p-8 text-[#100F20] flex flex-col h-full shadow-[0_20px_50px_rgba(199,110,30,0.3)] border-2 border-[#c76e1e]'>
              <div className='flex items-center gap-3 mb-4'>
                <i className='fa-solid fa-medal text-[#c76e1e] text-2xl'></i>
                <h3 className='text-2xl font-bold'>Trimestriel</h3>
              </div>
              <div className='mb-8'>
                <span className='text-4xl font-black'>55$/</span>
                <span className='text-gray-500 font-medium'> 3 mois</span>
              </div>
              <ul className='space-y-4 mb-10 flex-grow text-sm font-medium'>
                <li className='flex items-start gap-3'>
                  <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                  Accès à la base de candidats filtrable
                </li>
                <li className='flex items-start gap-3'>
                  <i className='fa-solid fa-check text-green-500 mt-1'></i> Mise
                  en avant dans l'annuaire
                </li>
                <li className='flex items-start gap-3'>
                  <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                  Statistiques avancées & exports
                </li>
                <li className='flex items-start gap-3'>
                  <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                  Publication illimitée de formations
                </li>
                <li className='flex items-start gap-3'>
                  <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                  Publication illimitée de bourses
                </li>
                <li className='flex items-start gap-3'>
                  <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                  Support prioritaire
                </li>
                <li className='flex items-start gap-3 font-bold text-[#c76e1e]'>
                  <i className='fa-solid fa-check mt-1'></i> Économisez 10%
                </li>
              </ul>
              <button className='w-full bg-[#c76e1e] text-white py-4 rounded-xl font-bold hover:bg-[#a65b18] transition-all mt-auto shadow-lg'>
                Activer le premium
              </button>
            </div>
          </div>

          {/* CARTE ANNUEL */}
          <div className='bg-white rounded-[32px] p-8 text-[#100F20] flex flex-col h-full shadow-xl'>
            <div className='flex items-center gap-3 mb-4'>
              <i className='fa-solid fa-medal text-[#c76e1e] text-2xl'></i>
              <h3 className='text-2xl font-bold'>Annuel</h3>
            </div>
            <div className='mb-8'>
              <span className='text-4xl font-black'>120$/</span>
              <span className='text-gray-500 font-medium'> an</span>
            </div>
            <ul className='space-y-4 mb-10 flex-grow text-sm font-medium'>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i> Accès
                à la base de candidats filtrable
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i> Mise
                en avant dans l'annuaire
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Statistiques avancées & exports
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Publication illimitée de formations
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Publication illimitée de bourses
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Support prioritaire
              </li>
              <li className='flex items-start gap-3 font-bold text-[#c76e1e]'>
                <i className='fa-solid fa-check mt-1'></i> Économisez 20%
              </li>
              <li className='flex items-start gap-3'>
                <i className='fa-solid fa-check text-green-500 mt-1'></i>{' '}
                Rapport annuel personnalisé
              </li>
            </ul>
            <button className='w-full border border-gray-300 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all mt-auto'>
              Activer le premium
            </button>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div className='mt-20 text-center text-white/80 text-lg md:text-xl font-medium'>
          Paiement sécurisé • Annulation à tout moment • Support 24/7
        </div>
      </div>
    </section>
  )
}

export default PremiumAbonementComponent
