import React from 'react'
// Note : Si vous utilisez un paquet npm comme @fortawesome/react-fontawesome,
// vous devrez remplacer les balises <i> par les composants <FontAwesomeIcon />
// et importer les icônes spécifiques. Pour ce code, j'utilise la balise <i>
// supposant que Font Awesome est chargé globalement (ex: via CDN).

const FindSection = () => {
  const features = [
    {
      id: 1,
      // ICÔNE 1 : Lien/Accès (fa-link)
      icon: <i className='fa-solid fa-link text-white text-base'></i>,
      title: 'Accès simplifié',
      description:
        'aux formations et aux bourses pour les étudiants africains.',
    },
    {
      id: 2,
      // ICÔNE 2 : Meilleure Employabilité (fa-circle-check, similaire à l'image)
      icon: <i className='fa-solid fa-circle-check text-white text-base'></i>,
      title: 'Meilleure employabilité',
      description: "Accès direct aux offres d'emploi et de stage.",
    },
    {
      id: 3,
      // ICÔNE 3 : Carte d'Afrique (fa-map-location-dot)
      icon: (
        <i className='fa-solid fa-map-location-dot text-white text-base'></i>
      ),
      title: 'Valorisation des écoles locales',
      description: "Développement d'un marché africain.",
    },
  ]

  return (
    <section
      className='relative bg-hirna-dark pb-32 bg-no-repeat bg-right pt-40 min-h-[95vh]'
      style={{
        backgroundImage: "url('/images/imageStudent.png')",
        backgroundSize: '70%',
        backgroundPosition: '75% center',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* GRID 2 colonnes (laissé intact) */}
        <div className='relative grid lg:grid-cols-2 gap-6 items-center'>
          <div className='pt-4 max-w-xl lg:max-w-2xl w-full'>
            <h2 className='text-6xl md:text-6xl font-bold text-white mb-6 leading-tight'>
              Trouvez <span className='text-hirna-orange'>l'école</span> ou
              <br />
              <span className='text-hirna-orange'>l'emploi</span> qui vous
              <br />
              correspond
            </h2>
            <p className='text-white/80 text-lg md:text-xl mb-8 max-w-lg'>
              HIRNA connecte les jeunes talents africains aux meilleures
              opportunités éducatives et professionnelles.
            </p>
            <button className='inline-flex items-center gap-2 bg-transparent border-2 border-hirna-orange text-hirna-orange px-8 py-4 text-lg rounded-xl font-semibold hover:bg-hirna-orange hover:text-white transition-all duration-300'>
              {/* Icône SVG d'utilisateur pour le bouton (Conservée ici pour le style du bouton) */}
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
              S'inscrire / Se connecter
            </button>
          </div>
          <div></div>
        </div>
      </div>

      {/* Feature Cards - Conteneur principal absolu : MAX-W-6XL APPLIQUÉ ICI */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-4 z-20'>
        {/* Grille des 3 blocs atomiques */}
        <div className='grid md:grid-cols-3 shadow-xl'>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              // *** VOTRE BLOC ATOMIQUE TRANSPARENT ET RELATIF ***
              className='relative z-20'
            >
              {/* Icône flottante (absolute par rapport au parent invisible) */}
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                <div className='w-10 h-10 rounded-full bg-hirna-orange flex items-center justify-center shadow-lg'>
                  {feature.icon}
                </div>
              </div>

              {/* Bloc de Contenu (La carte blanche interne) */}
              <div
                className={`relative text-center pt-12 pb-6 px-6 bg-white h-full
                      ${index === 0 ? 'md:rounded-l-2xl' : ''}
                      ${index === features.length - 1 ? 'md:rounded-r-2xl' : ''}
                      ${features.length === 1 ? 'rounded-2xl' : ''}
                  `}
              >
                {/* Séparateur vertical (Desktop seulement) */}
                {index !== features.length - 1 && (
                  <div className='hidden md:block absolute right-0 top-0 h-full w-px bg-gray-200 z-10'></div>
                )}

                {/* Séparateur horizontal (Mobile seulement) */}
                {index !== features.length - 1 && (
                  <div className='md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-11/12 h-px bg-gray-200'></div>
                )}

                <h3
                  // TAILLE DU TITRE: 47px, INTERLIGNE RÉDUIT (lineHeight: '1.1')
                  className='font-bold text-hirna-orange mb-2 mt-0'
                  style={{ fontSize: '40px', lineHeight: '1.1' }}
                >
                  {feature.title}
                </h3>

                <p
                  // TAILLE DE LA DESCRIPTION: 20px
                  className='text-hirna-dark/70'
                  style={{ fontSize: '20px' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FindSection
