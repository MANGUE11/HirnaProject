import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileDownload,
  faSearch,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'

const PaymentManagement = () => {
  return (
    <div className='min-h-screen bg-[#0F0E17] pt-20 px-6 pb-12 font-sans text-white'>
      {/* --- EN-TÊTE : BOUTON EXPORTER --- */}
      <div className='flex justify-end mb-8'>
        <button className='bg-[#D67D29] text-white text-[11px] font-bold py-2.5 px-6 rounded-md flex items-center gap-2 uppercase shadow-lg'>
          <FontAwesomeIcon icon={faFileDownload} /> Exporter
        </button>
      </div>

      {/* --- CARDS STATISTIQUES --- */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
        <StatCard title='Revenus totaux' value='€330.00' />
        <StatCard title='Paiements en attente' value='3' />
        <StatCard title='Transactions ce mois' value='6' />
      </div>

      {/* --- BARRE DE RECHERCHE ET FILTRE --- */}
      <div className='flex gap-4 mb-6'>
        <div className='relative flex-1'>
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-[#D67D29] text-sm'
          />
          <input
            type='text'
            placeholder='Rechercher par utilisateur ou référence...'
            className='w-full bg-white rounded-md pl-11 pr-4 py-3 text-sm text-gray-700 focus:outline-none placeholder:text-gray-400'
          />
        </div>
        <div className='relative min-w-[200px]'>
          <select className='w-full bg-white rounded-md px-4 py-3 text-sm text-gray-500 appearance-none focus:outline-none cursor-pointer'>
            <option>Tous les statuts</option>
            <option>Complété</option>
            <option>En attente</option>
            <option>Échoué</option>
          </select>
          <FontAwesomeIcon
            icon={faChevronDown}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]'
          />
        </div>
      </div>

      {/* --- TABLEAU DES TRANSACTIONS --- */}
      <div className='border border-white/10 rounded-3xl p-8 bg-[#0F0E17]'>
        <table className='w-full text-left'>
          <thead>
            <tr className='text-gray-400 text-[13px] border-b border-white/10'>
              <th className='pb-5 font-medium'>Référence</th>
              <th className='pb-5 font-medium'>Utilisateur</th>
              <th className='pb-5 font-medium'>Type</th>
              <th className='pb-5 font-medium'>Montant</th>
              <th className='pb-5 font-medium'>Statut</th>
              <th className='pb-5 font-medium'>Date</th>
            </tr>
          </thead>
          <tbody className='text-[13px]'>
            <PaymentRow
              refId='TXN-001231'
              user='Jacques Mound...'
              type='Abonnement'
              amount='€150.00'
              status='Complété'
              date='15/03/2024'
            />
            <PaymentRow
              refId='TXN-001232'
              user='Jacques Mound...'
              type='Abonnement'
              amount='€200.00'
              status='En attente'
              date='13/03/2024'
            />
            <PaymentRow
              refId='TXN-001233'
              user='Jacques Mound...'
              type='Remboursement'
              amount='€200.00'
              status='Échoué'
              date='13/03/2024'
            />
            <PaymentRow
              refId='TXN-001231'
              user='Jacques Mound...'
              type='Abonnement'
              amount='€150.00'
              status='Complété'
              date='15/03/2024'
            />
            <PaymentRow
              refId='TXN-001231'
              user='Jacques Mound...'
              type='Abonnement'
              amount='€150.00'
              status='Complété'
              date='15/03/2024'
            />
          </tbody>
        </table>

        {/* --- PAGINATION (À LA PLACE DE VOIR PLUS) --- */}
        <div className='flex items-center justify-end gap-1.5 mt-8'>
          <span className='text-[10px] font-bold text-gray-500 uppercase mr-2 tracking-widest'>
            Pages
          </span>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold transition-all ${
                n === 1
                  ? 'bg-[#D67D29] text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {n}
            </button>
          ))}
          <span className='px-1 text-gray-600'>...</span>
          <button className='bg-white/5 text-gray-400 w-8 h-8 rounded text-[10px] font-bold'>
            12
          </button>
        </div>
      </div>
    </div>
  )
}

// --- SOUS-COMPOSANTS ---

const StatCard = ({ title, value }) => (
  <div className='bg-white p-7 rounded-xl shadow-md'>
    <p className='text-[#100F20] text-sm font-bold mb-4'>{title}</p>
    <p className='text-[#100F20] text-4xl font-black'>{value}</p>
  </div>
)

const PaymentRow = ({ refId, user, type, amount, status, date }) => {
  const getStatusStyle = (s) => {
    if (s === 'Complété') return 'bg-[#14C15A] text-white'
    if (s === 'En attente')
      return 'bg-white border border-gray-200 text-gray-600'
    if (s === 'Échoué') return 'bg-[#F03D3D] text-white'
    return ''
  }

  return (
    <tr className='border-b border-white/5 hover:bg-white/[0.02] transition-colors'>
      <td className='py-5 text-gray-400 font-mono text-[11px]'>{refId}</td>
      <td className='py-5 font-black text-white'>{user}</td>
      <td className='py-5'>
        <span className='bg-[#D67D29] text-white text-[10px] px-3 py-1 rounded-md font-medium'>
          {type}
        </span>
      </td>
      <td className='py-5 text-white font-medium'>{amount}</td>
      <td className='py-5'>
        <span
          className={`text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1.5 w-fit ${getStatusStyle(
            status
          )}`}
        >
          {status === 'Complété' && (
            <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
          )}
          {status === 'En attente' && (
            <span className='w-3.5 h-3.5 flex items-center justify-center border border-gray-400 rounded-full text-[8px] text-gray-400'>
              🕒
            </span>
          )}
          {status === 'Échoué' && (
            <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
          )}
          {status}
        </span>
      </td>
      <td className='py-5 text-gray-400'>{date}</td>
    </tr>
  )
}

export default PaymentManagement
