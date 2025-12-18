import React from 'react'

const AboutTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Aminata Diallo',
      role: 'Cheffe de projet',
      photo: '/images/team/member1.png',
    },
    {
      id: 2,
      name: 'Khady Diop',
      role: 'Assistante com',
      photo: '/images/team/member2.png',
    },
    {
      id: 3,
      name: 'Oumar Sidibé',
      role: 'Développeur web',
      photo: '/images/team/member3.png',
    },
    {
      id: 4,
      name: 'Khady Diop',
      role: 'Assistante com',
      photo: '/images/team/member4.png',
    },
    {
      id: 5,
      name: 'Oumar Sidibé',
      role: 'Développeur web',
      photo: '/images/team/member5.png',
    },
  ]

  return (
    <section className='relative bg-[#100F20] py-20 md:py-32 overflow-hidden'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre */}
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-hirna-orange text-center mb-4'>
          Notre équipe
        </h2>

        {/* Sous-titre */}
        <p className='text-white/70 text-center mb-12'>
          Les membres de l'équipe
        </p>

        {/* Grand card container - format plus carré */}
        <div
          className='border border-hirna-orange rounded-3xl p-8 md:p-10'
          style={{
            background:
              'linear-gradient(to bottom, #191536 0%, #191536 85%, rgba(199, 110, 30, 0.15) 100%)',
          }}
        >
          {/* Grid des membres - gap uniforme */}
          <div className='flex flex-col gap-6'>
            {/* Ligne 1 - 3 membres - gap réduit */}
            <div className='flex justify-center gap-2 md:gap-4'>
              {teamMembers.slice(0, 3).map((member) => (
                <div key={member.id} className='text-center'>
                  {/* Photo */}
                  <div className='w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 rounded-2xl overflow-hidden bg-hirna-orange/80'>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  {/* Nom */}
                  <h3 className='text-white font-bold text-base md:text-lg'>
                    {member.name}
                  </h3>
                  {/* Rôle */}
                  <p className='text-hirna-orange text-xs md:text-sm'>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Ligne 2 - 2 membres centrés */}
            <div className='flex justify-center gap-2 md:gap-4'>
              {teamMembers.slice(3, 5).map((member) => (
                <div key={member.id} className='text-center'>
                  {/* Photo */}
                  <div className='w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 rounded-2xl overflow-hidden bg-hirna-orange/80'>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  {/* Nom */}
                  <h3 className='text-white font-bold text-base md:text-lg'>
                    {member.name}
                  </h3>
                  {/* Rôle */}
                  <p className='text-hirna-orange text-xs md:text-sm'>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection
