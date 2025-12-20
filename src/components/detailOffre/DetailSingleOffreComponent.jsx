import React from 'react'

const DetailSingleOffreComponent = () => {
  return (
    <div className='bg-[#100F20] text-white p-4 md:p-8 font-sans min-h-screen pt-24'>
      {' '}
      {/* pt-24 pour l'espace menu top */}
      <div className='max-w-4xl bg-[#191536] mx-auto border border-gray-800 rounded-2xl p-6 shadow-2xl mt-10'>
        {/* HEADER : Titre et Logo */}
        <div className='flex flex-col md:flex-row justify-between items-start mb-6'>
          <div className='flex gap-4'>
            <div className='bg-white p-2 w-20 h-20 flex items-center justify-center rounded-sm'>
              <img
                src='/images/orange-logo.png'
                alt='Orange Logo'
                className='w-full object-contain'
              />
            </div>
            <div>
              <h1 className='text-3xl font-bold'>Développeur Web</h1>
              <p className='text-gray-400 uppercase font-semibold'>
                ORANGE SENEGAL
              </p>
              <div className='flex gap-4 mt-2 text-[10px] text-gray-400 italic'>
                <span>Publié le : 15/10/2025</span>
                <span>Date limite : 31/11/2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* INFO BAR : Contrat, Expérience, etc. */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-[11px] border-b border-gray-700 pb-6 mb-6'>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-file-contract text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Contrat :</strong> CDI
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-briefcase text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Expérience :</strong> 01-03 ans
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Lieu :</strong> Conakry
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-clock text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Horaires :</strong> 08h - 17h
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-graduation-cap text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Niveau d'études :</strong> Bac +4
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-money-bill-wave text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Salaire :</strong> À négocier
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-laptop-house text-[#c76e1e]'></i>{' '}
            <span>
              <strong>Télétravail :</strong> Possible
            </span>
          </div>
        </div>

        {/* ACTIONS BUTTONS : BANDE ORANGE SANS RADIUS */}
        <div className='grid grid-cols-3 gap-4 mb-10 bg-[#c76e1e] p-5 rounded-none'>
          <button className='bg-transparent border border-white hover:bg-white hover:text-[#c76e1e] py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all'>
            Postuler <i className='fa-solid fa-paper-plane text-xs'></i>
          </button>
          <button className='bg-white text-black hover:bg-gray-200 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all'>
            Sauvegarder <i className='fa-regular fa-bookmark text-xs'></i>
          </button>
          <button className='bg-transparent border border-white text-white hover:bg-white hover:text-[#c76e1e] py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all'>
            Partager <i className='fa-solid fa-share-nodes text-xs'></i>
          </button>
        </div>

        {/* COMPETENCES ET MISSIONS */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-10'>
          <div>
            <h3 className='text-[#c76e1e] font-bold mb-3 uppercase italic'>
              Compétences essentielles
            </h3>
            <ul className='text-[11px] text-gray-300 space-y-1'>
              <li>1. Langages de programmation</li>
              <li>2. Frameworks & bibliothèques</li>
              <li>3. Outils et technologies</li>
              <li>4. Hébergement et serveurs</li>
              <li>5. Compétences en conception</li>
              <li>6. Compétences analytiques et organisationnelles</li>
            </ul>
          </div>
          <div>
            <h3 className='text-[#c76e1e] font-bold mb-3 uppercase italic'>
              Missions principales
            </h3>
            <ol className='text-[11px] text-gray-300 space-y-2'>
              <li>1. Concevoir, développer et maintenir des sites web.</li>
              <li>2. Intégrer des maquettes graphiques (Figma, Adobe XD).</li>
              <li>3. Développer des fonctionnalités back-end.</li>
            </ol>
          </div>
        </div>

        {/* TABS SELECTOR : BANDE SANS RADIUS */}
        <div className='flex mb-8 rounded-none overflow-hidden'>
          <button className='flex-1 bg-[#c76e1e] py-3 font-bold text-sm uppercase rounded-none'>
            Le poste
          </button>
          <button className='flex-1 bg-[#c76e1e] py-3 font-bold text-sm uppercase border-l border-[#100F20] rounded-none'>
            L'entreprise
          </button>
        </div>

        {/* DESCRIPTION ET GALERIE STATS */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='space-y-8'>
            <div>
              <h4 className='text-[#c76e1e] font-bold mb-3 uppercase italic'>
                Description du poste
              </h4>
              <p className='text-[11px] leading-relaxed text-gray-300 text-justify'>
                Le Développeur Web est responsable de la conception, du
                développement et de la maintenance...
              </p>
            </div>
            <div>
              <h4 className='text-[#c76e1e] font-bold mb-3 uppercase italic'>
                Profil recherché
              </h4>
              <ul className='text-[11px] text-gray-300 space-y-2'>
                <li className='flex gap-2'>
                  <span>•</span> Formation en informatique.
                </li>
                <li className='flex gap-2'>
                  <span>•</span> Première expérience en développement.
                </li>
              </ul>
            </div>
          </div>

          {/* GALERIE PHOTO + BANDE STATS SANS RADIUS */}
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-12'>
              <img
                src='/images/formation.png'
                alt='Formation'
                className='w-full h-40 object-cover rounded-none'
              />
            </div>

            <div className='col-span-5 flex flex-col gap-2'>
              <img
                src='/images/formation.png'
                alt='F'
                className='w-full h-20 object-cover rounded-none'
              />
              <img
                src='/images/formation.png'
                alt='F'
                className='w-full h-24 object-cover rounded-none'
              />
              <img
                src='/images/formation.png'
                alt='F'
                className='w-full h-24 object-cover rounded-none'
              />
            </div>

            {/* BANDE STATS ORANGE SANS RADIUS */}
            <div className='col-span-7 bg-[#c76e1e] p-4 flex flex-col justify-around text-center border-l border-[#100F20] rounded-none'>
              <div className='border-b border-white/20 pb-2'>
                <i className='fa-solid fa-calendar-days text-sm mb-1'></i>
                <p className='text-[9px] font-bold uppercase'>
                  Année de création
                </p>
                <p className='text-[10px]'>1985</p>
              </div>
              <div className='border-b border-white/20 py-2'>
                <i className='fa-solid fa-users text-sm mb-1'></i>
                <p className='text-[10px]'>10.000 employés</p>
              </div>
              <div className='border-b border-white/20 py-2'>
                <i className='fa-solid fa-users text-sm mb-1'></i>
                <p className='text-[10px]'>10.000 employés</p>
              </div>
              <div className='pt-2'>
                <i className='fa-solid fa-people-group text-sm mb-1'></i>
                <p className='text-[10px]'>♀ 40% | ♂ 60%</p>
              </div>
            </div>

            {/* RS ET BOUTON DECOUVRIR ALIGNÉS À GAUCHE */}
            <div className='col-span-12 flex flex-col items-start mt-4 gap-4'>
              {/* Bloc Partager : Fond bleu, icônes agrandies */}
              <div className='flex items-center gap-4 bg-[#c76e1e] border border-gray-700 px-6 py-2.5 rounded-full'>
                <span className='text-[12px] font-bold uppercase tracking-wider'>
                  Partager
                </span>
                <div className='flex gap-4'>
                  <i className='fa-brands fa-linkedin text-lg cursor-pointer hover:text-[#c76e1e] transition-colors'></i>
                  <i className='fa-brands fa-facebook text-lg cursor-pointer hover:text-[#c76e1e] transition-colors'></i>
                  <i className='fa-brands fa-youtube text-lg cursor-pointer hover:text-[#c76e1e] transition-colors'></i>
                </div>
              </div>

              {/* Bouton Découvrir : Bordure Orange, aligné gauche */}
              <button className='border-2 border-[#c76e1e] text-white px-10 py-2 rounded-full text-[12px] font-bold hover:bg-[#c76e1e] transition-all uppercase'>
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER : BOUTONS ARRONDI */}
        <div className='mt-20 text-center border-t border-gray-800 pt-10'>
          <h3 className='text-lg font-bold mb-6'>
            Cette offre vous intéresse ?
          </h3>
          <div className='flex justify-center gap-4'>
            <button className='bg-[#c76e1e] px-12 py-2 rounded-full font-bold'>
              Postuler
            </button>
            <button className='border border-white px-12 py-2 rounded-full font-bold'>
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSingleOffreComponent
