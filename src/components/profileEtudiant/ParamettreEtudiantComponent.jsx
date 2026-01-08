import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faLock,
  faUserSlash,
  faSignOutAlt,
  faEye,
  faChevronRight,
  faChevronDown,
  faKey,
} from '@fortawesome/free-solid-svg-icons'

const ParametreEtudiantComponent = () => {
  // États pour les boutons radio / toggles
  const [notifications, setNotifications] = useState({
    candidature: false,
    messages: true,
    opportunites: true,
    deadlines: true,
    recompenses: true,
    visibilite: false,
  })

  const toggleSwitch = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Composant Switch personnalisé
  const Switch = ({ isOn, handleToggle, id }) => (
    <div
      onClick={() => handleToggle(id)}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-[#D67D29]' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </div>
  )

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn pb-10'>
      {/* --- COLONNE GAUCHE : CANAUX DE NOTIFICATION --- */}
      <div className='bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6'>
        <div className='flex items-center gap-3 mb-2'>
          <div className='bg-[#D67D29] p-2 rounded-lg'>
            <FontAwesomeIcon icon={faBell} className='text-white text-sm' />
          </div>
          <div>
            <h3 className='font-bold text-[#100F20] text-lg'>
              Canaux de notification
            </h3>
            <p className='text-[10px] text-gray-500'>
              Choisissez comment vous souhaitez être notifié
            </p>
          </div>
        </div>

        <div className='space-y-6'>
          {[
            {
              id: 'candidature',
              title: 'Mises à jour de candidature',
              desc: 'Candidature envoyée, reçue ou statut modifié',
            },
            {
              id: 'messages',
              title: 'Messages',
              desc: 'Messages des écoles et entreprises',
            },
            {
              id: 'opportunites',
              title: 'Opportunités recommandées',
              desc: 'Nouvelles offres correspondant à votre profil',
            },
            {
              id: 'deadlines',
              title: 'Deadlines proches',
              desc: 'Rappels J-3 et J-1 avant expiration',
            },
            {
              id: 'recompenses',
              title: 'Récompenses ambassadeurs',
              desc: 'Notifications de gains et parrainages',
            },
          ].map((item) => (
            <div
              key={item.id}
              className='border-b border-gray-100 pb-4 last:border-0'
            >
              <div className='flex justify-between items-start mb-1'>
                <h4 className='font-bold text-sm text-[#100F20]'>
                  {item.title}
                </h4>
              </div>
              <p className='text-[10px] text-gray-500 mb-3'>{item.desc}</p>
              <Switch
                isOn={notifications[item.id]}
                handleToggle={toggleSwitch}
                id={item.id}
              />
            </div>
          ))}

          <div className='flex justify-between items-center pt-2'>
            <span className='text-sm font-bold text-[#100F20]'>
              Flux des e-mails
            </span>
            <div className='bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 flex items-center gap-4 cursor-pointer'>
              <span className='text-[10px] text-gray-500'>3 fois par jour</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-gray-400 text-[10px]'
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- COLONNE DROITE : SÉCURITÉ & VISIBILITÉ --- */}
      <div className='flex flex-col gap-6'>
        {/* BLOC SÉCURITÉ */}
        <div className='bg-white rounded-2xl p-8 shadow-sm'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='bg-[#D67D29] p-2 rounded-lg'>
              <FontAwesomeIcon icon={faLock} className='text-white text-sm' />
            </div>
            <div>
              <h3 className='font-bold text-[#100F20] text-lg'>Sécurité</h3>
              <p className='text-[10px] text-gray-500'>
                Configurer vos paramètres de sécurité
              </p>
            </div>
          </div>

          <div className='space-y-8'>
            <div className='flex justify-between items-center group cursor-pointer'>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon
                  icon={faKey}
                  className='text-[#D67D29] text-xs'
                />
                <div>
                  <h4 className='font-bold text-sm text-[#100F20]'>
                    Changer de mot de passe
                  </h4>
                  <p className='text-[9px] text-gray-400 w-48'>
                    Assurez-vous que votre nouveau mot de passe est unique et
                    difficile à deviner.
                  </p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className='text-[#D67D29] group-hover:translate-x-1 transition-transform'
              />
            </div>

            <div className='flex justify-between items-center pt-4 border-t border-gray-50'>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon
                  icon={faUserSlash}
                  className='text-[#D67D29] text-xs'
                />
                <div>
                  <h4 className='font-bold text-sm text-[#100F20]'>
                    Supprimer le compte
                  </h4>
                  <p className='text-[9px] text-gray-400 w-48'>
                    Cette action est définitive et entraînera la suppression de
                    toutes vos données.
                  </p>
                </div>
              </div>
              <button className='bg-[#DC2626] text-white text-[9px] font-bold px-3 py-1.5 rounded-md uppercase italic shadow-sm hover:bg-red-700 transition-colors'>
                Supprimer
              </button>
            </div>

            <div className='flex justify-between items-center pt-4'>
              <div>
                <h4 className='font-bold text-sm text-[#100F20]'>
                  Sections actives
                </h4>
                <p className='text-[10px] text-gray-500'>
                  1 section active - chrome IMAC
                </p>
              </div>
              <button className='bg-[#D67D29] text-white text-[9px] font-bold px-3 py-1.5 rounded-md flex items-center gap-2'>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Deconnexion
              </button>
            </div>
          </div>
        </div>

        {/* BLOC VISIBILITÉ */}
        <div className='bg-white rounded-2xl p-8 shadow-sm'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='bg-[#D67D29] p-2 rounded-lg'>
              <FontAwesomeIcon icon={faEye} className='text-white text-sm' />
            </div>
            <h3 className='font-bold text-[#100F20] text-lg'>Visibilité</h3>
          </div>

          <div className='border-t border-gray-100 pt-6'>
            <p className='text-[11px] font-bold text-[#100F20] mb-4'>
              Mon profil ne sera pas visible aux établissements et aux
              entreprises
            </p>
            <Switch
              isOn={notifications.visibilite}
              handleToggle={toggleSwitch}
              id='visibilite'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParametreEtudiantComponent
