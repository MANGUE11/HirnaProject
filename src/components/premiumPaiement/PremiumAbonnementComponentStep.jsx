import React, { useState } from 'react'

const PremiumAbonnementComponentStep = () => {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('card') // 'mobile' ou 'card'

  return (
    <div className='min-h-screen bg-[#100F20] text-white font-sans mt-20 pb-10'>
      {/* HEADER FIXED */}
      <header className='px-6 py-4 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <img src='/hirna.png' alt='Hirna Logo' className='h-8' />
            {/* Action sur le bouton Retour générale */}
            <button
              onClick={() => step > 1 && setStep(1)}
              className='flex items-center gap-2 text-white hover:opacity-80 transition-all font-bold'
            >
              <i className='fa-solid fa-arrow-left'></i> Retour
            </button>
          </div>
          <span className='text-[10px] text-[#c76e1e] uppercase tracking-widest hidden md:block'>
            Validation de la commande sécurisée
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className='max-w-7xl mx-auto w-full'>
          <div className='flex justify-between text-[10px] uppercase mb-1'>
            <span>Étape {step} sur 2</span>
            <span>{step === 1 ? '50%' : '100%'} Complété</span>
          </div>
          <div className='w-full bg-white/20 h-2 rounded-full overflow-hidden'>
            <div
              className='bg-[#c76e1e] h-full transition-all duration-500'
              style={{ width: step === 1 ? '50%' : '100%' }}
            ></div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER WHITE CARD */}
      <main className='max-w-4xl mx-auto mt-6 bg-white rounded-[40px] p-6 md:p-12 text-[#100F20] shadow-2xl overflow-hidden mb-10'>
        {step === 1 ? (
          /* STEP 1: RÉCAPITULATIF ET COORDONNÉES */
          <div className='space-y-10'>
            <div className='text-center space-y-2'>
              <h2 className='bg-[#f2e6dc] inline-block px-8 py-2 rounded-full font-bold text-sm'>
                Récapitulatif de votre abonnement
              </h2>
              <p className='text-xs text-gray-500'>
                Vérifiez les détails de votre plan premium
              </p>
            </div>

            {/* ABONNEMENT CARD */}
            <div className='border border-[#c76e1e]/30 rounded-2xl p-6 flex flex-wrap justify-between items-center gap-6'>
              <div className='space-y-2'>
                <h3 className='font-bold text-lg'>École Premium</h3>
                <span className='bg-[#191536] text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold'>
                  École & Université
                </span>
              </div>
              <div className='text-right'>
                <p className='text-2xl font-black'>55 $</p>
                <p className='text-[10px] text-gray-400 font-bold uppercase'>
                  Par Trimestre
                </p>
              </div>
            </div>

            {/* FORMULAIRE COORDONNÉES DE FACTURATION */}
            <div className='space-y-6'>
              <div className='text-center'>
                <h2 className='bg-[#f2e6dc] inline-block px-8 py-2 rounded-full font-bold text-sm mb-2'>
                  Coordonnées de facturation
                </h2>
                <p className='text-xs text-gray-500'>
                  Entrez les informations qui apparaîtront sur votre facture
                </p>
              </div>

              <div className='bg-[#191536] p-8 rounded-[30px] space-y-6'>
                <div className='space-y-2'>
                  <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                    Nom complet *
                  </label>
                  <div className='relative'>
                    <i className='fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                    <input
                      type='text'
                      placeholder='Veuillez entrer votre prénom & nom'
                      className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                    Nom de l'entreprise/ École *
                  </label>
                  <div className='relative'>
                    <i className='fa-solid fa-briefcase absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                    <input
                      type='text'
                      placeholder='Nom de votre organisation'
                      className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                      RCCM
                    </label>
                    <div className='relative'>
                      <i className='fa-solid fa-square-poll-vertical absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                      <input
                        type='text'
                        placeholder='Votre numéro RCCM'
                        className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                      NIF
                    </label>
                    <div className='relative'>
                      <i className='fa-solid fa-square-check absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                      <input
                        type='text'
                        placeholder='Votre numéro NIF'
                        className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                      />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                      E-mail *
                    </label>
                    <div className='relative'>
                      <i className='fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                      <input
                        type='email'
                        placeholder='email@exemple.com'
                        className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                      Tél *
                    </label>
                    <div className='relative'>
                      <i className='fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                      <input
                        type='text'
                        placeholder='+224 6XX XX XX XX'
                        className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                      />
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-[11px] font-bold uppercase text-[#c76e1e] ml-1'>
                    Adresse
                  </label>
                  <div className='relative'>
                    <i className='fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm'></i>
                    <input
                      type='text'
                      placeholder='Adresse de votre organisation'
                      className='w-full bg-white rounded-xl pl-12 pr-4 py-3 text-sm outline-none border border-transparent focus:border-[#c76e1e] text-gray-700'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CHOISIR MODE DE PAIEMENT */}
            <div className='space-y-6'>
              <div className='text-center'>
                <h2 className='bg-[#f2e6dc] inline-block px-8 py-2 rounded-full font-bold text-sm mb-2'>
                  Choisissez votre mode de paiement
                </h2>
                <p className='text-xs text-gray-500'>
                  Sélectionnez la méthode de paiement qui vous convient
                </p>
              </div>

              <div className='bg-[#191536] p-8 rounded-[30px] space-y-4'>
                {/* Mobile Money */}
                <div
                  onClick={() => setPaymentMethod('mobile')}
                  className={`bg-white rounded-2xl p-6 flex items-center justify-between cursor-pointer transition-all border-2 ${
                    paymentMethod === 'mobile'
                      ? 'border-[#c76e1e]'
                      : 'border-transparent'
                  }`}
                >
                  <div className='flex items-center gap-6'>
                    <div className='w-12 h-12 bg-[#f2f2f2] rounded-xl flex items-center justify-center text-[#c76e1e] text-2xl'>
                      <i className='fa-solid fa-mobile-screen-button'></i>
                    </div>
                    <div>
                      <p className='font-bold text-lg'>Mobile Money</p>
                      <p className='text-xs text-gray-400 font-bold'>
                        Orange Money, MTN, ...
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === 'mobile'
                        ? 'border-[#c76e1e]'
                        : 'border-gray-300'
                    }`}
                  >
                    {paymentMethod === 'mobile' && (
                      <div className='w-3 h-3 bg-[#c76e1e] rounded-full'></div>
                    )}
                  </div>
                </div>

                {/* Carte Bancaire */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`bg-white rounded-2xl p-6 space-y-6 cursor-pointer transition-all border-2 ${
                    paymentMethod === 'card'
                      ? 'border-[#c76e1e]'
                      : 'border-transparent'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-6'>
                      <div className='w-12 h-12 bg-[#f2f2f2] rounded-xl flex items-center justify-center text-[#c76e1e] text-2xl'>
                        <i className='fa-solid fa-credit-card'></i>
                      </div>
                      <div>
                        <p className='font-bold text-lg'>Carte bancaire</p>
                        <p className='text-xs text-gray-400 font-bold uppercase'>
                          Visa/Mastercard
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'card'
                          ? 'border-[#c76e1e]'
                          : 'border-gray-300'
                      }`}
                    >
                      {paymentMethod === 'card' && (
                        <div className='w-3 h-3 bg-[#c76e1e] rounded-full'></div>
                      )}
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className='space-y-4 pt-4 border-t border-gray-100'>
                      <div className='space-y-2'>
                        <label className='text-[10px] font-bold uppercase text-[#c76e1e]'>
                          Numéro de carte
                        </label>
                        <div className='relative'>
                          <i className='fa-solid fa-keyboard absolute left-4 top-1/2 -translate-y-1/2 text-gray-300'></i>
                          <input
                            type='text'
                            placeholder='XXX XXX XXXX XXXX'
                            className='w-full border border-gray-200 rounded-xl pl-12 py-3 text-sm outline-none focus:border-[#c76e1e]'
                          />
                        </div>
                      </div>
                      <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                          <label className='text-[10px] font-bold uppercase text-[#c76e1e]'>
                            Date d'expiration
                          </label>
                          <div className='relative'>
                            <i className='fa-solid fa-calendar absolute left-4 top-1/2 -translate-y-1/2 text-gray-300'></i>
                            <input
                              type='text'
                              placeholder='MM/AA'
                              className='w-full border border-gray-200 rounded-xl pl-12 py-3 text-sm outline-none focus:border-[#c76e1e]'
                            />
                          </div>
                        </div>
                        <div className='space-y-2'>
                          <label className='text-[10px] font-bold uppercase text-[#c76e1e]'>
                            CVV
                          </label>
                          <div className='relative'>
                            <i className='fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-300'></i>
                            <input
                              type='text'
                              placeholder='123'
                              className='w-full border border-gray-200 rounded-xl pl-12 py-3 text-sm outline-none focus:border-[#c76e1e]'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* PAIEMENT SÉCURISÉ */}
            <div className='border border-gray-200 rounded-2xl p-6 flex items-center gap-6'>
              <div className='w-14 h-14 border-2 border-[#c76e1e] rounded-full flex items-center justify-center text-[#c76e1e] text-2xl flex-shrink-0'>
                <i className='fa-solid fa-shield-halved'></i>
              </div>
              <div className='space-y-1'>
                <h4 className='font-bold text-lg'>Paiement sécurisé</h4>
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Toutes les transactions sont cryptées et sécurisées. Vos
                  données de paiement ne sont jamais stockées sur nos serveurs.
                </p>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className='w-full bg-[#c76e1e] text-white py-4 rounded-xl font-bold hover:bg-[#a65b18] transition-all shadow-lg text-sm'
            >
              Continuer vers le paiement
            </button>
          </div>
        ) : (
          /* STEP 2: CONFIRMATION DU PAIEMENT */
          <div className='space-y-10'>
            <div className='text-center space-y-2'>
              <h2 className='bg-[#f2e6dc] inline-block px-8 py-2 rounded-full font-bold text-sm'>
                Confirmation du paiement
              </h2>
              <p className='text-xs text-gray-500'>
                Vérifiez les informations avant de valider
              </p>
            </div>

            <div className='border border-[#c76e1e]/30 rounded-2xl p-8 relative'>
              <i className='fa-solid fa-medal absolute top-6 right-6 text-4xl text-[#c76e1e]'></i>
              <div className='grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-tight'>
                <div className='space-y-1'>
                  <p className='text-[#100F20] text-lg font-black normal-case'>
                    École Premium
                  </p>
                  <p className='text-gray-400'>Trimestriel</p>
                </div>
                <div className='text-right space-y-1 text-gray-400'>
                  <p className='text-[#100F20] text-lg font-black normal-case'>
                    55 $
                  </p>
                  <p>3 mois</p>
                </div>
              </div>
              <div className='mt-8 pt-8 border-t border-gray-100 flex justify-between items-center'>
                <span className='font-black uppercase text-sm tracking-wider'>
                  Total à payer
                </span>
                <span className='text-3xl font-black'>55 $</span>
              </div>
            </div>

            <div className='space-y-4 text-white'>
              <div className='bg-[#191536] p-6 rounded-2xl flex items-center gap-6'>
                <i className='fa-solid fa-user text-3xl text-[#c76e1e]'></i>
                <div className='text-xs leading-relaxed'>
                  <p className='font-bold text-[#c76e1e] uppercase mb-1'>
                    Informations de facturation
                  </p>
                  <p className='font-medium text-gray-200'>
                    Jacques Moundekeno
                  </p>
                  <p className='font-medium text-gray-200'>UPM School</p>
                  <p className='font-medium text-gray-200'>+224 62X XXX XXX</p>
                </div>
              </div>

              <div className='bg-[#191536] p-6 rounded-2xl flex items-center gap-6'>
                <i className='fa-solid fa-credit-card text-3xl text-[#c76e1e]'></i>
                <div className='text-xs leading-relaxed'>
                  <p className='font-bold text-[#c76e1e] uppercase mb-1'>
                    Mode de paiement
                  </p>
                  <p className='font-medium text-gray-200'>Carte bancaire</p>
                  <p className='font-medium text-gray-200'>
                    XXXX XXXX XXXX XXXX
                  </p>
                </div>
              </div>

              <div className='bg-[#191536] p-6 rounded-2xl flex items-center gap-6'>
                <i className='fa-solid fa-calendar-days text-3xl text-[#c76e1e]'></i>
                <div className='text-xs leading-relaxed'>
                  <p className='font-bold text-[#c76e1e] uppercase mb-1'>
                    Renouvellement automatique
                  </p>
                  <p className='font-medium text-gray-200'>
                    Vous recevrez des alertes de renouvellement 7 jours et 1
                    jour avant l'échéance.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4 text-xs font-bold text-gray-600'>
              <input
                type='checkbox'
                className='w-5 h-5 accent-[#c76e1e] cursor-pointer'
              />
              <p>
                J'accepte les{' '}
                <span className='underline text-[#100F20]'>
                  conditions générales de vente
                </span>{' '}
                et la{' '}
                <span className='underline text-[#100F20]'>
                  politique de confidentialité
                </span>
              </p>
            </div>

            <div className='space-y-4'>
              <button className='w-full bg-[#c76e1e] text-white py-4 rounded-xl font-bold hover:bg-[#a65b18] transition-all shadow-lg'>
                Confirmer le paiement de 55$
              </button>
              <p className='text-center text-[10px] text-gray-400 font-bold'>
                En confirmant, vous autorisez le prélèvement du montant indiqué
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className='max-w-7xl mx-auto flex justify-between items-center px-6'>
        <span className='text-[10px] uppercase font-black tracking-widest opacity-60'>
          Aide & Ressources
        </span>
        <div className='w-12 h-12 bg-[#c76e1e] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform'>
          <i className='fa-solid fa-question text-white text-xl'></i>
        </div>
      </footer>
    </div>
  )
}

export default PremiumAbonnementComponentStep
