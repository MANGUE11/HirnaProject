import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faChartLine,
  faMedal,
  faCopy,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'

const AmbassadeurEtudiant = () => {
  // Données pour les inscriptions récentes
  const recentInscriptions = [
    { name: 'Jacques Moundekeno 1', date: '2025-11-18', status: 'Actif' },
    { name: 'Jacques Moundekeno 2', date: '2025-11-18', status: 'Actif' },
    { name: 'Jacques Moundekeno 3', date: '2025-11-18', status: 'En attente' },
    { name: 'Jacques Moundekeno 4', date: '2025-11-18', status: 'Actif' },
    { name: 'Jacques Moundekeno 5', date: '2025-11-18', status: 'Actif' },
  ]

  return (
    <div className='flex flex-col gap-6 animate-fadeIn font-sans pb-10'>
      {/* --- BLOC 1 : STATISTIQUES (3 CARDS) --- */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white rounded-2xl p-6 shadow-sm'>
          <div className='flex items-center gap-2 text-[#100F20] mb-2'>
            <FontAwesomeIcon
              icon={faUsers}
              className='text-[#D67D29] text-sm'
            />
            <h4 className='font-bold text-sm'>Inscriptions Totales</h4>
          </div>
          <span className='text-3xl font-extrabold text-[#100F20]'>47</span>
          <p className='text-[10px] text-gray-500 mt-1'>
            candidats inscrits via votre lien
          </p>
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-sm'>
          <div className='flex items-center gap-2 text-[#100F20] mb-2'>
            <FontAwesomeIcon
              icon={faChartLine}
              className='text-[#D67D29] text-sm'
            />
            <h4 className='font-bold text-sm'>Ce Mois-ci</h4>
          </div>
          <span className='text-3xl font-extrabold text-[#100F20]'>12</span>
          <p className='text-[10px] text-gray-500 mt-1'>
            nouvelles inscriptions
          </p>
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-sm'>
          <div className='flex items-center gap-2 text-[#100F20] mb-2'>
            <FontAwesomeIcon
              icon={faMedal}
              className='text-[#D67D29] text-sm'
            />
            <h4 className='font-bold text-sm'>Classement</h4>
          </div>
          <span className='text-3xl font-extrabold text-[#100F20]'>#3</span>
          <p className='text-[10px] text-gray-500 mt-1'>
            sur tous les ambassadeurs
          </p>
        </div>
      </div>

      {/* --- BLOC 2 : LIEN DE PARRAINAGE --- */}
      <div className='bg-white rounded-2xl p-8 shadow-sm'>
        <div className='flex items-center gap-2 text-[#100F20] mb-1'>
          <i className='fa-solid fa-share-nodes text-[#D67D29]'></i>
          <h3 className='font-bold text-lg'>Votre Lien de Parrainage</h3>
        </div>
        <p className='text-xs text-gray-500 mb-6'>
          Partagez ce lien ou code pour inviter de nouveaux candidats
        </p>

        <div className='space-y-4 max-w-4xl'>
          {/* Code de parrainage */}
          <div>
            <label className='text-[11px] font-bold text-[#D67D29] block mb-2 uppercase'>
              Code de parrainage
            </label>
            <div className='flex gap-2'>
              <input
                type='text'
                readOnly
                value='HIRNA-MD2024'
                className='flex-1 bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold text-gray-700 outline-none'
              />
              <button className='bg-[#F8F9FA] border border-gray-200 p-3 rounded-xl hover:bg-gray-100 transition-colors'>
                <FontAwesomeIcon icon={faCopy} className='text-gray-400' />
              </button>
            </div>
          </div>

          {/* Lien de parrainage */}
          <div>
            <label className='text-[11px] font-bold text-[#D67D29] block mb-2 uppercase'>
              Lien de parrainage
            </label>
            <div className='flex gap-2'>
              <input
                type='text'
                readOnly
                value='https://hirna.app/signup?ref=HIRNA-MD2024'
                className='flex-1 bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold text-gray-700 outline-none'
              />
              <button className='bg-[#F8F9FA] border border-gray-200 p-3 rounded-xl hover:bg-gray-100 transition-colors'>
                <FontAwesomeIcon icon={faCopy} className='text-gray-400' />
              </button>
            </div>
          </div>
        </div>

        {/* Astuce */}
        <div className='mt-8 bg-[#FFF8F0] border border-[#FDE3C3] rounded-xl p-4 flex items-start gap-3'>
          <FontAwesomeIcon icon={faLightbulb} className='text-[#D67D29] mt-1' />
          <p className='text-[11px] text-[#8A5A2B] leading-relaxed'>
            <span className='font-bold'>Astuce :</span> Partagez votre lien sur
            les réseaux sociaux, par email ou dans vos communautés pour
            maximiser vos inscriptions !
          </p>
        </div>
      </div>

      {/* --- BLOC 3 : INSCRIPTIONS RÉCENTES --- */}
      <div className='bg-white rounded-2xl p-8 shadow-sm'>
        <h3 className='font-bold text-lg text-[#100F20]'>
          Inscriptions Récentes
        </h3>
        <p className='text-xs text-gray-500 mb-8'>
          Les 5 derniers candidats inscrits via votre lien
        </p>

        <div className='space-y-2'>
          {recentInscriptions.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-between py-4 border-b border-gray-100 last:border-0'
            >
              <div>
                <h5 className='font-bold text-sm text-[#100F20]'>
                  {item.name}
                </h5>
                <p className='text-[10px] text-gray-400 font-medium'>
                  {item.date}
                </p>
              </div>
              <span
                className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase italic ${
                  item.status === 'Actif'
                    ? 'bg-[#21C55D] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AmbassadeurEtudiant
