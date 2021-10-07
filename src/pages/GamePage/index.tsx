import { BluePartition } from "../../components/BluePartition";
import { YellowPartition } from "../../components/YellowPartition";

import "./index.scss";

export function GamePage() {
  return (
    <main className="main-game">
      <BluePartition />
      <YellowPartition />
    </main>
  );
}
