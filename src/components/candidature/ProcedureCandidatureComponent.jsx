import React from 'react'

const ProcedureCandidatureComponent = () => {
  return (
    <div className='bg-[#100F20] text-white p-4 md:p-8 font-sans min-h-screen pt-24'>
      {/* mt-16 ajouté pour l'espace entre le menu et la carte */}
      <div className='max-w-4xl bg-[#191536] mx-auto border border-gray-800 rounded-2xl p-8 shadow-2xl mt-16'>
        {/* HEADER SECTION */}
        <div className='flex justify-between items-start mb-6'>
          <div>
            <div className='flex items-center gap-4 mb-2'>
              <span className='bg-[#c76e1e] text-black px-4 py-1 rounded-md font-bold text-xl'>
                Candidature
              </span>
              <h1 className='text-2xl font-bold'>Développeur Web</h1>
            </div>
            <div className='flex gap-6 text-[11px] text-gray-400 italic'>
              <span>Publié le : 15/10/2025</span>
              <span>Date limite : 31/11/2025</span>
            </div>
          </div>

          {/* LOGO : Radius augmenté et bordure mince blanche */}
          <div className='border border-white p-0.5 rounded-xl'>
            <div className='bg-white w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg'>
              <img
                src='/images/orange.png'
                alt='Orange'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* INFO BAR */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-[11px] border-b border-gray-700 pb-6 mb-8'>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-file-contract text-[#c76e1e]'></i>
            <span>
              <strong>Contrat :</strong> CDI
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-briefcase text-[#c76e1e]'></i>
            <span>
              <strong>Expérience :</strong> 01-03 ans
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-location-dot text-[#c76e1e]'></i>
            <span>
              <strong>Lieu :</strong> Conakry
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-clock text-[#c76e1e]'></i>
            <span>
              <strong>Horaires :</strong> 08h - 17h
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-graduation-cap text-[#c76e1e]'></i>
            <span>
              <strong>Niveau d'études :</strong> Bac +4
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <i className='fa-solid fa-money-bill-wave text-[#c76e1e]'></i>
            <span>
              <strong>Salaire :</strong> À négocier
            </span>
          </div>
        </div>

        {/* MAIN POSTULER BUTTON */}
        <button className='w-full bg-[#c76e1e] text-black font-bold py-4 rounded-xl mb-12 hover:bg-[#a65b18] transition-colors text-lg'>
          Postuler pour le poste de Développeur Web chez Orange
        </button>

        {/* HIRNA PROFILE SECTION */}
        <div className='text-center mb-12'>
          <h3 className='text-lg font-bold mb-4 uppercase tracking-wider'>
            Postuler avec profil HIRNA
          </h3>
          <button className='w-full bg-[#c76e1e] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#a65b18] transition-all'>
            Postulez maintenant{' '}
            <i className='fa-solid fa-paper-plane text-xs'></i>
          </button>
        </div>

        <div className='border-t border-gray-800 my-10 relative'>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#191536] px-4 text-sm text-gray-500'>
            OU
          </span>
        </div>

        {/* MANUAL FORM SECTION */}
        <h3 className='text-center text-lg font-bold mb-8'>
          Postuler en ajoutant les informations ci-dessous
        </h3>

        <div className='space-y-6'>
          {/* CV SECTION */}
          <div className='border border-gray-700 rounded-xl p-6'>
            <label className='block text-[#c76e1e] font-bold mb-4 uppercase text-sm'>
              Sélectionnez votre CV
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='Veuillez ajoutez votre CV'
                className='w-full bg-white text-gray-400 py-3 px-4 rounded-full text-sm outline-none cursor-pointer'
                readOnly
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400'>
                <span className='text-[10px] italic'>Optionnel</span>
                <i className='fa-solid fa-circle-plus text-[#c76e1e] text-lg'></i>
              </div>
            </div>
          </div>

          {/* QUESTIONNAIRE SECTION */}
          <div className='border border-gray-700 rounded-xl p-6'>
            <label className='block text-[#c76e1e] font-bold mb-4 uppercase text-sm'>
              Questionnaire
            </label>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Veuillez saisir votre ...'
                className='w-full bg-white text-black py-3 px-4 rounded-xl text-sm outline-none'
              />
              <input
                type='text'
                placeholder='Veuillez saisir votre ...'
                className='w-full bg-white text-black py-3 px-4 rounded-xl text-sm outline-none'
              />
              <input
                type='text'
                placeholder='Veuillez saisir votre ...'
                className='w-full bg-white text-black py-3 px-4 rounded-xl text-sm outline-none'
              />
            </div>
          </div>

          {/* MESSAGE SECTION */}
          <div className='border border-gray-700 rounded-xl p-6'>
            <label className='block text-[#c76e1e] font-bold mb-4 uppercase text-sm'>
              Message/lettre de motivation
            </label>
            <div className='relative'>
              <textarea
                placeholder='Veuillez saisir votre motivation en quelques lignes pour ce poste'
                className='w-full bg-white text-black py-4 px-4 rounded-xl text-sm outline-none min-h-[120px] resize-none'
              />
              <span className='absolute bottom-4 right-4 text-[10px] text-gray-400 italic'>
                Optionnel
              </span>
            </div>
          </div>

          {/* FINAL SEND BUTTON */}
          <button className='w-full bg-[#c76e1e] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#a65b18] transition-all mt-8'>
            Envoyez maintenant{' '}
            <i className='fa-solid fa-paper-plane text-xs'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProcedureCandidatureComponent
