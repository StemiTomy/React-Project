import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './mercenarios.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
        <nav>
            <a>POPULAR</a>
            <a>TOP RATED</a>
            <a>UPCOMING</a>
            <a>SEARCH</a>
        </nav>

        <div class="main">
            <div class="info">
                <div>
                    <span class="genero">ACCIÓN</span>
                    <span class="genero">AVENTURA</span>
                    <span class="genero">SUSPENSE</span>
                </div>

                <h1>Los mercenarios 4</h1>

                <div class="puntuacion">6.475 
                    <span>/ 702</span>
                </div>

                <h3>2023-09-15</h3>

                <p>Cuarta entrega de la saga Los Mercenarios.
                El veterano mercenario Barney “Esquizo” Ross
                (Sylvester Stallone) y su equipo de estrellas,
                formado por los hombres más duros (Jason Statham,
                Dolph Lundgren, 50 Cent, Megan Fox…), afrontan un
                nuevo desafío, en una trama cargada de acción.
                Para superarlo y salir airosos, deberán recurrir
                a su ingenio, experiencia y a la fuerza bruta que
                los caracteriza.</p>
                <h5>Revenue: $58000000</h5>
                <h5>Budget: $100000000</h5>
            </div>
            <div class="img">
                <img src={logo} alt="Cadena Perpetua"/>
            </div>
        </div>

        <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>

    </body>
  )
}

export default App
