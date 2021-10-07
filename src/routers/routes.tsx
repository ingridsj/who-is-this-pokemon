import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game-page" component={GamePage} />
      </Switch>
    </BrowserRouter>
  );
}
