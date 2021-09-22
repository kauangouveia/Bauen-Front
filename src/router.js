import { BrowserRouter,  Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
    </BrowserRouter>
  );
}

export default Router;
