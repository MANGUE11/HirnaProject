import React from 'react'
import SchoolHeaderCard from '../SchoolHeaderCard'

const DetailBourseHeroSection = () => {
  const providerData = {
    name: 'Ghana University Foundation',
    tags: 'Excellence, Recherche, Mobilité Internationale',
    location: 'ACCRA, Ghana',
    website: 'www.scholarships.ghanauni.edu',
    cover: '/images/formation.png', // Image de couverture (Header)
    logo: '/images/logo ma-sy.jpg',
    socials: {
      linkedin: 'https://linkedin.com/foundation/ghana-uni',
      facebook: 'https://facebook.com/foundation/ghana-uni',
      instagram: 'https://instagram.com/foundation/ghana-uni',
    },
  }

  return (
    <section className="bg-[#100F20] font-['Instrument_Sans'] pb-20 text-left">
      {/* 1. L'en-tête de l'institution */}
      <SchoolHeaderCard
        schoolName={providerData.name}
        tags={providerData.tags}
        location={providerData.location}
        website={providerData.website}
        coverImage={providerData.cover}
        logo={providerData.logo}
        socialLinks={providerData.socials}
      />

      {/* CONTENEUR PRINCIPAL DES DÉTAILS */}
      <div className='max-w-5xl mx-auto px-4 mt-16 relative z-20 bg-[#191536] rounded-[32px] pt-10 pb-10 pr-10 pl-10'>
        {/* TITRE ET BADGE MONTANT */}
        <div className='flex flex-col md:flex-row justify-between items-start mb-5 gap-6'>
          <div>
            <h1 className='text-[#c76e1e] text-4xl md:text-5xl font-extrabold leading-tight'>
              Bourse de mérite <br /> 2025
            </h1>
          </div>
          <div className='text-center md:text-left'>
            <div className='bg-[#c76e1e] text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg'>
              <i className='fa-solid fa-money-bill-wave text-xl'></i>
              <span className='text-2xl font-black'>8000$</span>
            </div>
            <p className='text-white text-[10px] mt-2 leading-tight uppercase tracking-wider'>
              frais de scolarité <br /> & hébergement
            </p>
          </div>
        </div>

        {/* PRÉSENTATION */}
        <div className='mb-12'>
          <h2 className='text-[#c76e1e] text-lg font-bold mb-4 uppercase tracking-wide'>
            Présentation
          </h2>
          <p className='text-white/80 text-sm md:text-base leading-relaxed'>
            <span className='font-bold'>La Bourse de Mérite 2025</span> vise à
            encourager l'excellence académique et à valoriser les étudiants
            africains qui se distinguent par leurs résultats, leur discipline et
            leur engagement. Elle offre une opportunité unique de soutien
            financier et d'accompagnement aux jeunes talents désireux de
            poursuivre leurs études dans les meilleures conditions et de
            contribuer au développement de leur communauté.
          </p>
        </div>

        {/* SECTION GRILLE : CRITÈRES ET SÉLECTION */}
        <div className='flex flex-col md:flex-row gap-6 mb-3'>
          {/* Bloc Blanc : Critères d'éligibilité 1 */}
          <div className='flex-grow bg-white rounded-[24px] p-8 text-[#100F20]'>
            <div className='mb-8'>
              <h3 className='font-black text-lg mb-4'>
                Critères d'éligibilité
              </h3>
              <ul className='space-y-2 text-[13px] font-medium opacity-90'>
                <li>• Être de nationalité...</li>
                <li>• Être déjà titulaire d'un diplôme universitaire</li>
                <li>• Devoir payer ou avoir payé des droits d'inscription</li>
              </ul>
            </div>
            <div>
              <h3 className='font-black text-lg mb-4'>Documents requis</h3>
              <ul className='space-y-2 text-[13px] font-medium opacity-90'>
                <li>• Documents administratifs et d'identité</li>
                <li>• Diplômes et relevés de notes</li>
                <li>• Curriculum Vitae (CV)</li>
                <li>• Lettre de motivation</li>
              </ul>
            </div>
          </div>

          {/* Bloc Processus de sélection (Noir/Transparent avec bordure) */}
          <div className='md:w-1/3 bg-[#191536]/50 border border-white/10 rounded-[24px] p-8'>
            <h3 className='text-[#c76e1e] font-black text-lg mb-8 uppercase leading-tight'>
              Processus de <br /> sélection
            </h3>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='bg-[#c76e1e] p-2 rounded-lg'>
                  <i className='fa-solid fa-folder-open text-white text-sm'></i>
                </div>
                <div>
                  <p className='text-white font-bold text-sm'>Dossier</p>
                  <i className='fa-solid fa-arrow-down text-white/20 text-xs ml-2'></i>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-[#c76e1e] p-2 rounded-lg'>
                  <i className='fa-solid fa-comments text-white text-sm'></i>
                </div>
                <div>
                  <p className='text-white font-bold text-sm'>Entretien</p>
                  <i className='fa-solid fa-arrow-down text-white/20 text-xs ml-2'></i>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='bg-[#c76e1e] p-2 rounded-lg'>
                  <i className='fa-solid fa-user-check text-white text-sm'></i>
                </div>
                <p className='text-white font-bold text-sm'>Décision</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION CRITÈRES FOND NOIR (Celle que j'avais manqué) */}
        <div className='bg-[#0A0914] rounded-[24px] p-8 text-white mb-3 border border-white/5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='font-black text-lg mb-4 text-white'>
                Critères d'éligibilité
              </h3>
              <ul className='space-y-2 text-[13px] font-medium text-white/70'>
                <li>• Être de nationalité...</li>
                <li>• Être déjà titulaire d'un diplôme universitaire</li>
                <li>• Devoir payer ou avoir payé des droits d'inscription</li>
              </ul>
            </div>
            <div>
              <h3 className='font-black text-lg mb-4 text-white'>
                Documents requis
              </h3>
              <ul className='space-y-2 text-[13px] font-medium text-white/70'>
                <li>• Documents administratifs et d'identité</li>
                <li>• Diplômes et relevés de notes</li>
                <li>• Curriculum Vitae (CV)</li>
                <li>• Lettre de motivation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOC INFOS PRATIQUES (ICÔNES ORANGES) */}
        <div className='bg-white rounded-[24px] p-8 text-[#100F20] mb-3'>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12'>
            <li className='flex items-center gap-4'>
              <i className='fa-solid fa-clock text-[#c76e1e] w-5'></i>
              <span className='text-[14px]'>
                <span className='font-black'>Durée :</span> 4 ans
              </span>
            </li>
            <li className='flex items-center gap-4'>
              <i className='fa-solid fa-globe text-[#c76e1e] w-5'></i>
              <span className='text-[14px]'>
                <span className='font-black'>Langue :</span> Français & Anglais
              </span>
            </li>
            <li className='flex items-center gap-4'>
              <i className='fa-solid fa-location-dot text-[#c76e1e] w-5'></i>
              <span className='text-[14px]'>
                <span className='font-black'>Localisation :</span> Accra, Ghana
              </span>
            </li>
            <li className='flex items-center gap-4'>
              <i className='fa-solid fa-building-columns text-[#c76e1e] w-5'></i>
              <span className='text-[14px]'>
                <span className='font-black'>Campus :</span> Ghana campus 1 & 2
              </span>
            </li>
            <li className='flex items-center gap-4'>
              <i className='fa-solid fa-calendar-days text-[#c76e1e] w-5'></i>
              <span className='text-[14px]'>
                <span className='font-black'>Rentrée :</span> 03 Décembre 2025
              </span>
            </li>
          </ul>
        </div>

        {/* BLOC CALENDRIER */}
        <div className='bg-white rounded-[24px] p-8 text-[#100F20] mb-3'>
          <h3 className='font-black text-xl mb-6'>Calendrier</h3>
          <div className='space-y-6 text-[14px]'>
            <div>
              <p className='font-semibold'>• Demande de bourse :</p>
              <div className='ml-4 mt-1'>
                <p className='font-black'>Période de dépôt conseillée :</p>
                <p className='text-[#c76e1e] font-bold'>31 mai 2025</p>
              </div>
            </div>
            <div>
              <p className='font-semibold'>• Versement de la bourse :</p>
              <div className='ml-4 mt-1 space-y-3'>
                <div>
                  <p className='font-black'>Premier versement :</p>
                  <p className='opacity-80 font-medium'>Septembre 2025</p>
                </div>
                <div>
                  <p className='font-black'>Paiement mensuel :</p>
                  <p className='opacity-70 leading-relaxed italic text-[13px]'>
                    Les versements sont généralement effectués aux alentours du
                    5 de chaque mois, de septembre à juin, pour une durée de 10
                    mois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOUTONS ACTIONS */}
        {/* BOUTONS ACTIONS CENTRÉS */}
        <div className='flex flex-wrap justify-center items-center gap-4 pt-6 border-t border-white/10'>
          <button className='bg-[#c76e1e] text-white px-10 py-3 rounded-full font-bold flex items-center gap-2 hover:brightness-110 transition-all'>
            Postuler <i className='fa-solid fa-upload text-[10px]'></i>
          </button>
          <button className='bg-[#191536] border border-white/20 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all'>
            Sauvegarder <i className='fa-solid fa-bookmark text-[10px]'></i>
          </button>
          <button className='bg-transparent border border-white/40 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all'>
            Partager <i className='fa-solid fa-share-nodes text-[10px]'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DetailBourseHeroSection
