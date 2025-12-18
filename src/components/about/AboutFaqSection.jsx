import React, { useState } from 'react'

const AboutFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      id: 1,
      question: 'Comment créer un compte sur HIRNA ?',
      answer:
        "Cliquez sur le bouton « S'inscrire » en haut de la page d'accueil. Sélectionnez votre profil (Étudiant, École ou Entreprise), renseignez les informations demandées et validez votre inscription.",
    },
    {
      id: 2,
      question: "Qui peut s'inscrire sur HIRNA ?",
      answer:
        "HIRNA est ouvert aux étudiants, aux écoles et universités africaines, ainsi qu'aux entreprises souhaitant recruter des talents africains.",
    },
    {
      id: 3,
      question: "Comment postuler à une formation ou une offre d'emploi ?",
      answer:
        'Une fois connecté, parcourez les offres disponibles et cliquez sur « Postuler » pour soumettre votre candidature directement via la plateforme.',
    },
    {
      id: 4,
      question: 'Les services de HIRNA sont-ils payants ?',
      answer:
        "L'inscription et la recherche d'opportunités sont gratuites pour les étudiants. Certains services premium peuvent être proposés aux écoles et entreprises.",
    },
    {
      id: 5,
      question: 'Comment contacter le support HIRNA ?',
      answer:
        'Vous pouvez nous contacter via le formulaire de contact sur notre site ou par email à support@hirna.com.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className='relative bg-[#100F20] py-20 md:py-32 overflow-hidden'>
      {/* Question mark en arrière-plan - rapproché vers la gauche */}
      <div className='absolute right-[20%] md:right-[25%] lg:right-[30%] top-[15%] opacity-20 pointer-events-none'>
        <img
          src='/images/question.png'
          alt='Point d interrogation'
          className='h-[300px] md:h-[400px] object-contain'
        />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Titre */}
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8'>
          Besoin
          <br />
          d'éclaircissements
        </h2>

        {/* FAQ Accordéon */}
        <div className='space-y-3'>
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              {/* Question avec gradient et contour orange */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-auto flex items-center justify-between text-left px-4 py-3 rounded-full transition-all duration-300 border border-hirna-orange'
                style={{
                  background:
                    'linear-gradient(to right, #C76E1E 0%, transparent 100%)',
                }}
              >
                <div className='flex items-center gap-2'>
                  <span className='text-white text-sm'>▪</span>
                  <span className='font-semibold text-sm md:text-base text-white'>
                    {faq.question}
                  </span>
                </div>
                <div className='w-6 h-6 rounded-full flex items-center justify-center ml-4 bg-hirna-orange text-white'>
                  <i
                    className={`fa-solid ${
                      openIndex === index ? 'fa-minus' : 'fa-plus'
                    } text-xs`}
                  ></i>
                </div>
              </button>

              {/* Réponse */}
              {openIndex === index && (
                <div className='px-4 py-4 text-white/70 text-sm md:text-base animate-fade-in'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFaqSection
