import React from 'react'
import SchoolHeaderCard from '../SchoolHeaderCard'

const SchoolDetailHeroSection = () => {
  // 1. Définition des variables avec tes vraies données
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
    <section className="bg-[#100F20] min-h-screen font-['Instrument_Sans'] pb-20">
      {/* UTILISATION DU COMPOSANT CARD (Remplace les anciens points 1 et 2) */}
      <SchoolHeaderCard
        schoolName={schoolData.name}
        tags={schoolData.tags}
        location={schoolData.location}
        website={schoolData.website}
        coverImage={schoolData.cover}
        logo={schoolData.logo}
        socialLinks={schoolData.socials}
      />

      {/* 3. Bloc de Contenu (Carte Navy) - Conservé tel quel */}
      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='bg-[#191536] rounded-3xl p-6 md:p-10 shadow-xl border border-white/5'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            {/* Colonne Gauche: Galerie & Points Forts */}
            <div className='lg:col-span-5 grid grid-cols-2 gap-2'>
              <div className='col-span-2 overflow-hidden h-64'>
                <img
                  src='/images/formation.png'
                  alt='Student'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <div className='overflow-hidden h-32'>
                  <img
                    src='/images/formation.png'
                    alt='Campus'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden h-32'>
                  <img
                    src='/images/formation.png'
                    alt='Campus'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='overflow-hidden h-32'>
                  <img
                    src='/images/formation.png'
                    alt='Student'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* BLOC POINTS FORTS */}
              <div className='bg-[#c76e1e] p-4 flex flex-col gap-4 text-white h-full'>
                <h4 className='text-center font-bold text-lg text-black uppercase tracking-widest'>
                  Points forts
                </h4>

                <div className='border border-black p-3 flex-1 flex flex-col justify-center'>
                  <span className='text-5xl font-extrabold block text-black mb-2 text-center'>
                    +03
                  </span>
                  <div className='flex items-center justify-center gap-2 mb-2'>
                    <i className='fa-solid fa-building-columns text-white text-base'></i>
                    <span className='text-[10px] uppercase font-bold leading-tight'>
                      Campus Modernes
                    </span>
                  </div>
                  <ul className='text-[9px] font-bold list-none text-left text-black self-start ml-2 space-y-0.5'>
                    <li>• Campus d'Accra</li>
                    <li>• Campus d'Iglo</li>
                    <li>• Campus de Mon</li>
                  </ul>
                </div>

                <div className='border border-black p-3 flex-1 flex flex-col justify-center'>
                  <span className='text-5xl font-extrabold block text-black mb-2 text-center'>
                    +02
                  </span>
                  <span className='text-[10px] uppercase font-bold block mb-2 text-left text-white leading-tight'>
                    Programmes de langues disponibles
                  </span>
                  <div className='flex justify-start gap-2 mt-1'>
                    <img
                      src='https://flagcdn.com/w40/fr.png'
                      alt='FR'
                      className='w-7 h-5 object-cover border border-black/20'
                    />
                    <img
                      src='https://flagcdn.com/w40/gb.png'
                      alt='EN'
                      className='w-7 h-5 object-cover border border-black/20'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite: Descriptions Textuelles */}
            <div className='lg:col-span-7'>
              <div className='space-y-8'>
                <section>
                  <h3 className='text-[#c76e1e] text-xl font-bold mb-3 uppercase tracking-wide'>
                    Description de l'école
                  </h3>
                  <p className='text-white/80 text-sm leading-relaxed'>
                    "The University of Ghana is the oldest and largest of the
                    thirteen Ghanaian national public universities..."
                  </p>
                </section>

                <section>
                  <h3 className='text-[#c76e1e] text-xl font-bold mb-3 uppercase tracking-wide'>
                    Missions
                  </h3>
                  <p className='text-white/80 text-sm leading-relaxed'>
                    "The University of Ghana is the oldest and largest founded
                    in 1948."
                  </p>
                </section>

                <section>
                  <h3 className='text-[#c76e1e] text-xl font-bold mb-3 uppercase tracking-wide'>
                    Vie étudiante & Services
                  </h3>
                  <ul className='text-white/80 text-sm space-y-3'>
                    <li className='flex items-center gap-2'>
                      • Hébergement{' '}
                      <i className='fa-solid fa-square-arrow-up-right text-[10px] text-[#c76e1e]'></i>
                    </li>
                    <li className='flex items-center gap-2'>
                      • Clubs & Associations{' '}
                      <i className='fa-solid fa-square-arrow-up-right text-[10px] text-[#c76e1e]'></i>
                    </li>
                  </ul>
                </section>

                <div className='mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8'>
                  <button className='bg-white text-black px-8 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#c76e1e] hover:text-white transition-all duration-300'>
                    Nous Contacter <i className='fa-solid fa-arrow-right'></i>
                  </button>
                  <button className='bg-transparent border border-white/20 text-white px-8 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all'>
                    Partager{' '}
                    <i className='fa-solid fa-share-nodes text-[#c76e1e]'></i>
                  </button>
                  <div className='flex gap-4 ml-auto text-xl'>
                    <i className='fa-brands fa-linkedin cursor-pointer text-[#c76e1e] hover:scale-110 transition-transform'></i>
                    <i className='fa-brands fa-facebook cursor-pointer text-[#c76e1e] hover:scale-110 transition-transform'></i>
                    <i className='fa-brands fa-instagram cursor-pointer text-[#c76e1e] hover:scale-110 transition-transform'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolDetailHeroSection
