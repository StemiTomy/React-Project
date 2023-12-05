import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Movies from './pages/Movies'
import Popular from './pages/Popular';

function App() {
  // Prop Drilling
  const [apiKey, setApiKey] = useState('718630c252996a0ac1289f104e53625e');

  return (
    <Router>
      <div>
        <Routes apiKey={apiKey}>
        <Route path="/" element={<Movies apiKey={apiKey}/>} />
          <Route path="/popular" element={<Popular apiKey={apiKey}/>} />
            
        </Routes>
      </div>
    </Router>
  )
}

export default App
