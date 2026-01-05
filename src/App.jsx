// PASO 1: Importar la herramienta (useContext) y el lugar (GameContext)
import { useContext } from 'react'
import { GameContext } from './context/GameContext'
import Tienda from './components/Tienda';

function App() {

    // PASO 2: "Enchufarse" al contexto
    // Le decimos: "Dame la variable 'lines' y la función 'setLines' que hay en GameContext"
    const { lines, setLines } = useContext(GameContext);

    // Una función simple para probar que funciona
    const hacerClick = () => {
        setLines(lines + 1);
    }

    return (
        // Un poco de estilo Hacker básico (Fondo negro, letras verdes)
        <div style={{ backgroundColor: 'black', color: '#0f0', minHeight: '100vh', padding: '50px', fontFamily: 'monospace' }}>

            <h1>💻 Hacker Clicker</h1>

            {/* PASO 3: Usar el dato en la pantalla */}
            <h2>Líneas de Código: {lines}</h2>

            <button onClick={hacerClick} style={{ padding: '20px', fontSize: '20px', cursor: 'pointer' }}>
                ¡PICAR CÓDIGO!
            </button>


            <Tienda />



        </div>
    )
}

export default App