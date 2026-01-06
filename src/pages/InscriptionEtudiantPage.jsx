import React from 'react'
import { Header, Footer } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faEyeSlash,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

const InscriptionEtudiantPage = () => {
  return (
    <div className='min-h-screen bg-[#100F20] flex flex-col'>
      <Header />

      <main className='flex-grow flex flex-col items-center px-4 pb-16'>
        {/* --- LOGO HIRNA PNG AVEC ESPACE EN HAUT --- */}
        <div className='mt-20 mb-8'>
          <img
            src='/images/LOGO-ORIGINAL.png'
            alt='Hirna'
            className='h-16 w-auto'
          />
        </div>

        {/* --- TITRE --- */}
        <div className='text-center mb-10'>
          <h2 className='text-[#D67D29] text-3xl font-bold mb-2'>
            Inscription candidat
          </h2>
          <p className='text-gray-400 text-sm'>
            Créer votre compte pour démarrer votre parcours
          </p>
        </div>

        {/* --- FORMULAIRE AVEC BG #191536 --- */}
        <div className='w-full max-w-3xl bg-[#191536] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl'>
          <form className='space-y-6'>
            {/* Prénom et Nom */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  Prénom *
                </label>
                <input
                  type='text'
                  className='w-full bg-white rounded-lg py-3 px-4 text-[#100F20] focus:outline-none'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  Nom *
                </label>
                <input
                  type='text'
                  className='w-full bg-white rounded-lg py-3 px-4 text-[#100F20] focus:outline-none'
                />
              </div>
            </div>

            {/* Email et Téléphone */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  adresse mail *
                </label>
                <input
                  type='email'
                  className='w-full bg-white rounded-lg py-3 px-4 text-[#100F20] focus:outline-none'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  Numero de telephone
                </label>
                <div className='relative flex items-center'>
                  <div className='absolute left-3 flex items-center gap-1 border-r border-gray-300 pr-2'>
                    <span className='text-lg'>🇬🇳</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className='text-[10px] text-gray-400'
                    />
                  </div>
                  <input
                    type='tel'
                    className='w-full bg-white rounded-lg py-3 pl-16 pr-4 text-[#100F20] focus:outline-none'
                  />
                </div>
              </div>
            </div>

            {/* Pays et Ville */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  pays
                </label>
                <div className='relative'>
                  <select className='w-full bg-white rounded-lg py-3 px-4 text-gray-400 appearance-none focus:outline-none cursor-pointer'>
                    <option>Sélectionnez un pays</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-[#D67D29]'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  Ville
                </label>
                <input
                  type='text'
                  className='w-full bg-white rounded-lg py-3 px-4 text-[#100F20] focus:outline-none'
                />
              </div>
            </div>

            {/* Statut (Select dynamique mais statique ici) */}
            <div className='flex flex-col gap-2'>
              <label className='text-[#D67D29] text-sm font-medium'>
                Statut *
              </label>
              <div className='relative'>
                <select className='w-full bg-white rounded-lg py-3 px-4 text-gray-400 appearance-none focus:outline-none cursor-pointer'>
                  <option>En quête de travail</option>
                  <option>Étudiant</option>
                  <option>Stagiaire</option>
                </select>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-[#D67D29]'
                />
              </div>
            </div>

            {/* Mot de passe et Confirmation */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  Mot de passe *
                </label>
                <div className='relative'>
                  <input
                    type='password'
                    d
                    className='w-full bg-white rounded-lg py-3 px-4 text-[#100F20] focus:outline-none'
                  />
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-[#D67D29] text-sm font-medium'>
                  Confirmation *
                </label>
                <input
                  type='password'
                  className='w-full bg-white rounded-lg py-3 px-4 text-[#100F20] focus:outline-none'
                />
              </div>
            </div>

            {/* CGU */}
            <div className='flex items-center gap-3 pt-2'>
              <div className='w-5 h-5 rounded-full border border-[#D67D29] flex items-center justify-center cursor-pointer'>
                <div className='w-2.5 h-2.5 bg-[#D67D29] rounded-full'></div>
              </div>
              <p className='text-white text-[11px] leading-tight'>
                En créant un compte, vous acceptez nos{' '}
                <span className='underline cursor-pointer'>
                  Conditions d'utilisation
                </span>{' '}
                et notre{' '}
                <span className='underline cursor-pointer'>
                  Politique de confidentialité
                </span>
                .
              </p>
            </div>

            {/* Bouton S'inscrire */}
            <div className='flex flex-col items-center pt-6'>
              <button className='bg-[#D67D29] text-white font-bold py-3 px-14 rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-[#D67D29]/20'>
                <FontAwesomeIcon icon={faUserPlus} />
                S'inscrire
              </button>

              <p className='text-gray-400 text-sm mt-8'>
                Déjà un compte ?{' '}
                <span className='text-white font-bold cursor-pointer hover:text-[#D67D29] transition-colors'>
                  Se connecter
                </span>
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default InscriptionEtudiantPage
