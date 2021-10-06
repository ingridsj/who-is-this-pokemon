import { imagePokemon } from "../../assets/images";
import { question } from "../../assets/icons";
import { GamePage } from "../GamePage/index";

import "./index.scss";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="main-home">
      <h1>Quem é esse</h1>
      <img src={imagePokemon} alt="Pokémon" />
      <img src={question} alt="Interrogação" />

      <Link to="game-page">
        <button>Começar</button>
      </Link>
    </main>
  );
}
