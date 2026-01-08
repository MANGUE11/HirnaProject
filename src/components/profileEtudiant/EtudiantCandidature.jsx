import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import SchoolCard from '../SchoolCard'

const EtudiantCandidature = () => {
  const [selectedCandidature, setSelectedCandidature] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Données statiques pour simuler 10 candidatures
  const candidaturesData = Array(10).fill({
    name: 'Université Cheikh Anta Diop',
    type: 'LICENCE Data Analyst',
    location: 'Dakar, Sénégal',
    offersCount: '1',
    publishedDate: '03 Décembre 2025',
    status: 'en attente',
    logo: 'https://via.placeholder.com/150',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400',
  })

  return (
    <div className='flex flex-col gap-8 animate-fadeIn'>
      {/* --- HEADER & RECHERCHE --- */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-white'>Mes Candidatures</h1>
        <div className='relative w-64'>
          <input
            type='text'
            placeholder='Rechercher une candidature...'
            className='w-full bg-white rounded-full py-2 px-4 pr-10 text-xs italic text-black focus:outline-none'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'
          />
        </div>
      </div>

      {/* --- GRILLE DES CANDIDATURES (Max 10) --- */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {candidaturesData.map((item, index) => (
          <div
            key={index}
            className='relative cursor-pointer hover:scale-[1.02] transition-transform'
            onClick={() => setSelectedCandidature(item)}
          >
            {/* Badge de statut superposé */}
            <div className='absolute top-4 right-4 z-20 bg-[#D67D29] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase italic shadow-lg'>
              {item.status}
            </div>
            <SchoolCard {...item} />
          </div>
        ))}
      </div>

      {/* --- PAGINATION --- */}
      <div className='flex justify-center items-center gap-4 mt-8 mb-12'>
        <button className='p-2 text-white hover:text-[#D67D29]'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className='bg-[#D67D29] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold'>
          1
        </span>
        <button className='p-2 text-white hover:text-[#D67D29] font-bold'>
          2
        </button>
        <button className='p-2 text-white hover:text-[#D67D29]'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* --- POP-UP DÉTAILS (MODAL) --- */}
      {selectedCandidature && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'>
          <div className='bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl animate-scaleIn'>
            {/* Header du Modal */}
            <div className='p-6 flex justify-between items-start'>
              <div>
                <h2 className='text-[#D67D29] text-2xl font-bold'>
                  Demande de candidature
                </h2>
                <span className='bg-[#D67D29] text-white text-xs px-3 py-1 rounded-md font-bold mt-2 inline-block'>
                  en attente
                </span>
                <p className='text-gray-600 text-sm mt-3'>
                  Votre candidature est en cours d’examen par l’établissement.{' '}
                  <br />
                  Vous recevrez une notification dès qu’une décision sera prise.
                </p>
              </div>
              <button
                onClick={() => setSelectedCandidature(null)}
                className='text-[#D67D29] text-2xl hover:scale-110 transition-transform'
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Corps du Modal (Fond Bleu Nuit) */}
            <div className='mx-6 mb-6 bg-[#100F20] rounded-2xl p-6 text-white'>
              <h4 className='text-[#D67D29] font-bold mb-4'>
                Informations de la candidature
              </h4>

              <div className='flex gap-4 items-center mb-6'>
                <div className='w-16 h-16 bg-white rounded-xl p-1 shrink-0'>
                  <img
                    src='https://via.placeholder.com/150'
                    alt='Logo'
                    className='w-full h-full object-contain'
                  />
                </div>
                <div>
                  <span className='text-[#D67D29] text-xs font-bold uppercase tracking-widest'>
                    LICENCE
                  </span>
                  <h3 className='text-xl font-bold'>Data Analyst</h3>
                  <p className='text-gray-400 text-xs italic'>
                    Université Cheikh Anta Diop de Dakar
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                <section>
                  <h5 className='text-[#D67D29] text-sm font-bold mb-1'>
                    Présentation
                  </h5>
                  <p className='text-[11px] leading-relaxed text-gray-300 text-justify'>
                    Le Data Analyst (ou analyste de données) est le
                    professionnel chargé de collecter, nettoyer, analyser et
                    interpréter les données afin d'aider une organisation à
                    prendre des décisions éclairées.
                  </p>
                </section>

                <section>
                  <h5 className='text-[#D67D29] text-sm font-bold mb-1'>
                    Conditions d’admission (prérequis)
                  </h5>
                  <p className='text-[11px] text-gray-300'>
                    <span className='font-bold'>
                      Bac +2 minimum en informatique
                    </span>
                    , statistiques, mathématiques, économie, gestion, ou
                    équivalent.
                  </p>
                </section>

                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div className='bg-white rounded-xl p-3 text-[#100F20] text-[10px] space-y-1'>
                    <p>
                      • <span className='font-bold'>Durée :</span> 4 ans
                    </p>
                    <p>
                      • <span className='font-bold'>Langue :</span> Français &
                      Anglais
                    </p>
                    <p>
                      • <span className='font-bold'>Frais de scolarité :</span>
                    </p>
                    <p className='pl-3'> (années 1-2): €4000</p>
                    <p>
                      • <span className='font-bold'>Localisation :</span> Dakar,
                      Sénégal
                    </p>
                    <p>
                      • <span className='font-bold'>Rentrée :</span> 03 Décembre
                      2025
                    </p>
                  </div>
                  <div className='bg-white rounded-xl p-3 text-[#100F20] text-[10px] space-y-1'>
                    <p className='font-bold text-[#D67D29]'>
                      Domaines du programme
                    </p>
                    <ol className='list-decimal pl-3'>
                      <li>Analyse de données</li>
                      <li>Programmation et Outils Data</li>
                    </ol>
                    <p className='font-bold mt-2'>Modes d'étude</p>
                    <p>• Temps plein</p>
                    <p className='font-bold mt-2'>Bourses associées</p>
                    <p>• Pas disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer du Modal */}
            <div className='p-4 flex justify-center gap-4'>
              <button className='bg-[#D67D29] text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-[#b5661a]'>
                offres similaires
              </button>
              <button className='bg-[#100F20] text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-black'>
                voir la fiche
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EtudiantCandidature
