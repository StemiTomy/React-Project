import { useState } from 'react'
import './App.css'
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body';
import { SearchProvider } from './common/SearchContext';

function App() {
  // Prop Drilling
  const [apiKey, setApiKey] = useState('718630c252996a0ac1289f104e53625e');

  return ( // quitar apikey de Body, es solo para mostrarlo y que se enseñe
    <SearchProvider>
      <Header apiKey={apiKey} />
      <Body apiKey={apiKey} />
    </SearchProvider>
  )
}

export default App
