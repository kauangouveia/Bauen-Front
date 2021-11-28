import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { RegisterProvider } from "./context";
import Home from "./pages/Home";
import ListServices from "./pages/ListServices";
import FastServices from "./pages/FastServices";
import PendingServices from "./pages/PendingServices";
import Login from "./pages/Login";
import LoginClient from "./pages/LoginClient";
import Profile from "./pages/Profile";
import ProfileVclient from "./pages/ProfileVclient";
import ProfileClient from "./pages/ProfileClient";
import Register from "./pages/Register";
import Register2 from "./pages/Register/register2";
import Register3 from "./pages/Register/register3";
import Register4 from "./pages/Register/register4";
import Register5 from "./pages/Register/register5";
import Post from "./pages/Post";
import ClientOrServiceProvider from "./pages/ChoiceClientOrServiceProvider";
import Chat from "./pages/Chat";
import { isSignedIn } from "./services/security";
import ServicesInProgress from "./pages/ServicesInProgress";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return <Route {...rest}>{children}</Route>;
  } else {
    console.log("nao pode entar")
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="/ProfileClient">
        <ProfileClient />
      </PrivateRoute>
      <Route path="/ProfileVclient">
        <ProfileVclient />  
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
      <Route path="/inprogress">
        <ServicesInProgress/>
      </Route>
      <PrivateRoute path="/post">
        <Post />
      </PrivateRoute>
    </BrowserRouter>
  );
}

export default Router;
