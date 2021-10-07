import { Routes } from "./routers/routes";
import { PokemonsProvider } from "./hooks/usePokemonData";

import "./global.scss";

function App() {
  return (
    <PokemonsProvider>
      <Routes />;
    </PokemonsProvider>
  );
}

export default App;
