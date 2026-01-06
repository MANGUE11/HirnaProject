import React from 'react'
import { Header, Footer } from '../components'
import InscriptionPrincipalPage from '../components/inscription/InscriptionPrincipalPage'

const InscriptionPage = () => {
  return (
    <div className='min-h-screen bg-[#100F20]'>
      <Header />
      <main>
        <InscriptionPrincipalPage />
      </main>
      <Footer />
    </div>
  )
}

export default InscriptionPage
