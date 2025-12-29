import React from 'react'

const SchoolHeaderCard = ({
  coverImage,
  logo,
  schoolName,
  tags,
  location,
  website,
  socialLinks,
}) => {
  return (
    <div className="w-full font-['Instrument_Sans']">
      {/* 1. Header & Couverture */}
      <div className='relative w-full h-[300px] md:h-[400px]'>
        <img
          src={coverImage}
          alt={`Couverture de ${schoolName}`}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* 2. Profil & Infos Principales */}
      <div className='max-w-6xl mx-auto px-4 -mt-16 relative z-10'>
        <div className='flex flex-col md:flex-row items-end gap-6 mb-8 text-white text-left'>
          {/* Logo Profile */}
          <div className='bg-white p-2 rounded-xl shadow-2xl'>
            <img
              src={logo}
              alt={`Logo ${schoolName}`}
              className='w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg'
            />
          </div>

          {/* Informations Textuelles via Variables */}
          <div className='flex-1 pb-4'>
            <div className='flex flex-wrap items-center gap-4 mb-2'>
              <h1 className='text-3xl md:text-5xl font-bold'>{schoolName}</h1>
              <span className='bg-[#c76e1e] text-white text-[10px] md:text-xs px-3 py-1 rounded-md font-medium uppercase'>
                {tags}
              </span>
            </div>

            <div className='flex flex-wrap items-center gap-6 text-sm'>
              <span className='flex items-center gap-2'>
                <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>
                {location}
              </span>

              <a
                href={`https://${website}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 hover:text-[#c76e1e] transition-colors'
              >
                <i className='fa-solid fa-globe text-[#c76e1e]'></i>
                {website}
              </a>

              <div className='flex items-center gap-3'>
                <span className='opacity-70'>Nous suivre</span>
                <div className='flex gap-2 text-lg'>
                  <a href={socialLinks?.linkedin} target='_blank'>
                    <i className='fa-brands fa-linkedin text-[#c76e1e]'></i>
                  </a>
                  <a href={socialLinks?.facebook} target='_blank'>
                    <i className='fa-brands fa-facebook text-[#c76e1e]'></i>
                  </a>
                  <a href={socialLinks?.instagram} target='_blank'>
                    <i className='fa-brands fa-instagram text-[#c76e1e]'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolHeaderCard
