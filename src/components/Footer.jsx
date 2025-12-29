import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const aproposLinks = [
    { label: 'Qui sommes-nous?', href: '/about' },
    { label: 'Accueil', href: '/' },
    { label: 'Formations & Bourses', href: '/formations' },
    { label: "Offres d'emploi", href: '/recrutement' },
    { label: 'Ressources', href: '/ressources' },
  ]

  const liensUtiles = [
    { label: 'Recrutement éthique', href: '#' },
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: "Conditions d'utilisation", href: '#' },
  ]

  return (
    <>
      {/* --- LE GRADIENT EXTERNE QUI PROJETTE VERS LE BAS --- */}
      <div
        className='w-full h-40 relative z-0'
        style={{
          // Le dégradé part de l'orange en haut vers le transparent en bas
          background:
            'linear-gradient(to bottom, rgba(199, 110, 30, 0.4) 0%, rgba(25, 21, 54, 0) 100%)',
          marginBottom: '-100px', // Fait descendre le gradient pour qu'il "coule" sur le footer
          filter: 'blur(35px)',
        }}
      />

      <footer className='relative bg-[#191536] pt-16 pb-6 overflow-hidden'>
        {/* Image HIRNA gradient en arrière-plan */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <img
            src='/images/Hirna gradiant text.png'
            alt='Hirna'
            className='w-[600px] md:w-[800px] opacity-20'
          />
        </div>

        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap'>
            {/* Colonne gauche */}
            <div className='w-full md:w-1/3 pr-8 mb-8'>
              <Link to='/' className='inline-block mb-4'>
                <img
                  src='/images/LOGO-ORIGINAL.png'
                  alt='Hirna'
                  className='h-10'
                />
              </Link>
              <p className='text-white text-sm mb-6'>
                Plateforme qui connecte étudiants, écoles et entreprises pour
                faciliter l'accès aux formations, aux bourses et aux
                opportunités.
              </p>
              <div className='flex items-center gap-4'>
                {['facebook-f', 'linkedin-in', 'youtube'].map((icon) => (
                  <a
                    key={icon}
                    href='#'
                    className='w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-[#c76e1e] hover:border-[#c76e1e] transition-colors'
                  >
                    <i className={`fa-brands fa-${icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Colonne droite */}
            <div className='w-full md:w-2/3 md:pl-12'>
              <div className='flex justify-start mb-8'>
                <button className='bg-[#c76e1e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
                  Commencez maintenant
                </button>
              </div>
              <div className='flex'>
                <div className='w-1/2'>
                  <h4 className='text-[#c76e1e] font-bold text-sm uppercase mb-4'>
                    A PROPOS
                  </h4>
                  <ul className='space-y-2'>
                    {aproposLinks.map((l, i) => (
                      <li key={i}>
                        <Link
                          to={l.href}
                          className='text-white text-sm hover:text-[#c76e1e]'
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='w-1/2'>
                  <h4 className='text-[#c76e1e] font-bold text-sm uppercase mb-4'>
                    LIENS UTILES
                  </h4>
                  <ul className='space-y-2'>
                    {liensUtiles.map((l, i) => (
                      <li key={i}>
                        <Link
                          to={l.href}
                          className='text-white text-sm hover:text-[#c76e1e]'
                        >
                          . {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-12 mt-8 text-white text-sm'>
            <h4 className='text-[#c76e1e] font-bold text-sm mb-4'>Contact</h4>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <i className='fa-solid fa-phone text-[#c76e1e]'></i> +224 620
                XXX XXX
              </div>
              <div className='flex items-center gap-2'>
                <i className='fa-solid fa-envelope text-[#c76e1e]'></i>{' '}
                contact@hirna.com
              </div>
              <div className='flex items-center gap-2'>
                <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>{' '}
                Kipé, Conakry - Guinée
              </div>
            </div>
          </div>

          <div className='border-t border-white/20 pt-6'>
            <p className='text-white text-sm text-center'>
              Hirna Group @2025 - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
