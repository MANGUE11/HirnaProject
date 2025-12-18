import React, { useState } from 'react'
import FormationCard from '../FormationCard'

const SchoolInfoTabsSection = () => {
  const [activeTopTab, setActiveTopTab] = useState('formations')
  const [activeBottomTab, setActiveBottomTab] = useState('processus')

  const formationsData = [
    {
      id: 1,
      image: '/images/formation.png',
      type: 'FORMATION EN LIGNE',
      price: '3500$ - 8000$',
      logo: '/images/formation.png',
      category: 'CERTIFICAT',
      title: 'Data Analyst',
      description:
        'Collecter, trier et structurer les données issues de différentes sources...',
      university: 'Université Cheikh Anta Diop de Dakar',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
    },
    {
      id: 2,
      image: '/images/formation.png',
      type: 'FORMATION EN PRESENTIEL',
      price: '3500$ - 8000$',
      logo: '/images/formation.png',
      category: 'LICENCE',
      title: 'Ingénieur logiciel',
      description:
        'Analyser les besoins des utilisateurs et rédiger les spécifications techniques...',
      university: 'Université Cheikh Anta Diop de Dakar',
      domains: 'Santé, Ingénierie, Medecine, Technologies',
      location: 'MARRAKECH, Maroc',
      duration: '06 Mois',
      startDate: 'A partir du 03 Décembre 2025',
    },
  ]

  // Données extraites de l'image des prix
  const prixData = [
    { label: '1. Sciences et Techn...', value: '5000€' },
    { label: '2. Sciences Économi...', value: '7500€' },
    { label: '3. Sciences Sociales et...', value: '5000€' },
    { label: '4. Arts, Médias et Com...', value: '7500€' },
    { label: "5. Sciences de l'Éduca...", value: '6000€' },
  ]

  return (
    <section className="bg-[#100F20] font-['Instrument_Sans']">
      <div className='max-w-6xl mx-auto px-4'>
        {/* --- GROUPE 1 : FORMATIONS / BOURSES --- */}
        <div className='flex flex-col items-center'>
          <div
            className='flex w-full p-2 z-10'
            style={{
              background: 'linear-gradient(to right, #100F20, #433F86)',
            }}
          >
            <div className='flex gap-4 w-full md:w-fit md:mx-auto'>
              <button
                onClick={() => setActiveTopTab('formations')}
                className={`flex-1 md:w-80 py-2.5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 border ${
                  activeTopTab === 'formations'
                    ? 'bg-[#c76e1e] text-white border-transparent shadow-lg'
                    : 'bg-[#191536] text-white border-white/20 hover:bg-[#191536]/80'
                }`}
              >
                Formations
                <span className='bg-black/30 text-xs px-2.5 py-0.5 rounded-full'>
                  02
                </span>
              </button>
              <button
                onClick={() => setActiveTopTab('bourses')}
                className={`flex-1 md:w-80 py-2.5 rounded-xl font-bold text-lg transition-all border ${
                  activeTopTab === 'bourses'
                    ? 'bg-[#c76e1e] text-white border-transparent shadow-lg'
                    : 'bg-[#191536] text-white border-white/20 hover:bg-[#191536]/80'
                }`}
              >
                Bourses disponibles
              </button>
            </div>
          </div>

          <div className='w-full bg-[#191536]/20 p-6 md:p-10 border-x border-white/10'>
            {activeTopTab === 'formations' ? (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center'>
                {formationsData.map((f) => (
                  <div key={f.id} className='w-full max-w-[420px]'>
                    <FormationCard {...f} />
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-16 text-white/50'>
                Aucune bourse disponible pour le moment.
              </div>
            )}
          </div>
        </div>

        {/* --- GROUPE 2 : PROCESSUS / PRIX --- */}
        <div className='flex flex-col items-center'>
          <div
            className='flex w-full p-2 z-10'
            style={{
              background: 'linear-gradient(to right, #100F20, #433F86)',
            }}
          >
            <div className='flex gap-4 w-full md:w-fit md:mx-auto'>
              <button
                onClick={() => setActiveBottomTab('processus')}
                className={`flex-1 md:w-80 py-2.5 rounded-xl font-bold text-lg transition-all border ${
                  activeBottomTab === 'processus'
                    ? 'bg-[#c76e1e] text-white border-transparent shadow-lg'
                    : 'bg-[#191536] text-white border-white/20 hover:bg-[#191536]/80'
                }`}
              >
                Processus de candidature
              </button>
              <button
                onClick={() => setActiveBottomTab('prix')}
                className={`flex-1 md:w-80 py-2.5 rounded-xl font-bold text-lg transition-all border ${
                  activeBottomTab === 'prix'
                    ? 'bg-[#c76e1e] text-white border-transparent shadow-lg'
                    : 'bg-[#191536] text-white border-white/20 hover:bg-[#191536]/80'
                }`}
              >
                Prix
              </button>
            </div>
          </div>

          <div className='w-full bg-[#191536] rounded-b-3xl p-8 md:p-12 border-x border-b border-white/10 shadow-2xl relative overflow-hidden'>
            {activeBottomTab === 'processus' ? (
              <div className='space-y-10 relative z-10 text-left'>
                <div className='border-l-4 border-[#c76e1e] pl-6'>
                  <h4 className='text-[#c76e1e] font-bold text-xl mb-3 uppercase tracking-wide'>
                    Préparez un dossier complet
                  </h4>
                  <ul className='text-white/80 text-sm space-y-2 list-disc list-inside'>
                    <li>Lettre de motivation personnalisée</li>
                    <li>Curriculum vitae (CV)</li>
                    <li>Relevés de notes</li>
                  </ul>
                </div>

                <div className='border-l-4 border-[#c76e1e] pl-6'>
                  <h4 className='text-[#c76e1e] font-bold text-xl mb-3 uppercase tracking-wide'>
                    Remplir le formulaire en ligne
                  </h4>
                  <ul className='text-white/80 text-sm space-y-2 list-disc list-inside'>
                    <li>Inscrivez-vous sur la plateforme de l'école</li>
                    <li>Soumettez votre candidature</li>
                  </ul>
                </div>

                {/* Ajout du point Suivi du dossier */}
                <div className='border-l-4 border-[#c76e1e] pl-6'>
                  <h4 className='text-[#c76e1e] font-bold text-xl mb-3 uppercase tracking-wide'>
                    Suivi du dossier
                  </h4>
                  <p className='text-white/80 text-sm'>
                    Suivre l'avancement de votre demande en ligne sur la
                    plateforme de l'université.
                  </p>
                </div>

                <div className='flex justify-end pt-4'>
                  <button className='bg-[#100F20] border border-[#c76e1e] text-white px-12 py-3 rounded-full font-bold hover:bg-[#c76e1e] transition-all'>
                    Suivre
                  </button>
                </div>
              </div>
            ) : (
              <div className='py-8 text-white relative z-10 max-w-2xl mx-auto'>
                <h4 className='text-[#c76e1e] font-bold text-2xl mb-8 text-center uppercase tracking-widest'>
                  Tarifs par domaine
                </h4>
                <div className='space-y-4'>
                  {prixData.map((item, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center border-b border-white/10 pb-2'
                    >
                      <span className='text-lg font-medium'>{item.label}</span>
                      <span className='text-xl font-bold text-[#c76e1e]'>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='py-20 text-center'>
          <h2 className='text-white text-3xl font-bold mb-8'>
            Trouvez votre voie dès aujourd’hui
          </h2>
          <button className='bg-[#c76e1e] text-white px-12 py-5 rounded-2xl font-bold text-2xl flex items-center gap-4 mx-auto hover:scale-105 transition-transform shadow-2xl'>
            <i className='fa-solid fa-magnifying-glass'></i>
            Postuler maintenant
          </button>
        </div>
      </div>
    </section>
  )
}

export default SchoolInfoTabsSection
