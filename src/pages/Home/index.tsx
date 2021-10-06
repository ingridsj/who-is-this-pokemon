import { imagePokemon } from "../../assets/images";
import { question } from "../../assets/icons";

import "./index.scss";

export function Home() {
  return (
    <main className="main-home">
      <h1>Quem é esse</h1>
      <img src={imagePokemon} alt="Pokémon" />
      <img src={question} alt="Interrogação" />
      <button>Começar</button>
    </main>
  );
}
