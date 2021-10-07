import { usePokemonData } from "../../hooks/usePokemonData";

export function PokemonShadow() {
  const pokemons = usePokemonData();

  return (
    <div>
      <img src={pokemons.image} alt="" />
    </div>
  );
}
