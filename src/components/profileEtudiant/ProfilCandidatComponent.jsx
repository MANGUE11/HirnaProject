import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faDotCircle,
  faTimes,
  faChevronDown,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const ProfilCandidatComponent = () => {
  const [activeModal, setActiveModal] = useState(null)

  const handleOpenModal = (section) => setActiveModal(section)
  const closeModal = () => setActiveModal(null)

  const sections = [
    {
      id: 'perso',
      title: 'Informations personnelles',
      subtitle: 'Aissatou Diallo',
      details: true,
      status: 'Complet',
    },
    {
      id: 'docs',
      title: 'Présentation & Documents',
      subtitle: 'Bio, Relevés...',
      details: false,
      status: 'Incomplet',
    },
    {
      id: 'acad',
      title: 'Profil académique & professionnel',
      subtitle: 'Diplômes, certifications...',
      details: false,
      status: 'Incomplet',
    },
    {
      id: 'exp',
      title: 'Expériences',
      subtitle: 'CV, Expériences professionnelles',
      details: false,
      status: 'Incomplet',
    },
    {
      id: 'comp',
      title: 'Compétences & Intérêts',
      subtitle: "Décrivez vos centres d'intérêts",
      details: false,
      status: 'Incomplet',
    },
    {
      id: 'param',
      title: 'Paramètres & confidentialité',
      subtitle: 'Tes données et tes conversations',
      details: false,
      status: 'Complet',
    },
  ]

  // --- COMPOSANT MODAL GÉNÉRIQUE ---
  const ModalLayout = ({ title, children }) => (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'>
      <div className='bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-scaleIn'>
        <div className='flex justify-between items-center p-6'>
          <h2 className='text-[#D67D29] text-2xl font-bold'>{title}</h2>
          <button
            onClick={closeModal}
            className='text-[#D67D29] text-2xl hover:scale-110 transition-transform'
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className='p-6 pt-0 max-h-[80vh] overflow-y-auto'>
          <div className='bg-[#191536] rounded-2xl p-6 text-white'>
            {children}
          </div>
          <div className='flex justify-center gap-4 mt-6'>
            <button className='bg-[#D67D29] text-white px-8 py-2 rounded-lg font-bold hover:bg-[#b56922] transition-colors'>
              Enregistrer
            </button>
            <button
              onClick={closeModal}
              className='bg-[#E11D48] text-white px-8 py-2 rounded-lg font-bold hover:bg-[#be183d] transition-colors'
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className='flex flex-col gap-6 animate-fadeIn px-2 md:px-0 relative'>
      {/* --- RENDER DES MODALS --- */}
      {/* --- MODALE INFORMATIONS PERSONNELLES (PERSO) --- */}
      {activeModal === 'perso' && (
        <ModalLayout title='Informations personnelles'>
          <div className='flex flex-col md:flex-row gap-6 items-start'>
            {/* ZONE PHOTO DE PROFIL */}
            <div className='flex flex-col items-center gap-2 shrink-0'>
              <label
                htmlFor='profile-upload'
                className='cursor-pointer group relative'
              >
                <div className='bg-[#D67D29] w-32 h-32 rounded-xl flex items-center justify-center text-4xl font-bold overflow-hidden shadow-lg border-2 border-white/10'>
                  {/* Si aucune image n'est sélectionnée, on affiche les initiales */}
                  <span className='group-hover:hidden transition-all'>AD</span>
                  {/* Overlay au survol pour indiquer qu'on peut changer la photo */}
                  <div className='absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center text-sm font-medium'>
                    Changer
                  </div>
                </div>
                <input
                  id='profile-upload'
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={(e) =>
                    console.log('Fichier sélectionné :', e.target.files[0])
                  }
                />
              </label>
              <p className='text-[10px] text-gray-400 italic'>
                Cliquez pour modifier la photo
              </p>
            </div>

            {/* FORMULAIRE */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-xs font-semibold text-[#D67D29]'>
              <div className='flex flex-col gap-2'>
                Prénom *{' '}
                <input
                  className='bg-[#100F20] border-none rounded-lg p-3 text-white focus:ring-1 focus:ring-[#D67D29] outline-none'
                  defaultValue='Aissatou'
                />
              </div>
              <div className='flex flex-col gap-2'>
                Nom *{' '}
                <input
                  className='bg-[#100F20] border-none rounded-lg p-3 text-white focus:ring-1 focus:ring-[#D67D29] outline-none'
                  defaultValue='Diallo'
                />
              </div>
              <div className='flex flex-col gap-2'>
                Adresse mail *{' '}
                <input
                  className='bg-[#100F20] border-none rounded-lg p-3 text-white focus:ring-1 focus:ring-[#D67D29] outline-none'
                  defaultValue='aminata.diallo@email.com'
                />
              </div>
              <div className='flex flex-col gap-2'>
                Numéro de téléphone
                <div className='flex bg-[#100F20] rounded-lg p-3 gap-2 items-center text-white'>
                  <span className='text-lg'>🇸🇳</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size='xs'
                    className='text-[#D67D29]'
                  />
                  <input
                    className='bg-transparent outline-none w-full ml-1'
                    defaultValue='+221 77 123 45 67'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                Pays
                <div className='bg-[#100F20] rounded-lg p-3 flex justify-between items-center text-white cursor-pointer'>
                  Sénégal
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className='text-[#D67D29]'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                Ville
                <input
                  className='bg-[#100F20] border-none rounded-lg p-3 text-white focus:ring-1 focus:ring-[#D67D29] outline-none'
                  defaultValue='Dakar'
                />
              </div>
              <div className='flex flex-col gap-2 md:col-span-2'>
                Statut *{' '}
                <div className='bg-[#100F20] rounded-lg p-3 flex justify-between items-center text-white cursor-pointer'>
                  Sélectionner votre statut
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className='text-[#D67D29]'
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalLayout>
      )}

      {activeModal === 'docs' && (
        <ModalLayout title='Présentation & Documents'>
          <div className='flex flex-col gap-4 text-xs font-semibold text-[#D67D29]'>
            <div className='flex flex-col gap-2'>
              Contact{' '}
              <input
                className='bg-[#100F20] border-none rounded-lg p-3 text-white'
                placeholder='Ex : +221 6XX XXX XXX'
              />
            </div>
            <div className='flex flex-col gap-2'>
              Ajouter votre CV{' '}
              <div className='bg-white rounded-lg p-3 flex justify-between items-center text-gray-400 font-normal italic'>
                Veuillez ajouter votre CV{' '}
                <div className='flex items-center gap-1 text-[10px] text-[#D67D29] not-italic'>
                  Optionnel <FontAwesomeIcon icon={faPlusCircle} />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              Certificats / Relevés de notes{' '}
              <div className='bg-white rounded-lg p-3 flex justify-between items-center text-gray-400 font-normal italic'>
                Veuillez entrer vos documents{' '}
                <div className='flex items-center gap-1 text-[10px] text-[#D67D29] not-italic'>
                  Optionnel <FontAwesomeIcon icon={faPlusCircle} />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              Bio courte / présentation personnelle{' '}
              <textarea
                className='bg-white border-none rounded-lg p-3 text-gray-800 min-h-[100px]'
                placeholder='Parlez de vous max. 500 caractères'
              />
            </div>
            <div className='flex flex-col gap-2'>
              Lien externe{' '}
              <input
                className='bg-white border-none rounded-lg p-3 text-gray-800'
                placeholder='Collez vos liens ici'
              />
            </div>
          </div>
        </ModalLayout>
      )}

      {activeModal === 'acad' && (
        <ModalLayout title='Profil académique'>
          <div className='flex flex-col gap-4 text-xs font-semibold text-[#D67D29]'>
            <div className='flex flex-col gap-2'>
              Niveau d'études actuel{' '}
              <div className='bg-white rounded-lg p-3 flex justify-between items-center text-gray-800'>
                Master en Intelligence Artificielle{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='text-[#D67D29]'
                />
              </div>
            </div>
            <div className='bg-[#100F20] p-4 rounded-xl border border-white/10 relative'>
              <div className='flex justify-between items-start'>
                <div>
                  <h4 className='text-white text-lg font-bold'>
                    Licence en Informatique
                  </h4>
                  <p className='text-[#D67D29]'>
                    Université Privée de Marrakech
                  </p>
                  <p className='text-gray-400 text-[10px] mt-1'>
                    De 15 Janvier 2021 - 25 Décembre 2025 | MARRAKECH - Maroc
                  </p>
                </div>
                <div className='flex gap-4 text-white text-[10px]'>
                  <button className='flex items-center gap-1'>
                    <FontAwesomeIcon icon={faEdit} className='text-[#D67D29]' />{' '}
                    Modifier
                  </button>
                  <button className='flex items-center gap-1'>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className='text-[#D67D29]'
                    />{' '}
                    Supprimer
                  </button>
                </div>
              </div>
              <div className='mt-4'>
                <p className='mb-2'>Description</p>
                <div className='bg-white h-20 rounded-lg w-full'></div>
              </div>
            </div>
            <button className='bg-[#D67D29] text-white py-2 rounded-lg font-bold mt-2'>
              Ajouter un parcours
            </button>
          </div>
        </ModalLayout>
      )}

      {activeModal === 'exp' && (
        <ModalLayout title='Expériences professionnelles'>
          <div className='bg-[#100F20] p-4 rounded-xl border border-white/10 text-xs font-semibold text-[#D67D29]'>
            <div className='flex justify-between items-start'>
              <div>
                <h4 className='text-white text-lg font-bold'>
                  Développeur web
                </h4>
                <p className='text-[#D67D29]'>Orange Sénégal</p>
                <p className='text-gray-400 text-[10px] mt-1'>
                  De 15 Janvier 2021 - 25 Décembre 2025 | MARRAKECH - Maroc
                </p>
              </div>
              <div className='flex gap-4 text-white text-[10px]'>
                <button className='flex items-center gap-1'>
                  <FontAwesomeIcon icon={faEdit} className='text-[#D67D29]' />{' '}
                  Modifier
                </button>
                <button className='flex items-center gap-1'>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className='text-[#D67D29]'
                  />{' '}
                  Supprimer
                </button>
              </div>
            </div>
            <div className='mt-4'>
              <p className='mb-2'>Description</p>
              <textarea
                className='bg-white rounded-lg w-full p-2 text-gray-800'
                placeholder='Ecrire une description'
              />
            </div>
          </div>
          <button className='bg-[#D67D29] text-white py-2 rounded-lg font-bold mt-4 w-full'>
            Ajouter une expérience
          </button>
        </ModalLayout>
      )}

      {activeModal === 'comp' && (
        <ModalLayout title='Compétences & Intérêts'>
          <div className='flex flex-col gap-4 text-xs font-semibold text-[#D67D29]'>
            <div className='flex flex-col gap-2'>
              Compétences principales
              <div className='bg-white p-3 rounded-lg flex flex-wrap gap-2 items-center'>
                {[
                  'HTML, CSS',
                  'Python',
                  'Master',
                  'Gestion base de données',
                ].map((t) => (
                  <span
                    key={t}
                    className='bg-[#D67D29] text-white px-3 py-1 rounded-full text-[10px]'
                  >
                    {t}
                  </span>
                ))}
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className='ml-auto cursor-pointer'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              Langues{' '}
              <div className='bg-white p-3 rounded-lg text-gray-800 flex justify-between items-center font-normal'>
                Français courant , Anglais débutant{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='text-[#D67D29]'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              Secteurs d'intérêt
              <div className='bg-white p-3 rounded-lg flex flex-wrap gap-2 items-center'>
                {['Informatique', 'Finance', 'Marketing', 'Art', 'SEO'].map(
                  (t) => (
                    <span
                      key={t}
                      className='bg-[#D67D29] text-white px-3 py-1 rounded-full text-[10px]'
                    >
                      {t}
                    </span>
                  )
                )}
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className='ml-auto cursor-pointer'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              Disponibilité{' '}
              <div className='bg-white p-3 rounded-lg text-gray-800 flex justify-between items-center font-normal'>
                Immédiate{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='text-[#D67D29]'
                />
              </div>
            </div>
          </div>
        </ModalLayout>
      )}

      {/* --- CONTENU PRINCIPAL DU PROFIL --- */}
      <div>
        <h1 className='text-white text-2xl md:text-3xl font-bold'>
          Profil Candidat
        </h1>
        <p className='text-gray-400 text-xs md:text-sm mt-1'>
          Gérer et compléter votre profil pour maximiser vos chances sur hirna
        </p>
      </div>

      <div className='bg-[#191536] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-[#D67D29] text-lg md:text-xl font-bold'>
            Profil incomplet
          </h2>
          <span className='text-white text-xs md:text-sm font-medium'>
            65% Complété
          </span>
        </div>
        <div className='w-full bg-white rounded-full h-2 md:h-3 mb-4'>
          <div
            className='bg-[#D67D29] h-full rounded-full'
            style={{ width: '65%' }}
          ></div>
        </div>
        <p className='text-white text-[11px] md:text-[13px] leading-relaxed'>
          Votre profil est complété à 25%...
        </p>
      </div>

      <div className='bg-[#191536] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-row items-center justify-between gap-4'>
        <div className='flex items-center gap-4 md:gap-6'>
          <div className='bg-[#D67D29] text-white font-bold text-xl md:text-2xl h-12 w-12 md:h-16 md:w-16 flex items-center justify-center rounded-xl shadow-lg shrink-0'>
            AD
          </div>
          <div className='min-w-0'>
            <h2 className='text-white text-lg md:text-2xl font-bold truncate'>
              Aminata Diallo
            </h2>
            <span className='bg-[#E11D48] text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-md uppercase mt-1 md:mt-2 inline-block'>
              Profil incomplet
            </span>
          </div>
        </div>
        <button
          onClick={() => handleOpenModal('perso')}
          className='text-[#D67D29] hover:scale-110 transition-transform p-2 shrink-0'
        >
          <FontAwesomeIcon icon={faEdit} className='text-xl md:text-2xl' />
        </button>
      </div>

      <div className='flex flex-col gap-3 md:gap-4'>
        {sections.map((sec) => (
          <div
            key={sec.id}
            onClick={() => handleOpenModal(sec.id)}
            className='bg-[#191536] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer hover:bg-[#201c45] transition-colors gap-4'
          >
            <div className='flex gap-3 md:gap-4'>
              <FontAwesomeIcon
                icon={faDotCircle}
                className='text-[#D67D29] mt-1 shrink-0'
              />
              <div className='min-w-0'>
                <h3 className='text-[#D67D29] font-bold text-base md:text-lg truncate'>
                  {sec.title}
                </h3>
                {sec.details ? (
                  <div className='mt-2 space-y-1.5'>
                    <p className='text-white font-bold text-xs md:text-sm'>
                      {sec.subtitle}
                    </p>
                    <div className='flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 text-gray-400 text-[10px] md:text-xs'>
                      <span className='flex items-center gap-1'>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className='text-[#D67D29]'
                        />{' '}
                        DAKAR, Sénégal
                      </span>
                      <span className='flex items-center gap-1'>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className='text-[#D67D29]'
                        />{' '}
                        aminata.diallo@email.com
                      </span>
                    </div>
                  </div>
                ) : (
                  <p className='text-gray-400 text-[10px] md:text-xs mt-1'>
                    {sec.subtitle}
                  </p>
                )}
              </div>
            </div>
            <span
              className={`self-start sm:self-center text-[8px] md:text-[10px] font-bold px-3 py-1 rounded-md uppercase shrink-0 ${
                sec.status === 'Complet'
                  ? 'bg-[#10B981] text-white'
                  : 'bg-[#E11D48] text-white'
              }`}
            >
              {sec.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfilCandidatComponent
