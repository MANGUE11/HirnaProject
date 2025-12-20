import React from 'react'
import SchoolHeaderCard from '../SchoolHeaderCard'
import ArticleCard from '../ArticleCard' // Import de ta nouvelle card
import JobCard from '../JobCard' // Import de la card Job

const DetailFormationHeroSection = () => {
  const schoolData = {
    name: 'Ghana university',
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

      {/* Conteneur principal */}
      <div className='max-w-5xl mx-auto px-4 mt-20 relative z-20'>
        {/* Badge "Formation en présentiel" - Largeur et hauteur augmentées */}
        <div className='inline-block bg-[#c76e1e] text-white text-xs md:text-sm font-bold px-10 py-3.5 rounded-lg mb-6 uppercase tracking-[0.15em] shadow-lg'>
          Formation en présentiel
        </div>

        {/* Carte Navy de détails */}
        <div className='bg-[#191536] rounded-[40px] p-8 md:p-14 shadow-2xl border border-white/5'>
          {/* Header de la formation */}
          <div className='flex items-center gap-6 mb-12'>
            <div className='bg-white p-2 rounded-2xl shrink-0'>
              <img
                src='/images/formation.png'
                alt='Logo'
                className='w-20 h-20 object-contain'
              />
            </div>
            <div>
              <span className='text-[#c76e1e] font-bold text-xl uppercase block mb-1'>
                Licence
              </span>
              <h2 className='text-white text-4xl md:text-6xl font-bold leading-tight'>
                Data Analyst
              </h2>
            </div>
          </div>

          <div className='mb-12'>
            <h3 className='text-[#c76e1e] font-bold text-xl mb-1'>
              Université Cheikh Anta Diop de Dakar
            </h3>
            <p className='text-white/50 text-sm'>
              Santé, Ingénierie, Médecine, Technologies
            </p>
          </div>

          <div className='mb-12'>
            <h4 className='text-[#c76e1e] font-bold text-2xl mb-5 uppercase'>
              Présentation
            </h4>
            <p className='text-white/80 text-base leading-relaxed'>
              Le Data Analyst (ou analyste de données) est le professionnel
              chargé de collecter, nettoyer, analyser et interpréter les données
              afin d'aider une organisation à prendre des décisions éclairées.
              Il transforme les chiffres en informations compréhensibles et
              exploitables pour les dirigeants, les équipes marketing,
              commerciales ou techniques.
            </p>
          </div>

          <div className='mb-12'>
            <h4 className='text-[#c76e1e] font-bold text-2xl mb-5 uppercase tracking-wide'>
              Conditions d'admission (prérequis)
            </h4>
            <p className='text-white/90 text-base'>
              <span className='font-bold'>Bac +2 minimum en informatique</span>,
              statistiques, mathématiques, économie, gestion, ou équivalent.
            </p>
          </div>

          {/* Grille des infos techniques */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            {/* Colonne GAUCHE */}
            <div className='bg-white rounded-3xl p-10 text-[#191536] shadow-inner'>
              <ul className='space-y-5 text-[15px] font-semibold'>
                <li className='flex items-center gap-4'>
                  <i className='fa-solid fa-clock text-[#c76e1e]'></i>
                  <span>
                    <span className='font-extrabold'>Durée :</span> 4 ans
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <i className='fa-solid fa-globe text-[#c76e1e]'></i>
                  <span>
                    <span className='font-extrabold'>Langue :</span> Français &
                    Anglais
                  </span>
                </li>
                <li className='flex items-start gap-4'>
                  <i className='fa-solid fa-coins text-[#c76e1e] mt-1'></i>
                  <div>
                    <span className='font-extrabold'>Frais de scolarité :</span>
                    <ul className='ml-4 mt-2 space-y-1 font-medium opacity-90'>
                      <li>• (années 1-2): €4000</li>
                      <li>• (année 3): €3000</li>
                      <li>• (année 4): €1000</li>
                    </ul>
                  </div>
                </li>
                <li className='flex items-center gap-4'>
                  <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>
                  <span>
                    <span className='font-extrabold'>Localisation :</span>{' '}
                    Dakar, Sénégal
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <i className='fa-solid fa-building-columns text-[#c76e1e]'></i>
                  <span>
                    <span className='font-extrabold'>Campus :</span> Chaick Anta
                    1 & 2
                  </span>
                </li>
                <li className='flex items-center gap-4'>
                  <i className='fa-solid fa-calendar-check text-[#c76e1e]'></i>
                  <span>
                    <span className='font-extrabold'>Rentrée :</span> 03
                    Décembre 2025
                  </span>
                </li>
              </ul>
            </div>

            {/* Colonne DROITE */}
            <div className='bg-white rounded-3xl p-10 text-[#191536] shadow-inner'>
              <div className='mb-10'>
                <div className='flex items-center gap-3 mb-5'>
                  <i className='fa-solid fa-graduation-cap text-[#c76e1e]'></i>
                  <h5 className='font-extrabold uppercase tracking-tight'>
                    Domaines du programme
                  </h5>
                </div>
                <ol className='ml-8 space-y-2 text-[15px] font-semibold list-decimal'>
                  <li>Analyse de données</li>
                  <li>Programmation et Outils Data</li>
                  <li>Visualisation et Reporting</li>
                </ol>
              </div>

              <div className='mb-10'>
                <div className='flex items-center gap-3 mb-5'>
                  <i className='fa-solid fa-briefcase text-[#c76e1e]'></i>
                  <h5 className='font-extrabold uppercase tracking-tight'>
                    Modes d'étude
                  </h5>
                </div>
                <ul className='ml-8 text-[15px] font-semibold'>
                  <li>• Temps plein</li>
                </ul>
              </div>

              <div>
                <div className='flex items-center gap-3 mb-5'>
                  <i className='fa-solid fa-user-tag text-[#c76e1e]'></i>
                  <h5 className='font-extrabold uppercase tracking-tight'>
                    Bourses associées
                  </h5>
                </div>
                <ul className='ml-8 text-[15px] font-semibold'>
                  <li>• Pas disponible</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section Formation - SANS tirets/soulignements */}
          <div className='mb-16'>
            <h4 className='text-[#c76e1e] font-bold text-2xl mb-5 uppercase tracking-wide'>
              Formation
            </h4>
            <div className='space-y-4'>
              <p className='text-white/90 text-[15px] leading-relaxed'>
                Licence en statistiques, informatique, économie, data science ou
                équivalent
              </p>
              <p className='text-white/90 text-[15px] leading-relaxed'>
                Certifications en outils d'analyse (Power BI, Google Data
                Analytics, etc.) appréciées
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className='flex flex-wrap justify-between items-center gap-6 border-t border-white/10 pt-12'>
            <button className='bg-[#c76e1e] text-white px-12 py-4 rounded-full font-bold flex items-center gap-4 hover:bg-[#a85d1a] transition-all shadow-xl group'>
              Postuler{' '}
              <i className='fa-solid fa-upload text-sm group-hover:-translate-y-1 transition-transform'></i>
            </button>
            <button className='bg-transparent border border-white/40 text-white px-12 py-4 rounded-full font-bold flex items-center gap-4 hover:bg-white/10 transition-all group'>
              Voir l'école{' '}
              <i className='fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform'></i>
            </button>
          </div>
        </div>
      </div>

      {/* --- NOUVELLE SECTION : DÉBOUCHÉS ET RECOMMANDATIONS --- */}
      {/* Passage de max-w-6xl à max-w-7xl pour donner plus de largeur aux cartes sur desktop */}
      <div className='max-w-7xl mx-auto px-4 mt-24'>
        {/* Bannière Débouchés */}
        <div className='bg-[#c76e1e] rounded-2xl p-8 mb-20 text-center md:text-left'>
          <h2 className='text-[#100F20] text-2xl md:text-3xl font-bold mb-3'>
            Débouchés recommandés sur la formation Data Analyst
          </h2>
          <p className='text-[#100F20] text-lg opacity-90'>
            Le Data Analyst est aujourd’hui recherché dans presque tous les
            secteurs. Après une formation ou une première expérience.
          </p>
        </div>

        {/* Section Articles Recommandés */}
        <div className='mb-20'>
          <h3 className='text-[#c76e1e] text-2xl font-bold mb-8 uppercase tracking-wide text-center md:text-left'>
            Articles recommandés
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            <ArticleCard
              image='/images/formation.png'
              title='Les métiers de Data Analyst'
              description="Un débutant gagne en moyenne entre 35 000 et 47 000 € brut annuels, tandis qu'un professionnel."
              date='02/09/2025'
              hasNotice={true}
            />
            <ArticleCard
              image='/images/formation.png'
              title="Quel est le salaire d'un data analyst ?"
              description="Un débutant gagne en moyenne entre 35 000 et 47 000 € brut annuels, tandis qu'un professionnel."
              date='02/09/2025'
              hasNotice={true}
            />
            <ArticleCard
              image='/images/formation.png'
              title='Les outils de visualisation'
              description='Découvrez les outils indispensables pour un Data Analyst en 2025, de Power BI à Tableau.'
              date='02/09/2025'
              hasNotice={true}
            />
          </div>
        </div>

        {/* Section Offres Recommandées - Plus large */}
        <div className='mb-10'>
          <h3 className='text-[#c76e1e] text-2xl font-bold mb-8 uppercase tracking-wide text-center md:text-left'>
            Offres recommandées
          </h3>
          {/* gap-6 au lieu de gap-5 pour un meilleur espacement visuel */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
            <div className='w-full'>
              {' '}
              {/* Wrapper pour forcer la largeur max du grid cell */}
              <JobCard
                logo='/images/logo ma-sy.jpg'
                title='Data Scientist Junior'
                company='ORANGE SENEGAL'
                contractType='CDI'
                experience='01 - 03 ans'
                location='Thiès'
                publishedDate='15/10/2025'
                hasNotice={true}
              />
            </div>
            <div className='w-full'>
              <JobCard
                logo='/images/logo ma-sy.jpg'
                title='Business Analyst'
                company='CANAL + SENEGAL'
                contractType='CDI'
                experience='01 - 03 ans'
                location='Dakar'
                publishedDate='15/10/2025'
                hasNotice={true}
              />
            </div>
            <div className='w-full'>
              <JobCard
                logo='/images/logo ma-sy.jpg'
                title='Business Analyst'
                company='CANAL + SENEGAL'
                contractType='CDI'
                experience='01 - 03 ans'
                location='Dakar'
                publishedDate='15/10/2025'
                hasNotice={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailFormationHeroSection
