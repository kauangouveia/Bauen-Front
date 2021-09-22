import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/Home">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default Router;
