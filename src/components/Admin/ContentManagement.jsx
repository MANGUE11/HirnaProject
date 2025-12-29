import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faSearch,
  faFileExport,
  faChevronDown,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons'

const ContentManagement = () => {
  // État pour savoir quel onglet est actif : 'offres', 'formations', 'bourses', 'articles'
  const [activeTab, setActiveTab] = useState('offres')

  return (
    <div className='min-h-screen bg-[#0F0E17] pt-20 px-6 pb-12 font-sans text-white'>
      {/* --- BOUTON NOUVEAU CONTENU --- */}
      <button className='bg-transparent border border-white/20 rounded-lg px-6 py-3 mb-8 flex items-center gap-4 hover:bg-white/5 transition-all'>
        <div className='bg-[#D67D29] w-6 h-6 rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faPlus} className='text-white text-xs' />
        </div>
        <span className='text-xl font-black'>Nouveau contenu</span>
      </button>

      {/* --- FORMULAIRE DE CRÉATION (MIS EN COMMENTAIRE) ---
      <div className="bg-white rounded-xl p-8 mb-10 relative shadow-2xl text-[#100F20]">
        <h2 className="text-xl font-black mb-1">Créer un nouveau contenu</h2>
        <p className="text-[#D67D29] text-xs font-bold mb-6 italic">Type : {activeTab}</p>
        <div className="space-y-4">
          <input type="text" placeholder="Titre" className="w-full bg-gray-100 rounded-md px-4 py-3" />
          <textarea placeholder="Description" className="w-full bg-gray-100 rounded-md px-4 py-3 resize-none"></textarea>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-6 py-2 border border-gray-200 rounded-md">Annuler</button>
          <button className="px-6 py-2 bg-[#D67D29] text-white rounded-md">Créer</button>
        </div>
      </div>
      ------------------------------------------------------ */}

      {/* --- CARDS STATISTIQUES --- */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
        <StatCard title='Offres' count='80' draft='3' />
        <StatCard title='Formations' count='20' draft='0' />
        <StatCard title='Bourses' count='2' draft='0' />
        <StatCard title='Articles' count='4' draft='0' />
      </div>

      {/* --- BANDE DE FILTRES AVEC DÉGRADÉ --- */}
      <div
        className='rounded-xl p-4 flex gap-4 items-center mb-8'
        style={{ background: 'linear-gradient(to right, #100F20, #433F86)' }}
      >
        <TabButton
          label='Offres'
          active={activeTab === 'offres'}
          onClick={() => setActiveTab('offres')}
        />
        <TabButton
          label='Formations'
          active={activeTab === 'formations'}
          onClick={() => setActiveTab('formations')}
        />
        <TabButton
          label='Bourses'
          active={activeTab === 'bourses'}
          onClick={() => setActiveTab('bourses')}
        />
        <TabButton
          label='Articles'
          active={activeTab === 'articles'}
          onClick={() => setActiveTab('articles')}
        />
      </div>

      {/* --- ZONE DE TABLEAU DYNAMIQUE --- */}
      <div className='border border-white/10 rounded-3xl p-6 animate-fadeIn'>
        <DynamicTable type={activeTab} />
        <Pagination />
      </div>
    </div>
  )
}

// --- LOGIQUE D'AFFICHAGE DU TABLEAU SELON L'ONGLET ---
const DynamicTable = ({ type }) => {
  const configs = {
    offres: {
      title: "Toutes les offres d'emploi / Stage",
      filters: ['Pays / Ville', 'Type de contrat', "Statut de l'offre"],
      headers: [
        'Titre',
        'Entreprise',
        'Pays',
        'Type de con..',
        'Vues',
        'Publié le:',
        'Deadline',
      ],
      rows: [
        [
          'Développeur web',
          'Orange',
          'Guinée',
          'CDI',
          '245',
          '20/02/2024',
          '20/02/2024',
        ],
        [
          'Ingénieur IT',
          'MTN',
          'Sénégal',
          'Temps partiel',
          '245',
          '20/02/2024',
          '20/02/2024',
        ],
      ],
    },
    formations: {
      title: 'Toutes les formations',
      filters: ['Pays', 'Niveau de formation', "Domaines d'études"],
      headers: [
        'Titre',
        'Ecole',
        'Pays',
        'Niveau',
        'Vues',
        'Publié le:',
        'Rentrée',
      ],
      rows: [
        [
          'Data Sciences',
          'UPM',
          'Guinée',
          'Licence',
          '245',
          '20/02/2024',
          '20/02/2024',
        ],
        [
          'Ingénierie IT',
          'ESMA',
          'Sénégal',
          'Master',
          '245',
          '20/02/2024',
          '20/02/2024',
        ],
      ],
    },
    bourses: {
      title: 'Toutes les bourses',
      filters: ["Pays d'études", "Niveau d'études visé", 'Statut'],
      headers: [
        'Titre',
        'Ecole',
        'Pays',
        'Niveau',
        'Vues',
        'Publié le:',
        'Expire le :',
      ],
      rows: [
        [
          "Bourse d'excellence",
          'UPM',
          'Guinée',
          'Licence',
          '245',
          '20/02/2024',
          '20/02/2024',
        ],
        [
          'Bourse de mobilité',
          'ESMA',
          'Sénégal',
          'Master',
          '245',
          '20/02/2024',
          '20/02/2024',
        ],
      ],
    },
    articles: {
      title: 'Tous les articles / Guides',
      filters: ["Type d'articles"],
      headers: ['Titre', 'Type de contenu', 'Auteur', 'Vues', 'Publié le :'],
      rows: [
        ['Rédiger une lettre de ...', 'Vidéos', 'Vidéos', '245', '20/02/2024'],
        ["Les Avantages de l'IA", 'Articles', 'Articles', '245', '20/02/2024'],
      ],
    },
  }

  const current = configs[type]

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-[#D67D29] text-sm font-bold'>{current.title}</h3>
        <button className='bg-[#D67D29] text-white text-[10px] font-bold py-2 px-5 rounded-md flex items-center gap-2 uppercase'>
          <FontAwesomeIcon icon={faFileExport} /> Exporter
        </button>
      </div>

      <div className='bg-white rounded-lg p-1.5 flex flex-wrap items-center gap-2 mb-6'>
        <div className='relative flex-1 min-w-[200px] border border-gray-100 rounded-md'>
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-[#D67D29]'
          />
          <input
            type='text'
            placeholder='Mot - clé'
            className='w-full pl-10 pr-4 py-2 text-gray-800 text-sm focus:outline-none bg-transparent'
          />
        </div>
        {current.filters.map((f, i) => (
          <div
            key={i}
            className='text-gray-400 text-[11px] px-4 border-l border-gray-200 cursor-pointer flex items-center gap-3'
          >
            {f} <FontAwesomeIcon icon={faChevronDown} className='text-[10px]' />
          </div>
        ))}
      </div>

      <table className='w-full text-left'>
        <thead>
          <tr className='text-[#D67D29] text-[11px] border-b border-white/10 uppercase tracking-wider'>
            {current.headers.map((h, i) => (
              <th key={i} className='pb-4 font-normal'>
                {h}
              </th>
            ))}
            <th className='pb-4 text-right font-normal'>Statut</th>
          </tr>
        </thead>
        <tbody className='text-[12px]'>
          {current.rows.map((row, i) => (
            <tr
              key={i}
              className='border-b border-white/5 hover:bg-white/[0.02] transition-colors'
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-5 ${
                    j === 0 ? 'font-black text-white' : 'text-white/70'
                  }`}
                >
                  {cell}
                </td>
              ))}
              <td className='py-5 text-right'>
                <button className='text-[#D67D29] text-[10px] font-bold uppercase hover:underline'>
                  Actions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

// --- COMPOSANTS UTILITAIRES ---

const StatCard = ({ title, count, draft }) => (
  <div className='bg-white p-5 rounded-xl flex flex-col justify-center shadow-md'>
    <p className='text-xl font-black text-[#100F20] mb-0'>{title}</p>
    <div className='flex items-baseline gap-1'>
      <span className='text-4xl font-black text-[#100F20]'>{count}</span>
      <span className='text-[10px] font-bold text-[#D67D29]'>
        ({draft} brouillons)
      </span>
    </div>
  </div>
)

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-1.5 rounded-full text-xs font-bold transition-all border ${
      active
        ? 'bg-[#D67D29] border-[#D67D29] text-white shadow-lg'
        : 'bg-transparent border-white/30 text-white/70 hover:bg-white/10'
    }`}
  >
    {label}
  </button>
)

const Pagination = () => (
  <div className='flex items-center justify-end gap-1.5 mt-8'>
    <span className='text-[10px] font-bold text-gray-500 uppercase mr-2 tracking-widest'>
      Pages
    </span>
    {[1, 2, 3].map((n) => (
      <button
        key={n}
        className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold ${
          n === 1
            ? 'bg-[#D67D29] text-white shadow-md'
            : 'bg-white/5 text-gray-400 hover:bg-white/10'
        }`}
      >
        {n}
      </button>
    ))}
    <span className='px-1 text-gray-600 text-xs'>...</span>
    <button className='bg-white/5 text-gray-400 w-8 h-8 rounded text-[10px] font-bold'>
      12
    </button>
  </div>
)

export default ContentManagement
