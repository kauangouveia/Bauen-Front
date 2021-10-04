import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListServices from "./pages/ListServices";
import FastServices from "./pages/FastServices";
import PendingServices from "./pages/PendingServices";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Register2 from "./pages/Register/register2";
import Register3 from "./pages/Register/register3";
import Register4 from "./pages/Register/register4";
import Register5 from "./pages/Register/register5";
import Register6 from "./pages/Register/register6";
import Chat from './pages/Chat/'

function Router() {
  return (
    <BrowserRouter>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/listservices">
        <ListServices />
      </Route>
      <Route path="/fastservices">
        <FastServices />
      </Route>
      <Route path="/pendingservices">
        <PendingServices />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Register2">
        <Register2 />
      </Route>
      <Route path="/Register3">
        <Register3 />
      </Route>
      <Route path="/Register4">
        <Register4/>
      </Route>
      <Route path="/Register5">
        <Register5 />
      </Route>
      <Route path="/Register6">
        <Register6/>
      </Route>
      <Route path="/chat">
        <Chat/>
      </Route>
    </BrowserRouter>
  );
}

export default Router;
