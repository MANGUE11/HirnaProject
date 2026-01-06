import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faBuilding,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'

// Importe ton logo ici (assure-toi que le chemin est correct)
// import logoHirna from '../assets/hirna-logo.png';

const InscriptionPrincipalPage = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-[#0F0E17] flex flex-col items-center justify-center px-6 py-12'>
      {/* --- LOGO HIRNA (PNG) --- */}
      <div className='mb-14'>
        <img
          src='/images/LOGO-ORIGINAL.png'
          alt='Hirna Logo'
          className='h-16 w-auto object-contain' // Ajuste la hauteur (h-16) selon tes besoins
        />
      </div>

      {/* --- TITRE ET SOUS-TITRE --- */}
      <div className='text-center mb-12'>
        <h2 className='text-[#D67D29] text-3xl font-bold mb-3 tracking-tight'>
          Inscription
        </h2>
        <p className='text-gray-400 text-sm max-w-xs mx-auto leading-relaxed'>
          Choisissez votre type de compte pour créer votre profil
        </p>
      </div>

      {/* --- GRILLE DES CARTES --- */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl'>
        {/* CARTE CANDIDAT */}
        <div
          onClick={() => navigate('/inscriptionetudiant')}
          className='cursor-pointer group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D67D29]/50 hover:bg-white/[0.08] hover:-translate-y-1'
        >
          <div className='w-16 h-16 bg-[#D67D29] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#D67D29]/30'>
            <FontAwesomeIcon icon={faUser} className='text-white text-2xl' />
          </div>
          <h3 className='text-[#D67D29] text-xl font-bold mb-4'>Candidat</h3>
          <p className='text-gray-400 text-[13px] leading-relaxed'>
            Pour les étudiants et les chercheurs d'emploi
          </p>
        </div>

        {/* CARTE ENTREPRISE */}
        <div className='cursor-pointer group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D67D29]/50 hover:bg-white/[0.08] hover:-translate-y-1'>
          <div className='w-16 h-16 bg-[#D67D29] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#D67D29]/30'>
            <FontAwesomeIcon
              icon={faBuilding}
              className='text-white text-2xl'
            />
          </div>
          <h3 className='text-[#D67D29] text-xl font-bold mb-4'>Entreprise</h3>
          <p className='text-gray-400 text-[13px] leading-relaxed'>
            Pour les recruteurs et employeurs
          </p>
        </div>

        {/* CARTE ECOLE */}
        <div className='cursor-pointer group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D67D29]/50 hover:bg-white/[0.08] hover:-translate-y-1'>
          <div className='w-16 h-16 bg-[#D67D29] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#D67D29]/30'>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className='text-white text-2xl'
            />
          </div>
          <h3 className='text-[#D67D29] text-xl font-bold mb-4'>Ecole</h3>
          <p className='text-gray-400 text-[13px] leading-relaxed'>
            Pour les établissements éducatifs
          </p>
        </div>
      </div>

      {/* --- FOOTER SE CONNECTER --- */}
      <div className='mt-20 text-center'>
        <p className='text-gray-400 text-lg font-medium'>Déjà un compte ?</p>
        <button className='text-white text-2xl font-black mt-1 hover:text-[#D67D29] transition-colors tracking-wide'>
          Se connecter
        </button>
      </div>
    </div>
  )
}

export default InscriptionPrincipalPage
