import { BrowserRouter, Route } from "react-router-dom";
import { RegisterProvider } from "./context";
import Home from "./pages/Home";
import ListServices from "./pages/ListServices";
import FastServices from "./pages/FastServices";
import PendingServices from "./pages/PendingServices";
import Login from "./pages/Login";
import LoginClient from "./pages/LoginClient";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Register2 from "./pages/Register/register2";
import Register3 from "./pages/Register/register3";
import Register4 from "./pages/Register/register4";
import Register5 from "./pages/Register/register5";
import Post from "./pages/Post";
import ClientOrServiceProvider from "./pages/ChoiceClientOrServiceProvider";
import Chat from "./pages/Chat";
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
      <RegisterProvider>
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
          <Register4 />
        </Route>
        <Route path="/Register5">
          <Register5 />
        </Route>
      </RegisterProvider>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/ClientOrServiceProvider">
        <ClientOrServiceProvider />
      </Route>
      <Route path="/loginCLient">
        <LoginClient />
      </Route>
      <Route path="/post">
        <Post />
      </Route>
    </BrowserRouter>
  );
}

export default Router;
