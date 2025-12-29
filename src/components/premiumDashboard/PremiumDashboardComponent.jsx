import React from 'react'
import {
  ArrowLeft,
  Award,
  Calendar,
  CreditCard,
  Download,
  CheckCircle,
  Settings,
  RefreshCw,
  XCircle,
} from 'lucide-react' // Utilisation de lucide-react pour les icônes

const PremiumDashboardComponent = () => {
  return (
    <div className='min-h-screen bg-[#0f0e17] text-white font-sans p-4 md:p-8'>
      {/* Header / Navigation */}
      <header className='flex items-center mb-12 max-w-5xl mx-auto'>
        <div className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'>
          <img
            src='/path-to-horna-logo.png'
            alt='horna.'
            className='h-8 mr-4'
          />
          <ArrowLeft size={20} className='text-white' />
          <span className='text-xl font-semibold'>Retour</span>
        </div>
        <span className='ml-4 text-orange-500 text-sm'>Commande validée</span>
      </header>

      {/* Main Container */}
      <main className='max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden text-[#1a1a1a] shadow-2xl'>
        <div className='p-8 md:p-12'>
          {/* Top Banner Title */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4'>
            <h1 className='bg-[#f2e7d9] text-[#1a1a1a] px-6 py-2 rounded-full font-bold text-lg'>
              Tableau de bord Premium
            </h1>
            <div className='flex items-center gap-2'>
              <span className='text-[#d67d29] font-bold text-xl uppercase tracking-wide'>
                École Premium actif
              </span>
              <div className='bg-[#d67d29] p-1 rounded-full'>
                <Award className='text-white' size={24} />
              </div>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
            <div className='border border-gray-200 rounded-xl p-5 bg-white'>
              <div className='flex items-center gap-2 text-gray-500 mb-2'>
                <Award size={18} className='text-orange-400' />
                <span className='text-sm font-medium'>Abonnement</span>
              </div>
              <p className='font-bold text-lg'>Ecole Premium</p>
              <p className='text-gray-400 text-sm'>Plan Trimestriel</p>
            </div>

            <div className='border border-gray-200 rounded-xl p-5 bg-white'>
              <div className='flex items-center gap-2 text-gray-500 mb-2'>
                <Calendar size={18} className='text-orange-400' />
                <span className='text-sm font-medium'>Prochaine échéance</span>
              </div>
              <p className='font-bold text-lg'>18 décembre 2026</p>
              <p className='text-gray-400 text-sm'>Dans 90 jours</p>
            </div>

            <div className='border border-gray-200 rounded-xl p-5 bg-white'>
              <div className='flex items-center gap-2 text-gray-500 mb-2'>
                <CreditCard size={18} className='text-orange-400' />
                <span className='text-sm font-medium'>Montant</span>
              </div>
              <p className='font-bold text-lg'>55 $</p>
              <p className='text-gray-400 text-sm'>
                Renouvellement automatique
              </p>
            </div>
          </div>

          {/* Features & Invoice Row */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
            {/* Active Features */}
            <div className='bg-[#fff9f3] border border-[#f2e7d9] rounded-2xl p-6'>
              <h3 className='font-bold text-[#3a3a3a] mb-4'>
                Fonctionnalités Premium actives
              </h3>
              <ul className='space-y-3'>
                {[
                  "Publication illimitée d'offres",
                  'Accès à la base de candidats',
                  'Filtrage IA des candidatures',
                  'Questionnaires automatisées',
                  'Statistiques détaillées',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-3 text-sm text-gray-700'
                  >
                    <CheckCircle
                      size={16}
                      className='text-green-500 shrink-0'
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className='mt-6 text-xs text-gray-400 italic'>
                Profitez de tous les avantages de votre abonnement
              </p>
            </div>

            {/* Invoice Download */}
            <div className='bg-[#16142e] rounded-2xl p-6 flex flex-col'>
              <h3 className='font-bold text-orange-400 mb-6'>
                Téléchargez votre facture
              </h3>
              <div className='mt-auto bg-white rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors'>
                <div>
                  <p className='text-xs font-bold text-gray-800'>
                    Facture #2025-001
                  </p>
                  <p className='text-[10px] text-gray-400'>18 Nov 2025</p>
                </div>
                <Download size={18} className='text-gray-600' />
              </div>
            </div>
          </div>

          {/* Subscription Management Section */}
          <div className='border border-gray-200 rounded-2xl p-6'>
            <h3 className='font-bold text-gray-800 mb-1'>
              Gestion de l'abonnement
            </h3>
            <p className='text-sm text-gray-500 mb-6'>
              Modifier ou annuler votre abonnement
            </p>

            <div className='flex flex-wrap gap-4'>
              <button className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors'>
                <Settings size={16} /> Modifier le mode de paiement
              </button>
              <button className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors'>
                <RefreshCw size={16} /> Changer de plan
              </button>
              <button className='flex items-center gap-2 px-4 py-2 text-red-500 border border-transparent hover:border-red-100 rounded-lg text-sm font-medium transition-colors'>
                <XCircle size={16} /> Annuler l'abonnement
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PremiumDashboardComponent
