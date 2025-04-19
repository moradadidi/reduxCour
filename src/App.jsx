
import './App.css'
import Article from './components/Article'
import Cart from './components/Cart'
import Counter from './components/Counter'
import CarDetail from './components/exercice3/CarDetail'
import CarList from './components/exercice3/CarList'
import CarSimulation from './components/exercice3/CarSimulation'
import Home from './components/exercice3/Home'
import SimulationHistory from './components/exercice3/SimulationHistory'
import Panier from './components/Panier'
import Students from './components/Students'
import Students2 from './components/Students2'
import Users from './components/Users'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="w-full">
      <nav className="bg-gray-800 p-4">
      <ul className="flex list-none m-0 p-0">
        <li className="mx-4">
        <a href="/Accueil" className="text-white no-underline hover:underline">Accueil</a>
        </li>
        <li className="mx-4">
        <a href="/voitres" className="text-white no-underline hover:underline">Voitres</a>
        </li>
        <li className="mx-4">
        <a href="/simulation" className="text-white no-underline hover:underline">Simulation</a>
        </li>
        <li className="mx-4">
        <a href="/history" className="text-white no-underline hover:underline">Students2</a>
        </li>
      </ul>
      </nav>
      <Router>
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/voitres" element={<CarList />} />
        <Route path="/voitres/car" element={<CarDetail />} />
        <Route path="/simulation" element={<CarSimulation />} />
        <Route path="/history" element={<SimulationHistory />} />
        </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App
