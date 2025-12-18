import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FormationBourse from './pages/FormationBourse'
import Formation from './pages/Formation'
import Bourse from './pages/Bourse'
import SchoolDetail from './pages/SchoolDetail'
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
      </Routes>
    </Router>
  )
}

export default App
