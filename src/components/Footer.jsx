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
    <footer className='relative bg-[#191536] pt-16 pb-6 overflow-hidden'>
      {/* Image HIRNA gradient en arrière-plan */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <img
          src='/images/Hirna gradiant text.png'
          alt='Hirna'
          className='w-[600px] md:w-[800px] opacity-30'
        />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section principale */}
        <div className='flex flex-wrap'>
          {/* Colonne gauche - Logo, description, réseaux sociaux */}
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
              faciliter l'accès aux formations, aux bourses et aux opportunités
              professionnelles.
            </p>

            {/* Réseaux sociaux */}
            <div className='flex items-center gap-4'>
              <a
                href='#'
                className='w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-hirna-orange hover:border-hirna-orange transition-colors'
              >
                <i className='fa-brands fa-facebook-f text-sm'></i>
              </a>
              <a
                href='#'
                className='w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-hirna-orange hover:border-hirna-orange transition-colors'
              >
                <i className='fa-brands fa-linkedin-in text-sm'></i>
              </a>
              <a
                href='#'
                className='w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-hirna-orange hover:border-hirna-orange transition-colors'
              >
                <i className='fa-brands fa-youtube text-sm'></i>
              </a>
            </div>
          </div>

          {/* Colonne droite - Bouton + A propos + Liens utiles (Avec éloignement pl-12) */}
          <div className='w-full md:w-2/3 md:pl-12'>
            {/* Bouton Commencez maintenant - Aligné à gauche du bloc de droite */}
            <div className='flex justify-start mb-8'>
              <button className='inline-flex items-center gap-2 bg-hirna-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a85a18] transition-colors'>
                Commencez maintenant
              </button>
            </div>

            {/* A propos et Liens utiles côte à côte */}
            <div className='flex'>
              {/* A PROPOS */}
              <div className='w-1/2'>
                <h4 className='text-hirna-orange font-bold text-sm uppercase mb-4'>
                  A PROPOS
                </h4>
                <ul className='space-y-2'>
                  {aproposLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className='text-white text-sm hover:text-hirna-orange transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LIENS UTILES */}
              <div className='w-1/2'>
                <h4 className='text-hirna-orange font-bold text-sm uppercase mb-4'>
                  LIENS UTILES
                </h4>
                <ul className='space-y-2'>
                  {liensUtiles.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className='text-white text-sm hover:text-hirna-orange transition-colors'
                      >
                        . {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className='mb-12 mt-8'>
          <h4 className='text-hirna-orange font-bold text-sm mb-4'>Contact</h4>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-phone text-hirna-orange text-sm'></i>
              <span className='text-white text-sm'>+224 620 XXX XXX</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-envelope text-hirna-orange text-sm'></i>
              <span className='text-white text-sm'>contact@hirna.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className='fa-solid fa-location-dot text-hirna-orange text-sm'></i>
              <span className='text-white text-sm'>
                Kipé, Conakry - République de Guinée
              </span>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className='border-t border-white/20 pt-6'>
          <p className='text-white text-sm text-center'>
            Hirna Group @2025 - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
