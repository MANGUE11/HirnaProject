import React, { useState } from 'react'
import SchoolHeaderCard from '../SchoolHeaderCard'
import JobCard from '../JobCard'

const DetailFormationHeroSection = () => {
  const [activeTab, setActiveTab] = useState('apropos')

  const schoolData = {
    name: 'Nom de Entreprise',
    tags: 'Santé, Ingénierie, Médecine, Technologies',
    location: 'ACCRA, Ghana',
    website: 'www.ghanauniversity',
    cover: '/images/formation.png',
    logo: '/images/formation.png',
    socials: {
      linkedin: 'https://linkedin.com/school/ghana-uni',
      facebook: 'https://facebook.com/ghana-uni',
      instagram: 'https://instagram.com/ghana-uni',
    },
  }

  const tabs = [
    { id: 'apropos', label: 'À propos' },
    { id: 'offres', label: "Offres d'emploi", badge: '2' },
    { id: 'temoignages', label: 'Témoignages' },
  ]

  const valeurs = [
    'Réactivité',
    'Respect des engagements',
    'Dépassement de soi',
    "Esprit d'équipe",
    "Engagement pour l'innovation",
  ]

  // Données Offres d'emploi
  const offresData = [
    {
      id: 1,
      logo: '/images/logo-ecobank.png',
      title: 'Développeur Web',
      company: 'ECOBANK',
      contract: 'CDI',
      experience: '2+ ans',
      location: 'Accra, Ghana',
      date: '15/10/2025',
    },
    {
      id: 2,
      logo: '/images/logo-ecobank.png',
      title: 'Assistante Com',
      company: 'ECOBANK',
      contract: 'CDI',
      experience: '1+ ans',
      location: 'Accra, Ghana',
      date: '15/10/2025',
    },
    {
      id: 3,
      logo: '/images/logo-ecobank.png',
      title: 'Comptable',
      company: 'ECOBANK',
      contract: 'CDI',
      experience: '3+ ans',
      location: 'Accra, Ghana',
      date: '10/10/2025',
    },
    {
      id: 4,
      logo: '/images/logo-ecobank.png',
      title: 'Assistante RH',
      company: 'ECOBANK',
      contract: 'CDI',
      experience: '2+ ans',
      location: 'Accra, Ghana',
      date: '10/10/2025',
    },
  ]

  // Données Témoignages
  const temoignagesData = [
    {
      id: 1,
      avatar: '/images/avatar-ousmane.jpg',
      name: 'Ousmane Kaba',
      role: 'Ingénieur chez CANAL+',
      rating: 4,
      text: "Grâce à cette plateforme, j'ai pu trouver une bourse d'étude complète pour poursuivre mon master à Dakar. Le processus était simple, rapide et très bien accompagné. Je recommande à tous les étudiants ambitieux ! »",
    },
    {
      id: 2,
      avatar: '/images/avatar-ousmane.jpg',
      name: 'Ousmane Kaba',
      role: 'Ingénieur chez CANAL+',
      rating: 3,
      text: "Grâce à cette plateforme, j'ai pu trouver une bourse d'étude complète pour poursuivre mon master à Dakar. Le processus était simple, rapide et très bien accompagné. Je recommande à tous les étudiants ambitieux ! »",
    },
    {
      id: 3,
      avatar: '/images/avatar-ousmane.jpg',
      name: 'Ousmane Kaba',
      role: 'Ingénieur chez CANAL+',
      rating: 4,
      text: "Grâce à cette plateforme, j'ai pu trouver une bourse d'étude complète pour poursuivre mon master à Dakar. Le processus était simple, rapide et très bien accompagné. Je recommande à tous les étudiants ambitieux ! »",
    },
  ]

  const [temoignagePage, setTemoignagePage] = useState(0)
  const [newTemoignage, setNewTemoignage] = useState({
    name: '',
    text: '',
    rating: 5,
  })

  return (
    <section className="bg-[#100F20] font-['Instrument_Sans'] pb-20 text-left">
      <SchoolHeaderCard
        schoolName={schoolData.name}
        tags={schoolData.tags}
        location={schoolData.location}
        website={schoolData.website}
        coverImage={schoolData.cover}
        logo={schoolData.logo}
        socialLinks={schoolData.socials}
      />

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8'>
        {/* Bande des onglets - style SchoolInfoTabsSection */}
        <div
          className='flex w-full p-2 rounded-t-xl'
          style={{
            background: 'linear-gradient(to right, #100F20, #433F86)',
          }}
        >
          <div className='flex gap-4 w-full md:w-fit md:mx-auto'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 md:w-40 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border ${
                  activeTab === tab.id
                    ? 'bg-hirna-orange text-white border-transparent shadow-lg'
                    : 'bg-[#191536] text-white border-white/20 hover:bg-[#191536]/80'
                }`}
              >
                {tab.label}
                {tab.badge && (
                  <span className='bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full'>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu À propos */}
        {activeTab === 'apropos' && (
          <div className='bg-[#191536] rounded-b-3xl p-6 border-x border-b border-white/10'>
            <div className='flex gap-4'>
              {/* Colonne gauche - Grande image en haut puis 3 images + bande orange */}
              <div className='w-2/5'>
                {/* Grande image en haut */}
                <div className='overflow-hidden mb-2'>
                  <img
                    src='/images/formation.png'
                    alt='Image'
                    className='w-full h-32 object-cover'
                  />
                </div>

                {/* Conteneur flex : 3 images empilées + bande orange */}
                <div className='flex gap-2'>
                  {/* 3 images empilées verticalement */}
                  <div className='flex-1 flex flex-col gap-2'>
                    <div className='overflow-hidden'>
                      <img
                        src='/images/formation.png'
                        alt='Image'
                        className='w-full object-cover flex-1'
                      />
                    </div>
                    <div className='overflow-hidden'>
                      <img
                        src='/images/formation.png'
                        alt='Image'
                        className='w-full object-cover flex-1'
                      />
                    </div>
                    <div className='overflow-hidden'>
                      <img
                        src='/images/formation.png'
                        alt='Image'
                        className='w-full object-cover flex-1'
                      />
                    </div>
                  </div>

                  {/* Bande orange verticale avec stats - agrandie, sans radius, tirets blancs */}
                  <div className='w-44 bg-hirna-orange p-3 flex flex-col justify-around'>
                    {/* Année de création */}
                    <div className='text-center'>
                      <i className='fa-solid fa-calendar text-white text-lg mb-1'></i>
                      <h4 className='text-[#100F20] font-bold text-xs'>
                        Année de création
                      </h4>
                      <p className='text-[#100F20] text-[10px]'>1985</p>
                    </div>

                    {/* Tiret blanc */}
                    <div className='border-t border-white my-2'></div>

                    {/* Nombre de salariés */}
                    <div className='text-center'>
                      <i className='fa-solid fa-users text-white text-lg mb-1'></i>
                      <h4 className='text-[#100F20] font-bold text-xs'>
                        Nombre de salariés
                      </h4>
                      <p className='text-[#100F20] text-[10px]'>
                        10,000 employés
                      </p>
                    </div>

                    {/* Tiret blanc */}
                    <div className='border-t border-white my-2'></div>

                    {/* Age moyen */}
                    <div className='text-center'>
                      <i className='fa-solid fa-user text-white text-lg mb-1'></i>
                      <h4 className='text-[#100F20] font-bold text-xs'>
                        Age moyen
                      </h4>
                      <p className='text-[#100F20] text-[10px]'>30 ans</p>
                    </div>

                    {/* Tiret blanc */}
                    <div className='border-t border-white my-2'></div>

                    {/* Équipe */}
                    <div className='text-center'>
                      <i className='fa-solid fa-venus-mars text-white text-lg mb-1'></i>
                      <h4 className='text-[#100F20] font-bold text-xs'>
                        Équipe
                      </h4>
                      <p className='text-[#100F20] text-[10px]'>♀ 40% ♂ 60%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne droite - Textes */}
              <div className='flex-1'>
                {/* Présentation */}
                <div className='mb-4'>
                  <h3 className='text-hirna-orange font-bold text-lg mb-2'>
                    Présentation
                  </h3>
                  <p className='text-white text-xs leading-relaxed'>
                    "The University of Ghana is the oldest and largest of the
                    thirteen Ghanaian national public universities. It was
                    founded in 1948, in the British colony of the Gold Coast, as
                    the University College of the Gold Coast, and was originally
                    an affiliate college of the University
                  </p>
                </div>

                {/* Missions */}
                <div className='mb-4'>
                  <h3 className='text-hirna-orange font-bold text-lg mb-2'>
                    Missions
                  </h3>
                  <p className='text-white text-xs leading-relaxed'>
                    "The University of Ghana is the oldest and largest of the
                    thirteen Ghanaian national public universities
                  </p>
                </div>

                {/* Valeurs */}
                <div>
                  <h3 className='text-hirna-orange font-bold text-lg mb-2'>
                    Valeurs
                  </h3>
                  <ul className='text-white text-xs space-y-1'>
                    {valeurs.map((valeur, index) => (
                      <li key={index}>·{valeur}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section Avantages ECOBANK + Footer entourés d'une bordure orange */}
            <div className='mt-8 border border-hirna-orange rounded-2xl p-6'>
              <h3 className='text-hirna-orange font-bold text-lg mb-4'>
                Avantages à rejoindre à ECOBANK
              </h3>

              <div className='flex gap-4'>
                {/* Carte vidéo à gauche avec fond blanc pour description */}
                <div className='w-1/2'>
                  <div className='rounded-2xl overflow-hidden'>
                    {/* Image vidéo */}
                    <div className='relative h-36'>
                      <img
                        src='/images/formation.png'
                        alt='Vidéo'
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-12 h-12 rounded-full bg-white/80 flex items-center justify-center'>
                          <i className='fa-solid fa-play text-hirna-orange text-lg'></i>
                        </div>
                      </div>
                    </div>
                    {/* Description sur fond blanc */}
                    <div className='bg-white p-4'>
                      <h4 className='text-[#100F20] font-bold text-sm mb-1'>
                        Pourquoi rejoindre ECOBANK
                      </h4>
                      <p className='text-gray-600 text-xs mb-3'>
                        Des conseils pour obtenir une bourse de mobilité en
                        Afrique
                      </p>
                      <button className='bg-[#100F20] text-white text-xs px-4 py-2 rounded-full'>
                        En savoir plus{' '}
                        <i className='fa-solid fa-arrow-right ml-1'></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cartes avantages superposées à droite - fond transparent avec bordure */}
                <div className='w-1/2 flex flex-col gap-3'>
                  <div className='bg-[#191536] border border-white/20 rounded-2xl p-4'>
                    <h4 className='text-hirna-orange font-bold text-sm mb-2'>
                      Pourquoi rejoindre ECOBANK
                    </h4>
                    <p className='text-white text-xs'>
                      Travailler chez Ecobank offre des avantages tels que des
                      opportunités de développement professionnel, une présence
                      panafricaine et internationale.
                    </p>
                  </div>

                  <div className='bg-[#191536] border border-white/20 rounded-2xl p-4'>
                    <h4 className='text-hirna-orange font-bold text-sm mb-2'>
                      Pourquoi rejoindre ECOBANK
                    </h4>
                    <p className='text-white text-xs'>
                      Travailler chez Ecobank offre des avantages tels que des
                      opportunités.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer avec partage et suivre */}
              <div className='flex items-center justify-between mt-8 pt-6 border-t border-white/20'>
                <div className='flex items-center gap-3'>
                  <button className='bg-hirna-orange text-white text-xs px-4 py-2 rounded-full'>
                    Partager
                  </button>
                  <a
                    href='#'
                    className='w-8 h-8 rounded-full border border-hirna-orange flex items-center justify-center text-hirna-orange'
                  >
                    <i className='fa-brands fa-linkedin-in text-sm'></i>
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 rounded-full border border-hirna-orange flex items-center justify-center text-hirna-orange'
                  >
                    <i className='fa-brands fa-facebook-f text-sm'></i>
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 rounded-full border border-hirna-orange flex items-center justify-center text-hirna-orange'
                  >
                    <i className='fa-brands fa-youtube text-sm'></i>
                  </a>
                </div>
                <button className='border border-white text-white text-sm px-6 py-2 rounded-full hover:bg-white/10'>
                  Suivre
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contenu Offres d'emploi */}
        {activeTab === 'offres' && (
          <div className='bg-[#191536] rounded-b-3xl p-6 border-x border-b border-white/10'>
            {/* Liste des offres avec JobCard */}
            <div className='grid md:grid-cols-2 gap-4 mb-8'>
              {offresData.map((offre) => (
                <JobCard
                  key={offre.id}
                  logo={offre.logo}
                  title={offre.title}
                  company={offre.company}
                  contractType={offre.contract}
                  experience={offre.experience}
                  location={offre.location}
                  publishedDate={offre.date}
                  hasNotice={false}
                  onView={() => console.log('View', offre.id)}
                />
              ))}
            </div>

            {/* Candidature spontanée */}
            <div className='bg-[#100F20] rounded-2xl p-6 mb-8'>
              <h4 className='text-white font-bold text-lg mb-2'>
                Candidature spontanée
              </h4>
              <p className='text-white text-sm mb-4'>
                ECOBANK est toujours à la recherche de talents africains de
                demain. Partagez votre CV et dites-leur pourquoi vous aimeriez
                les rejoindre !
              </p>
              <button className='bg-hirna-orange text-white text-sm px-6 py-2 rounded-full'>
                Postuler <i className='fa-solid fa-arrow-right ml-1'></i>
              </button>
            </div>

            {/* Section Avantages + Footer avec bordure orange */}
            <div className='border border-hirna-orange rounded-2xl p-6'>
              <h3 className='text-hirna-orange font-bold text-lg mb-4'>
                Avantages à rejoindre à ECOBANK
              </h3>

              <div className='flex gap-4'>
                {/* Carte vidéo */}
                <div className='w-1/2'>
                  <div className='rounded-2xl overflow-hidden'>
                    <div className='relative h-36'>
                      <img
                        src='/images/formation.png'
                        alt='Vidéo'
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-12 h-12 rounded-full bg-white/80 flex items-center justify-center'>
                          <i className='fa-solid fa-play text-hirna-orange text-lg'></i>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white p-4'>
                      <h4 className='text-[#100F20] font-bold text-sm mb-1'>
                        Pourquoi rejoindre ECOBANK
                      </h4>
                      <p className='text-gray-600 text-xs mb-3'>
                        Des conseils pour obtenir une bourse de mobilité en
                        Afrique
                      </p>
                      <button className='bg-[#100F20] text-white text-xs px-4 py-2 rounded-full'>
                        En savoir plus{' '}
                        <i className='fa-solid fa-arrow-right ml-1'></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cartes avantages superposées */}
                <div className='w-1/2 flex flex-col gap-3'>
                  <div className='bg-[#191536] border border-white/20 rounded-2xl p-4'>
                    <h4 className='text-hirna-orange font-bold text-sm mb-2'>
                      Pourquoi rejoindre ECOBANK
                    </h4>
                    <p className='text-white text-xs'>
                      Travailler chez Ecobank offre des avantages tels que des
                      opportunités de développement professionnel, une présence
                      panafricaine et internationale.
                    </p>
                  </div>

                  <div className='bg-[#191536] border border-white/20 rounded-2xl p-4'>
                    <h4 className='text-hirna-orange font-bold text-sm mb-2'>
                      Pourquoi rejoindre ECOBANK
                    </h4>
                    <p className='text-white text-xs'>
                      Travailler chez Ecobank offre des avantages tels que des
                      opportunités.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className='flex items-center justify-between mt-8 pt-6 border-t border-white/20'>
                <div className='flex items-center gap-3'>
                  <button className='bg-hirna-orange text-white text-xs px-4 py-2 rounded-full'>
                    Partager
                  </button>
                  <a
                    href='#'
                    className='w-8 h-8 rounded-full border border-hirna-orange flex items-center justify-center text-hirna-orange'
                  >
                    <i className='fa-brands fa-linkedin-in text-sm'></i>
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 rounded-full border border-hirna-orange flex items-center justify-center text-hirna-orange'
                  >
                    <i className='fa-brands fa-facebook-f text-sm'></i>
                  </a>
                  <a
                    href='#'
                    className='w-8 h-8 rounded-full border border-hirna-orange flex items-center justify-center text-hirna-orange'
                  >
                    <i className='fa-brands fa-youtube text-sm'></i>
                  </a>
                </div>
                <button className='border border-white text-white text-sm px-6 py-2 rounded-full hover:bg-white/10'>
                  Suivre
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contenu Témoignages */}
        {activeTab === 'temoignages' && (
          <div className='bg-[#191536] rounded-b-3xl p-6 border-x border-b border-white/10'>
            {/* Liste des témoignages */}
            <div className='space-y-4 mb-6'>
              {temoignagesData.map((temoignage) => (
                <div key={temoignage.id} className='bg-white rounded-2xl p-4'>
                  <div className='flex items-start gap-3 mb-3'>
                    <img
                      src={temoignage.avatar}
                      alt={temoignage.name}
                      className='w-12 h-12 rounded-full object-cover'
                    />
                    <div className='flex-1'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <h4 className='text-[#100F20] font-bold text-base'>
                            {temoignage.name}
                          </h4>
                          <p className='text-gray-500 text-xs'>
                            {temoignage.role}
                          </p>
                        </div>
                        <div className='flex gap-1'>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i
                              key={star}
                              className={`fa-solid fa-star text-sm ${
                                star <= temoignage.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='text-gray-600 text-sm'>{temoignage.text}</p>
                </div>
              ))}
            </div>

            {/* Pagination témoignages - points */}
            <div className='flex justify-center gap-2 mb-8'>
              {[0, 1, 2].map((page) => (
                <button
                  key={page}
                  onClick={() => setTemoignagePage(page)}
                  className={`w-3 h-3 rounded-full ${
                    temoignagePage === page ? 'bg-hirna-orange' : 'bg-white/30'
                  }`}
                ></button>
              ))}
            </div>

            {/* Formulaire ajouter témoignage - FOND BLANC */}
            <div className='bg-white rounded-2xl p-6'>
              <div className='mb-6'>
                <label className='text-hirna-orange text-sm font-semibold block mb-3'>
                  Prénom & Nom
                </label>
                <input
                  type='text'
                  value={newTemoignage.name}
                  onChange={(e) =>
                    setNewTemoignage({ ...newTemoignage, name: e.target.value })
                  }
                  className='w-full bg-gray-100 border-none rounded-lg text-gray-800 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-hirna-orange'
                />
              </div>

              <div className='mb-6'>
                <div className='flex items-center justify-between mb-3'>
                  <label className='text-hirna-orange text-sm font-semibold'>
                    Ajouter votre témoignage
                  </label>
                  <button className='w-6 h-6 rounded-full bg-hirna-orange flex items-center justify-center'>
                    <i className='fa-solid fa-plus text-white text-xs'></i>
                  </button>
                </div>
                <textarea
                  value={newTemoignage.text}
                  onChange={(e) =>
                    setNewTemoignage({
                      ...newTemoignage,
                      text: e.target.value,
                    })
                  }
                  rows={4}
                  className='w-full bg-gray-100 border-none rounded-lg text-gray-800 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-hirna-orange resize-none'
                ></textarea>
              </div>

              <div className='flex items-center justify-between'>
                <label className='text-hirna-orange text-sm font-semibold'>
                  Notation
                </label>
                <div className='flex gap-1'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() =>
                        setNewTemoignage({ ...newTemoignage, rating: star })
                      }
                      className='focus:outline-none'
                    >
                      <i
                        className={`fa-solid fa-star text-xl ${
                          star <= newTemoignage.rating
                            ? 'text-hirna-orange'
                            : 'text-gray-300'
                        }`}
                      ></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DetailFormationHeroSection
