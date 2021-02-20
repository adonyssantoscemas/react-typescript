import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { DataProvider } from "./context/DataContext";
import { BotonCambiarData } from "./components/BotonCambiarData";

function App() {
  return (
    <DataProvider>
      <div className="App">
        
        <Pagina1 />
        <Pagina2 />
        
        <BotonCambiarData />

      </div>
    </DataProvider>
  );
}

export default App;
