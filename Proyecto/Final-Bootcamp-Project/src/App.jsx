import { useState } from 'react'
import { ApiKeyProvider } from '../common/ApiKeyContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Movies from '../pages/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ApiKeyProvider>
        <Movies />
        <div>
          {/* ... restante del código ... */}
          <Switch>
            <Route path="/popular" component={Popular} />
            {/* Agrega rutas para las otras secciones */}
          </Switch>
        </div>
      </ApiKeyProvider>
    </Router>
  )
}

export default App
