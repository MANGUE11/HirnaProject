import React from 'react'

const AboutMissionSection = () => {
  const missions = [
    {
      id: 1,
      text: "Faciliter l'accès aux formations, bourses et opportunités professionnelles.",
    },
    {
      id: 2,
      text: 'Offrir un canal efficace de visibilité et de recrutement pour les écoles et les entreprises africaines.',
    },
    {
      id: 3,
      text: 'Connecter les talents africains aux employeurs locaux et internationaux.',
    },
    {
      id: 4,
      text: "Aider les étudiants à mieux s'orienter grâce à des outils adaptés et un accompagnement structuré.",
    },
    {
      id: 5,
      text: 'Encourager une mobilité éducative intra-africaine fluide et simplifiée.',
    },
  ]

  return (
    <section className='relative bg-[#100F20] py-20 md:py-32 overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre - tout en orange et agrandi */}
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-hirna-orange text-center mb-12'>
          Notre mission
        </h2>

        {/* Grid des missions - 3 en haut, 2 en bas centrés */}
        <div className='flex flex-col gap-4'>
          {/* Ligne 1 - 3 cards */}
          <div className='grid md:grid-cols-3 gap-4'>
            {missions.slice(0, 3).map((mission) => (
              <div
                key={mission.id}
                className='border border-hirna-orange rounded-2xl p-5'
                style={{
                  background:
                    'linear-gradient(to bottom, #191536 0%, #191536 85%, rgba(199, 110, 30, 0.15) 100%)',
                }}
              >
                <p className='text-white/80 text-base text-center'>
                  {mission.text}
                </p>
              </div>
            ))}
          </div>

          {/* Ligne 2 - 2 cards centrées */}
          <div className='grid md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
            {missions.slice(3, 5).map((mission) => (
              <div
                key={mission.id}
                className='border border-hirna-orange rounded-2xl p-5'
                style={{
                  background:
                    'linear-gradient(to bottom, #191536 0%, #191536 85%, rgba(199, 110, 30, 0.15) 100%)',
                }}
              >
                <p className='text-white/80 text-base text-center'>
                  {mission.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionSection
