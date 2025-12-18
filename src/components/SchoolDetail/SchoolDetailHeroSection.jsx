import React from 'react'

const SchoolDetailHeroSection = () => {
  return (
    <section className="bg-[#100F20] min-h-screen font-['Instrument_Sans']">
      {/* 1. Header & Couverture - Sans Radius */}
      <div className='relative w-full h-[300px] md:h-[400px]'>
        <img
          src='/images/formation.png'
          alt='Couverture'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* 2. Profil & Infos Principales */}
      <div className='max-w-6xl mx-auto px-4 -mt-16 relative z-10'>
        <div className='flex flex-col md:flex-row items-end gap-6 mb-8 text-white'>
          {/* Logo Profile - Sans Radius */}
          <div className='bg-white p-2 rounded-xl shadow-2xl'>
            <img
              src='/images/formation.png'
              alt='Logo'
              className='w-32 h-32 md:w-40 md:h-40 object-cover'
            />
          </div>

          <div className='flex-1 pb-4'>
            <div className='flex flex-wrap items-center gap-4 mb-2'>
              <h1 className='text-3xl md:text-5xl font-bold'>
                Ghana university
              </h1>
              <span className='bg-[#c76e1e] text-white text-[10px] md:text-xs px-3 py-1 rounded-md font-medium uppercase'>
                Santé, Ingénierie, Médecine, Technologies
              </span>
            </div>

            <div className='flex flex-wrap items-center gap-6 text-sm'>
              <span className='flex items-center gap-2'>
                <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>{' '}
                ACCRA, Ghana
              </span>
              <a
                href='#'
                className='flex items-center gap-2 hover:text-[#c76e1e] transition-colors'
              >
                <i className='fa-solid fa-globe text-[#c76e1e]'></i>{' '}
                www.ghanauniversity
              </a>
              <div className='flex items-center gap-3'>
                <span className='opacity-70'>Nous suivre</span>
                <div className='flex gap-2'>
                  <i className='fa-brands fa-linkedin text-[#c76e1e] cursor-pointer'></i>
                  <i className='fa-brands fa-facebook text-[#c76e1e] cursor-pointer'></i>
                  <i className='fa-brands fa-instagram text-[#c76e1e] cursor-pointer'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bloc de Contenu (Carte Navy) */}
        <div className='bg-[#191536] rounded-3xl p-6 md:p-10 shadow-xl border border-white/5'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            {/* Colonne Gauche: Galerie & Points Forts */}
            <div className='lg:col-span-5 grid grid-cols-2 gap-2'>
              {/* Image principale haut */}
              <div className='col-span-2 overflow-hidden h-64'>
                <img
                  src='/images/formation.png'
                  alt='Student'
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Colonne des 3 images à gauche */}
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

              {/* BLOC POINTS FORTS - S'étend verticalement */}
              <div className='bg-[#c76e1e] p-4 flex flex-col gap-4 text-white h-full'>
                <h4 className='text-center font-bold text-lg text-black uppercase tracking-widest'>
                  Points forts
                </h4>

                {/* Compartiment +03 - Campus Modernes */}
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

                {/* Compartiment +02 - Langues */}
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
                    thirteen Ghanaian national public universities. It was
                    founded in 1948, in the British colony of the Gold Coast, as
                    the University College of the Gold Coast, and was originally
                    an affiliate college of the University."
                  </p>
                </section>

                <section>
                  <h3 className='text-[#c76e1e] text-xl font-bold mb-3 uppercase tracking-wide'>
                    Missions
                  </h3>
                  <p className='text-white/80 text-sm leading-relaxed'>
                    "The University of Ghana is the oldest and largest of the
                    thirteen Ghanaian national public universities. It was
                    founded in 1948."
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

                {/* Footer Actions */}
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
