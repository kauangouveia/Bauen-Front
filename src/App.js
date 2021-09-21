import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Cabecalho/Header";
import HomeSlogan from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <HomeSlogan/>
    </>
  );
}

export default App;
