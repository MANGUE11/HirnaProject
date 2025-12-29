import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faFileAlt,
  faEuroSign,
  faBuilding,
  faUserGraduate,
  faGraduationCap,
  faBriefcase,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const growthData = [
  { name: 'Jan', users: 1200 },
  { name: 'Fév', users: 1500 },
  { name: 'Mar', users: 1800 },
  { name: 'Avr', users: 2100 },
  { name: 'Mai', users: 2500 },
  { name: 'Jun', users: 3000 },
]

const pieData = [
  { name: 'Candidats', value: 2250, color: '#100F20' },
  { name: 'Ecoles', value: 32, color: '#433F86' },
  { name: 'Entreprises', value: 120, color: '#D67D29' },
]

const DashboardContent = () => {
  return (
    /* pt-20 assure que le contenu commence APRÈS ton menu fixe */
    <div className='space-y-8 animate-fadeIn pt-20 px-4'>
      {/* Row 1: Top Stats Boxes */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {[
          {
            label: 'Utilisateurs totaux',
            val: '2,847',
            trend: '+12%',
            icon: faUsers,
          },
          {
            label: 'Contenus publiés',
            val: '342',
            trend: '+8%',
            icon: faFileAlt,
          },
          {
            label: 'Revenus ce mois',
            val: '€12,450',
            trend: '+5%',
            icon: faEuroSign,
          },
        ].map((item, i) => (
          <div
            key={i}
            className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'
          >
            <div className='flex items-center gap-3 text-gray-500 mb-4'>
              <FontAwesomeIcon icon={item.icon} className='text-[#D67D29]' />
              <span className='text-sm font-bold'>{item.label}</span>
            </div>
            <div className='text-3xl font-black text-[#100F20]'>{item.val}</div>
            <div className='text-[#D67D29] text-xs font-bold mt-1'>
              {item.trend}{' '}
              <span className='text-gray-400'>vs mois dernier</span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Grid Stats & Engagement Card */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='grid grid-cols-2 gap-4'>
          {[
            { n: '120', t: 'entreprises', icon: faBuilding },
            { n: '2.250', t: 'candidats', icon: faUserGraduate },
            { n: '32', t: 'écoles', icon: faGraduationCap },
            { n: '310', t: 'offres actives', icon: faBriefcase },
          ].map((box, i) => (
            <div
              key={i}
              className='bg-[#100F20] border border-white/10 p-5 rounded-2xl flex flex-col justify-center'
            >
              <div className='text-2xl font-black text-white'>{box.n}</div>
              <div className='flex items-center gap-2 text-[#D67D29] text-sm font-bold'>
                <FontAwesomeIcon icon={box.icon} />
                <span className='capitalize'>{box.t}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-[#D67D29] rounded-2xl p-8 text-white relative overflow-hidden'>
          <div className='relative z-10'>
            <h3 className='text-lg font-bold leading-tight w-2/3 uppercase tracking-wider'>
              Taux d'engagement HIRNA
            </h3>
            <div className='text-6xl font-black my-4'>68%</div>
            <div className='text-white/80 font-bold'>
              +5% <span className='font-normal'>vs mois dernier</span>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className='absolute right-8 top-1/2 -translate-y-1/2 text-8xl text-white/20'
          />
        </div>
      </div>

      {/* Row 3: Charts */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white p-8 rounded-3xl shadow-sm h-[400px]'>
          <h3 className='text-gray-800 font-bold mb-8'>
            Croissance utilisateurs
          </h3>
          <ResponsiveContainer width='100%' height='80%'>
            <LineChart data={growthData}>
              <CartesianGrid
                strokeDasharray='3 3'
                vertical={false}
                stroke='#f0f0f0'
              />
              <XAxis
                dataKey='name'
                stroke='#999'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#999'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='users'
                stroke='#D67D29'
                strokeWidth={3}
                dot={{ r: 4, fill: '#D67D29' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className='bg-white p-8 rounded-3xl shadow-sm h-[400px] flex flex-col'>
          <h3 className='text-gray-800 font-bold mb-4'>
            Répartition des utilisateurs
          </h3>
          <div className='flex-1'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={0} /* MIS À 0 POUR UN DISQUE PLEIN */
                  outerRadius={100} /* LÉGÈREMENT AGRANDI */
                  paddingAngle={2}
                  dataKey='value'
                  stroke='none'
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 4: Activities & Popular Contents */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10'>
        <div className='bg-white p-8 rounded-3xl shadow-sm'>
          <h3 className='text-[#100F20] font-black text-lg mb-6'>
            Dernières activités
          </h3>
          <div className='space-y-4'>
            {[
              { act: 'Nouveau inscrit', date: '01 Janv.' },
              { act: 'Offre ajoutée', date: '02 Janv.' },
              { act: 'Paiement effectuée', date: '03 Janv.' },
              { act: 'Nouveau inscrit', date: '04 Janv.' },
            ].map((row, i) => (
              <div
                key={i}
                className='flex justify-between items-center bg-[#FDF8F3] p-3 rounded-lg'
              >
                <span className='text-sm font-bold text-gray-700'>
                  • {row.act}
                </span>
                <span className='text-sm font-bold text-[#D67D29]'>
                  {row.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[#D67D29] p-8 rounded-3xl shadow-sm text-white'>
          <h3 className='font-black text-lg mb-6'>Contenus populaires</h3>
          <div className='space-y-4'>
            {[
              {
                id: 1,
                title: 'Stage Data Analyst',
                cat: 'Offre',
                views: '1245',
              },
              {
                id: 2,
                title: 'Formation Dév. OPS',
                cat: 'Formation',
                views: '987',
              },
              {
                id: 3,
                title: "Bourse d'excellence 2026",
                cat: 'Bourse',
                views: '856',
              },
              {
                id: 4,
                title: 'Les tendances du recrutement',
                cat: 'Article',
                views: '734',
              },
            ].map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between border-b border-white/20 pb-3'
              >
                <div className='flex items-center gap-4'>
                  <span className='w-8 h-8 rounded-full bg-white text-[#D67D29] flex items-center justify-center font-bold text-sm'>
                    {item.id}
                  </span>
                  <div>
                    <p className='text-sm font-bold leading-none'>
                      {item.title}
                    </p>
                    <p className='text-[10px] opacity-70 mt-1'>{item.cat}</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-sm font-bold'>{item.views}</p>
                  <p className='text-[10px] opacity-70'>vues</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
