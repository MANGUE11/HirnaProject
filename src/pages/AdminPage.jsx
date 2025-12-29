import React, { useState } from 'react'
import { Header, Footer } from '../components'
import SideBarComponent from '../components/Admin/SideBarComponent'
import DashboardContent from '../components/Admin/DashboardContent'
import UsersManagement from '../components/Admin/UsersManagement'
import ContentManagement from '../components/Admin/ContentManagement'
import PaymentManagement from '../components/Admin/PaymentManagement'
import NotificationManagement from '../components/Admin/NotificationManagement'

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        // On retourne directement le composant que nous venons de créer
        return <DashboardContent />

      case 'utilisateurs':
        return <UsersManagement />

      case 'contenus':
        return <ContentManagement />

      case 'paiements':
        return <PaymentManagement />

      case 'notification':
        return <NotificationManagement />

      default:
        return <DashboardContent />
    }
  }

  return (
    <div className='min-h-screen bg-[#100F20] flex flex-col'>
      <Header />

      <div className='flex flex-1 overflow-hidden pt-4'>
        {/* pt-4 pour décoller un peu du header si nécessaire */}

        <SideBarComponent activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Zone de contenu principale avec défilement indépendant */}
        <main className='flex-1 overflow-y-auto bg-[#0a0a12] p-6 md:p-10'>
          {renderContent()}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default AdminPage
