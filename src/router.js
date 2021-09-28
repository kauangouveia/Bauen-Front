import { BrowserRouter,  Route } from "react-router-dom";

import Home from "./pages/Home";
import ListServices from "./pages/ListServices";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
function Router() {
  return (
    <BrowserRouter>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/listservices">
        <ListServices/>
      </Route>
      <Route path="/Login">
        <Login/>
      </Route>
      <Route path="/Register">
        <Register/>
      </Route>
    </BrowserRouter>
  );
}

export default Router;
