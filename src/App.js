import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { TokenContext } from "./tokenContext";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <TokenContext.Provider value={"ads"}>
        <NavBar></NavBar>
      </TokenContext.Provider>

      {/* body */}
      <div className="bodyContent">
        <SignIn></SignIn>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
