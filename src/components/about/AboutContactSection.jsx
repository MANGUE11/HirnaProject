import React from 'react'

const AboutContactSection = () => {
  return (
    <section className='relative bg-[#100F20] py-20 md:py-32 overflow-hidden'>
      <div className='max-w-3xl mx-auto px-4'>
        <div className='grid grid-cols-1 gap-0 shadow-2xl'>
          {/* Bloc orange (Haut) */}
          <div className='bg-hirna-orange py-10 px-6 md:px-12 rounded-t-3xl'>
            <div className='flex flex-col gap-6'>
              {/* Email - Retour au fond sombre original */}
              <div className='flex items-center gap-4 pb-4 border-b border-white/20'>
                <div className='w-10 h-10 rounded-full bg-[#191536] flex items-center justify-center shrink-0 shadow-sm'>
                  <i className='fa-solid fa-envelope text-hirna-orange text-sm'></i>
                </div>
                <div>
                  <p className='text-[#191536] text-[10px] uppercase tracking-wider font-bold'>
                    E-mail
                  </p>
                  <p className='text-white font-bold text-base'>
                    contact@hirna.com
                  </p>
                </div>
              </div>

              {/* Téléphone - Retour au fond sombre original */}
              <div className='flex items-center gap-4 py-2 border-b border-white/20'>
                <div className='w-10 h-10 rounded-full bg-[#191536] flex items-center justify-center shrink-0 shadow-sm'>
                  <i className='fa-solid fa-phone text-hirna-orange text-sm'></i>
                </div>
                <div>
                  <p className='text-[#191536] text-[10px] uppercase tracking-wider font-bold'>
                    Téléphone
                  </p>
                  <p className='text-white font-bold text-base'>620 000 000</p>
                </div>
              </div>

              {/* Localisation - Retour au fond sombre original */}
              <div className='flex items-center gap-4 py-2'>
                <div className='w-10 h-10 rounded-full bg-[#191536] flex items-center justify-center shrink-0 shadow-sm'>
                  <i className='fa-solid fa-location-dot text-hirna-orange text-sm'></i>
                </div>
                <div>
                  <p className='text-[#191536] text-[10px] uppercase tracking-wider font-bold'>
                    Localisation
                  </p>
                  <p className='text-white font-bold text-base'>
                    Kipé, Conakry
                  </p>
                </div>
              </div>

              {/* Réseaux Sociaux */}
              <div className='pt-4 border-t border-white/20'>
                <p className='text-[#191536] text-[10px] uppercase tracking-wider font-bold mb-3'>
                  Suivez-nous
                </p>
                <div className='flex items-center gap-4'>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full border border-[#191536] flex items-center justify-center text-[#191536] hover:bg-[#191536] hover:text-white transition-all'
                  >
                    <i className='fa-brands fa-facebook-f text-base'></i>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full border border-[#191536] flex items-center justify-center text-[#191536] hover:bg-[#191536] hover:text-white transition-all'
                  >
                    <i className='fa-brands fa-linkedin-in text-base'></i>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full border border-[#191536] flex items-center justify-center text-[#191536] hover:bg-[#191536] hover:text-white transition-all'
                  >
                    <i className='fa-brands fa-youtube text-base'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc blanc (Bas) */}
          <div className='bg-white py-12 px-6 md:px-12 rounded-b-3xl'>
            <div className='text-center mb-10'>
              <h3 className='text-hirna-orange text-2xl font-bold mb-2'>
                Contactez-nous
              </h3>
              <p className='text-gray-500 text-sm w-full'>
                Nous sommes à votre écoute. N'hésitez pas à nous contacter.
              </p>
            </div>

            <form className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[#191536] text-sm font-semibold ml-1'>
                    Prénom
                  </label>
                  <input
                    type='text'
                    placeholder='Votre prénom'
                    className='w-full px-4 py-3 border border-hirna-orange/40 rounded-xl focus:border-hirna-orange focus:ring-1 focus:ring-hirna-orange outline-none transition-all text-sm'
                  />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[#191536] text-sm font-semibold ml-1'>
                    Nom
                  </label>
                  <input
                    type='text'
                    placeholder='Votre nom'
                    className='w-full px-4 py-3 border border-hirna-orange/40 rounded-xl focus:border-hirna-orange focus:ring-1 focus:ring-hirna-orange outline-none transition-all text-sm'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[#191536] text-sm font-semibold ml-1'>
                    E-mail
                  </label>
                  <input
                    type='email'
                    placeholder='exemple@mail.com'
                    className='w-full px-4 py-3 border border-hirna-orange/40 rounded-xl focus:border-hirna-orange focus:ring-1 focus:ring-hirna-orange outline-none transition-all text-sm'
                  />
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-[#191536] text-sm font-semibold ml-1'>
                    Téléphone
                  </label>
                  <input
                    type='tel'
                    placeholder='Votre numéro'
                    className='w-full px-4 py-3 border border-hirna-orange/40 rounded-xl focus:border-hirna-orange focus:ring-1 focus:ring-hirna-orange outline-none transition-all text-sm'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-[#191536] text-sm font-semibold ml-1'>
                  Sujet
                </label>
                <input
                  type='text'
                  placeholder='Objet de votre demande'
                  className='w-full px-4 py-3 border border-hirna-orange/40 rounded-xl focus:border-hirna-orange focus:ring-1 focus:ring-hirna-orange outline-none transition-all text-sm'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-[#191536] text-sm font-semibold ml-1'>
                  Votre message
                </label>
                <textarea
                  rows={4}
                  placeholder='Comment pouvons-nous vous aider ?'
                  className='w-full px-4 py-3 border border-hirna-orange/40 rounded-xl focus:border-hirna-orange focus:ring-1 focus:ring-hirna-orange outline-none transition-all text-sm resize-none'
                ></textarea>
              </div>

              <div className='pt-6'>
                <button
                  type='submit'
                  className='w-full bg-hirna-orange text-white py-4 rounded-full font-bold hover:bg-[#a85a18] transition-all flex items-center justify-center gap-2 shadow-lg shadow-hirna-orange/20 uppercase tracking-wide text-sm'
                >
                  Envoyer le message{' '}
                  <i className='fa-solid fa-paper-plane text-xs'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContactSection
