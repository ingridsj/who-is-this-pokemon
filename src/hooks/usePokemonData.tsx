import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../service/api";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokemonApiData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonsProviderProps {
  children: ReactNode;
}

const PokemonsContext = createContext<Pokemon>({} as Pokemon);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon>(Object);

  useEffect(() => {
    async function getPokemonsData() {
      const randomPokemonId = Math.floor(Math.random() * 898);

      const { data } = await api.get<PokemonApiData>(
        `pokemon/${randomPokemonId}`
      );
      setPokemons({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      });
    }
    getPokemonsData();
  }, []);

  return (
    <PokemonsContext.Provider value={pokemons}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function usePokemonData() {
  const context = useContext(PokemonsContext);

  return context;
}
