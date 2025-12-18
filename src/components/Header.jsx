import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'A propos', path: '/about' },
    { name: 'Recrutement', path: '/recrutement' },
    { name: 'Formations & Bourses', path: '/formationsBourse' },
    { name: 'Ressources', path: '/ressources' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#191536]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo HIRNA remplacé par PNG */}
          <Link to='/' className='flex items-center gap-2'>
            <img
              src='/images/LOGO-ORIGINAL.png'
              alt='HIRNA Logo'
              className='h-12 w-auto'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 pb-1 ${
                  isActive(link.path)
                    ? 'text-hirna-orange'
                    : 'text-white hover:text-hirna-orange'
                }`}
              >
                {link.name}
                {/* Tiret orange sous l'onglet actif */}
                {isActive(link.path) && (
                  <span className='absolute bottom-0 left-0 right-0 h-[2px] bg-hirna-orange rounded-full'></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
            <Link
              to='/login'
              className='text-hirna-orange text-sm font-semibold hover:text-white transition-colors duration-300'
            >
              Se Connecter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 bg-[#191536] rounded-lg mt-2 animate-fade-in'>
            <nav className='flex flex-col space-y-4 px-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium py-2 transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-hirna-orange'
                      : 'text-white hover:text-hirna-orange'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {/* Tiret orange sous l'onglet actif - mobile */}
                  {isActive(link.path) && (
                    <span className='absolute bottom-0 left-0 w-8 h-[2px] bg-hirna-orange rounded-full'></span>
                  )}
                </Link>
              ))}
              <Link
                to='/login'
                className='text-hirna-orange font-semibold py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Se Connecter
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
