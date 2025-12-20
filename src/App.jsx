import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FormationBourse from './pages/FormationBourse'
import Formation from './pages/Formation'
import Bourse from './pages/Bourse'
import SchoolDetail from './pages/SchoolDetail'
import DetailFormation from './pages/DetailFormation'
import DetailBourse from './pages/DetailBourse'
import Recrutement from './pages/Recrutement'
import DetailEntreprise from './pages/DetailEntreprise'
import ListeOffre from './pages/ListeOffre'
import DetailOffre from './pages/DetailOffre'
import ProcedureCandidature from './pages/ProcedureCandidature'
import Ressources from './pages/Ressources'
import RessourcesDetail from './pages/RessourcesDetail'
import PremiumAbonnement from './pages/PremiumAbonnement'
import PremiumAbonnementStep from './pages/PremiumAbonnementStep'
import PremiumDashboard from './pages/PremiumDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/formationsBourse' element={<FormationBourse />} />
        <Route path='/formation' element={<Formation />} />
        <Route path='/bourse' element={<Bourse />} />
        <Route path='/schoolDetail' element={<SchoolDetail />} />
        <Route path='/detailFormation' element={<DetailFormation />} />
        <Route path='/detailBourse' element={<DetailBourse />} />
        <Route path='/recrutement' element={<Recrutement />} />
        <Route path='/detailEntreprise' element={<DetailEntreprise />} />
        <Route path='/listeOffre' element={<ListeOffre />} />
        <Route path='/detailOffre' element={<DetailOffre />} />
        <Route
          path='/procedureCandidature'
          element={<ProcedureCandidature />}
        />
        <Route path='/ressources' element={<Ressources />} />
        <Route path='/ressourcesDetail' element={<RessourcesDetail />} />
        <Route path='/premiumAbonnement' element={<PremiumAbonnement />} />
        <Route
          path='/premiumAbonnementStep'
          element={<PremiumAbonnementStep />}
        />
        <Route path='/premiumDashboard' element={<PremiumDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
