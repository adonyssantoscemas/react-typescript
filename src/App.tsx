import { Counter } from './components/Counter'
import { Usuario } from './components/Usuario'
import { TimerPadre } from './components/TimerPadre'
import { ContadorRed } from './components/ContadorRed'
import { Formulario } from './components/Formulario'

function App() {
  return (
    <div className="App">
      <h1>React + TypeScript</h1>
      <hr />

		  <Counter />

      <Usuario /> 

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />
      
      <h2>useReducer</h2>
      <hr />

      <ContadorRed />

      <h2>customHooks</h2>
      <br />
      
      <Formulario />

    </div>
  );
}

export default App;
