import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faBuilding,
  faUsers,
  faUserTie,
  faChevronDown,
  faChevronUp,
  faSearch,
  faFileExport,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

const UsersManagement = () => {
  const [openSections, setOpenSections] = useState({
    schools: true,
    companies: true,
    candidates: true,
    ambassadors: true,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className='min-h-screen bg-[#0F0E17] pt-20 px-6 pb-12 font-sans text-white'>
      {/* --- EN-TÊTE : CARDS LARGEUR TOTALE --- */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-10'>
        <div className='bg-white p-5 rounded-sm flex flex-col justify-center shadow-md'>
          <p className='text-[11px] font-bold text-gray-400 uppercase tracking-tighter'>
            Total utilisateurs
          </p>
          <p className='text-4xl font-black text-[#100F20]'>300</p>
        </div>
        <div className='bg-white p-5 rounded-sm flex flex-col justify-center shadow-md'>
          <p className='text-[11px] font-bold text-gray-400 uppercase tracking-tighter'>
            Actifs
          </p>
          <p className='text-4xl font-black text-[#100F20]'>2</p>
        </div>
        <div className='bg-[#D67D29] p-5 rounded-sm flex flex-col justify-center'>
          <p className='text-[11px] font-bold text-white/80 uppercase tracking-tighter'>
            Total Ambassadeurs
          </p>
          <p className='text-4xl font-black text-white'>3</p>
        </div>
        <div className='bg-[#D67D29] p-5 rounded-sm flex flex-col justify-center'>
          <p className='text-[11px] font-bold text-white/80 uppercase tracking-tighter'>
            Actifs
          </p>
          <p className='text-4xl font-black text-white'>2</p>
        </div>
      </div>

      {/* --- SECTION ECOLES --- */}
      <div className='mb-8'>
        <button
          onClick={() => toggleSection('schools')}
          className='flex items-center gap-3 border border-white/20 rounded-full px-6 py-2 mb-4 hover:bg-white/5 transition-all'
        >
          <FontAwesomeIcon icon={faGraduationCap} />
          <span className='font-bold text-lg'>Ecoles/Universités</span>
          <FontAwesomeIcon
            icon={openSections.schools ? faChevronUp : faChevronDown}
            className='ml-2 text-xs opacity-50'
          />
        </button>
        {openSections.schools && (
          <div className='border border-white/10 rounded-3xl p-6 animate-fadeIn'>
            <SectionHeader
              label='Toutes les écoles'
              filters={['Pays / Ville', 'Type d’établissement', 'Statut']}
            />
            <table className='w-full text-left'>
              <thead>
                <tr className='text-[#D67D29] text-[13px] border-b border-white/10 uppercase'>
                  <th className='pb-4 font-normal'>Nom de l'école</th>
                  <th className='pb-4 font-normal'>Pays</th>
                  <th className='pb-4 font-normal'>Type</th>
                  <th className='pb-4 font-normal'>Programme</th>
                  <th className='pb-4 font-normal'>Vues</th>
                  <th className='pb-4 font-normal'>Statut</th>
                  <th className='pb-4 text-right font-normal'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-[13px]'>
                <TableRow
                  data={[
                    'Université de Marrakech',
                    'Maroc',
                    'Université',
                    'Commerce',
                    '245',
                    'Actif',
                  ]}
                />
                <TableRow
                  data={[
                    'Ghana Private University',
                    'Ghana',
                    'Université',
                    'Informatique',
                    '245',
                    'En attente',
                  ]}
                />
              </tbody>
            </table>
            <Pagination />
          </div>
        )}
      </div>

      {/* --- SECTION ENTREPRISES --- */}
      <div className='mb-8'>
        <button
          onClick={() => toggleSection('companies')}
          className='flex items-center gap-3 border border-white/20 rounded-full px-6 py-2 mb-4 hover:bg-white/5 transition-all'
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span className='font-bold text-lg'>Entreprises</span>
          <FontAwesomeIcon
            icon={openSections.companies ? faChevronUp : faChevronDown}
            className='ml-2 text-xs opacity-50'
          />
        </button>
        {openSections.companies && (
          <div className='border border-white/10 rounded-3xl p-6 animate-fadeIn'>
            <SectionHeader
              label='Toutes les entreprises'
              filters={['Pays / Ville', 'Secteur d’activités', 'Statut']}
            />
            <table className='w-full text-left'>
              <thead>
                <tr className='text-[#D67D29] text-[13px] border-b border-white/10 uppercase'>
                  <th className='pb-4 font-normal'>Nom de l'entreprise</th>
                  <th className='pb-4 font-normal'>Pays</th>
                  <th className='pb-4 font-normal'>Secteur d’activités</th>
                  <th className='pb-4 font-normal'>Vues</th>
                  <th className='pb-4 font-normal'>Statut</th>
                  <th className='pb-4 text-right font-normal'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-[13px]'>
                <TableRow
                  data={['Charima', 'Maroc', 'Commerce', '245', 'Actif']}
                />
                <TableRow
                  data={[
                    'Zenith Bank Corp',
                    'Ghana',
                    'Finance',
                    '00',
                    'En attente',
                  ]}
                />
              </tbody>
            </table>
            <Pagination />
          </div>
        )}
      </div>

      {/* --- NOUVELLE SECTION : CANDIDATS (AJOUTÉE ICI) --- */}
      <div className='mb-8'>
        <button
          onClick={() => toggleSection('candidates')}
          className='flex items-center gap-3 border border-white/20 rounded-full px-6 py-2 mb-4 hover:bg-white/5 transition-all'
        >
          <FontAwesomeIcon icon={faUsers} />
          <span className='font-bold text-lg'>Candidats</span>
          <FontAwesomeIcon
            icon={openSections.candidates ? faChevronUp : faChevronDown}
            className='ml-2 text-xs opacity-50'
          />
        </button>
        {openSections.candidates && (
          <div className='border border-white/10 rounded-3xl p-6 animate-fadeIn'>
            <SectionHeader
              label='Toutes les candidats'
              filters={['Pays / Ville', 'Statut']}
            />
            <table className='w-full text-left'>
              <thead>
                <tr className='text-[#D67D29] text-[13px] border-b border-white/10 uppercase'>
                  <th className='pb-4 font-normal'>Nom du candidat</th>
                  <th className='pb-4 font-normal'>Pays</th>
                  <th className='pb-4 font-normal'>Email</th>
                  <th className='pb-4 font-normal'>Profil</th>
                  <th className='pb-4 text-right font-normal'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-[13px]'>
                <TableRow
                  data={[
                    'Aminata Camara',
                    'Maroc',
                    'aminatacamara@gmail.com',
                    'Etudiant',
                  ]}
                />
                <TableRow
                  data={[
                    'Jacques Moundekeno',
                    'Ghana',
                    'finance@email.com',
                    'Stagiaire',
                  ]}
                />
                <TableRow
                  data={[
                    'Ruth Atandji',
                    'Congo',
                    'btp@email.com',
                    'En quête de travail',
                  ]}
                />
              </tbody>
            </table>
            <Pagination />
          </div>
        )}
      </div>

      {/* --- SECTION AMBASSADEURS --- */}
      <div className='mb-8'>
        <button
          onClick={() => toggleSection('ambassadors')}
          className='flex items-center gap-3 border border-white/20 rounded-full px-6 py-2 mb-4 hover:bg-white/5 transition-all'
        >
          <FontAwesomeIcon icon={faUserTie} />
          <span className='font-bold text-lg'>Ambassadeurs</span>
          <FontAwesomeIcon
            icon={openSections.ambassadors ? faChevronUp : faChevronDown}
            className='ml-2 text-xs opacity-50'
          />
        </button>
        {openSections.ambassadors && (
          <div className='border border-white/10 rounded-3xl p-6 animate-fadeIn'>
            <SectionHeader
              label='Tous les ambassadeurs'
              filters={['Pays / Ville', 'Statut']}
            />
            <table className='w-full text-left'>
              <thead>
                <tr className='text-[#D67D29] text-[13px] border-b border-white/10 uppercase'>
                  <th className='pb-4 font-normal'>Nom de l'ambassadeur</th>
                  <th className='pb-4 font-normal'>Pays</th>
                  <th className='pb-4 font-normal'>Chiffres</th>
                  <th className='pb-4 font-normal'>Profil</th>
                  <th className='pb-4 text-right font-normal'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-[13px]'>
                <AmbassadorRow
                  name='Jacques Moundekeno'
                  email='uxdesign@email.com'
                  country='Maroc'
                  count='12'
                  profile='Etudiant'
                />
                <AmbassadorRow
                  name='Jacques Moundekeno'
                  email='uxdesign@email.com'
                  country='Sénégal'
                  count='20'
                  profile='En emploi'
                />
              </tbody>
            </table>
            <div className='flex justify-between items-center mt-8'>
              <button className='bg-[#D67D29] text-white font-black py-3 px-10 rounded-xl text-lg hover:brightness-110 active:scale-95 transition-all shadow-lg'>
                Ajouter un ambassadeur
              </button>
              <Pagination />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// --- COMPOSANTS DE STRUCTURE ---
const SectionHeader = ({ label, filters }) => (
  <div className='mb-6'>
    <div className='flex justify-between items-center mb-6'>
      <h3 className='text-[#D67D29] text-sm font-bold tracking-tight'>
        {label}
      </h3>
      <button className='bg-[#D67D29] text-white text-[11px] font-bold py-2 px-5 rounded-md flex items-center gap-2 uppercase'>
        <FontAwesomeIcon icon={faFileExport} /> Exporter
      </button>
    </div>
    <div className='bg-white rounded-lg p-1.5 flex flex-wrap items-center gap-2'>
      <div className='relative flex-1 min-w-[200px] border border-gray-100 rounded-md'>
        <FontAwesomeIcon
          icon={faSearch}
          className='absolute left-3 top-1/2 -translate-y-1/2 text-[#D67D29] text-sm'
        />
        <input
          type='text'
          placeholder='Mot - clé'
          className='w-full pl-10 pr-4 py-2 text-gray-800 text-sm focus:outline-none bg-transparent'
        />
      </div>
      {filters.map((f, i) => (
        <div
          key={i}
          className='text-gray-500 text-[13px] px-4 border-l border-gray-200 cursor-pointer flex items-center gap-3'
        >
          {f}{' '}
          <FontAwesomeIcon
            icon={faChevronDown}
            className='text-[10px] text-gray-400'
          />
        </div>
      ))}
    </div>
  </div>
)

const TableRow = ({ data }) => (
  <tr className='border-b border-white/5 hover:bg-white/[0.02] transition-colors'>
    {data.map((cell, i) => (
      <td
        key={i}
        className={`py-5 ${
          i === 0 ? 'font-black text-white' : 'text-white/70'
        }`}
      >
        {cell}
      </td>
    ))}
    <td className='py-5 text-right'>
      <button className='border border-[#D67D29] text-[#D67D29] text-[10px] font-bold px-4 py-1 rounded-md hover:bg-[#D67D29] hover:text-white transition-all uppercase'>
        Actions
      </button>
    </td>
  </tr>
)

const AmbassadorRow = ({ name, email, country, count, profile }) => (
  <tr className='border-b border-white/5 hover:bg-white/[0.02]'>
    <td className='py-5'>
      <div className='font-black text-white'>{name}</div>
      <div className='text-[11px] text-[#D67D29] font-medium'>{email}</div>
    </td>
    <td className='py-5 text-white/70'>{country}</td>
    <td className='py-5'>
      <div className='flex items-center gap-2'>
        <span className='border border-white/20 rounded-full px-3 py-0.5 text-[10px] text-white/60'>
          Parrainages
        </span>
        <span className='bg-white text-black font-black px-3 py-0.5 rounded-full text-[11px]'>
          {count}
        </span>
      </div>
    </td>
    <td className='py-5 text-white/70'>{profile}</td>
    <td className='py-5 text-right'>
      <button className='border border-[#D67D29] text-[#D67D29] text-[10px] font-bold px-4 py-1 rounded-md uppercase'>
        Actions
      </button>
    </td>
  </tr>
)

const Pagination = () => (
  <div className='flex items-center justify-end gap-1.5 mt-6'>
    <span className='text-[10px] font-bold text-gray-500 uppercase mr-2 tracking-widest'>
      Pages
    </span>
    {[1, 2, 3].map((n) => (
      <button
        key={n}
        className={`w-8 h-8 rounded flex items-center justify-center text-[11px] font-bold transition-all ${
          n === 1
            ? 'bg-[#D67D29] text-white shadow-lg'
            : 'bg-white/5 text-gray-400 hover:bg-white/10'
        }`}
      >
        {n}
      </button>
    ))}
    <span className='px-1 text-gray-600'>...</span>
    <button className='bg-white/5 text-gray-400 w-8 h-8 rounded text-[11px] font-bold'>
      12
    </button>
  </div>
)

export default UsersManagement
