import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faBriefcase,
  faGraduationCap,
  faTrashAlt,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

const EtudiantNotification = () => {
  // Données statiques pour la démo
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Candidature Acceptée',
      message:
        'Félicitations ! Votre candidature pour "Licence Data Analyst" a été acceptée par l\'UCAD.',
      time: 'Il y a 10 min',
      isRead: false,
      category: 'candidature',
      icon: faCheckCircle,
    },
    {
      id: 2,
      type: 'info',
      title: 'Nouveau Message',
      message:
        "L'Université de Marrakech vous a envoyé un nouveau message concernant votre dossier.",
      time: 'Il y a 2 heures',
      isRead: false,
      category: 'message',
      icon: faInfoCircle,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Deadline Proche',
      message:
        "Attention, l'offre de stage chez Orange Sénégal expire dans 24 heures.",
      time: 'Hier, à 15:30',
      isRead: true,
      category: 'deadline',
      icon: faExclamationTriangle,
    },
    {
      id: 4,
      type: 'job',
      title: 'Nouvelle Offre Recommandée',
      message:
        'Une nouvelle offre de "Développeur Web" correspond à votre profil.',
      time: 'Il y a 2 jours',
      isRead: true,
      category: 'opportunite',
      icon: faBriefcase,
    },
  ]

  return (
    <div className='max-w-4xl mx-auto flex flex-col gap-6 animate-fadeIn pb-10'>
      {/* --- HEADER --- */}
      <div className='flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10'>
        <div>
          <h1 className='text-2xl font-bold text-white flex items-center gap-3'>
            <FontAwesomeIcon icon={faBell} className='text-[#D67D29]' />
            Notifications
          </h1>
          <p className='text-gray-400 text-xs mt-1'>
            Vous avez 2 notifications non lues
          </p>
        </div>
        <button className='text-[10px] font-bold text-[#D67D29] uppercase tracking-wider hover:underline'>
          Tout marquer comme lu
        </button>
      </div>

      {/* --- LISTE DES NOTIFICATIONS --- */}
      <div className='space-y-4'>
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`relative flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${
              notif.isRead
                ? 'bg-white/5 border-white/5 opacity-80'
                : 'bg-white border-transparent shadow-xl'
            }`}
          >
            {/* Icône de catégorie */}
            <div
              className={`p-3 rounded-xl shrink-0 ${
                notif.isRead
                  ? 'bg-white/10 text-gray-400'
                  : 'bg-[#191536] text-[#D67D29]'
              }`}
            >
              <FontAwesomeIcon icon={notif.icon} />
            </div>

            {/* Contenu */}
            <div className='flex-1'>
              <div className='flex justify-between items-start'>
                <h4
                  className={`text-sm font-bold ${
                    notif.isRead ? 'text-gray-400' : 'text-[#100F20]'
                  }`}
                >
                  {notif.title}
                </h4>
                <span className='text-[10px] text-gray-500 italic'>
                  {notif.time}
                </span>
              </div>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  notif.isRead ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                {notif.message}
              </p>
            </div>

            {/* Indicateur Non lu */}
            {!notif.isRead && (
              <div className='absolute top-5 right-5'>
                <FontAwesomeIcon
                  icon={faCircle}
                  className='text-[#D67D29] text-[8px]'
                />
              </div>
            )}

            {/* Action de suppression au survol */}
            <button className='text-gray-300 hover:text-red-500 transition-colors ml-2'>
              <FontAwesomeIcon icon={faTrashAlt} className='text-xs' />
            </button>
          </div>
        ))}
      </div>

      {/* --- VOIR PLUS --- */}
      <button className='w-full py-4 rounded-xl border border-dashed border-white/20 text-white/50 text-xs font-bold hover:bg-white/5 transition-all'>
        Charger les notifications plus anciennes
      </button>
    </div>
  )
}

export default EtudiantNotification
