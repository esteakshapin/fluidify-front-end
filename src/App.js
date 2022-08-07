import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { TokenContext } from "./tokenContext";
import SignIn from "./components/SignIn/SignIn";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Swap from "./components/Swap/Swap";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {/* navbar */}
      <TokenContext.Provider value={{ token, setToken }}>
        <NavBar></NavBar>

        {/* body */}
        <div className="bodyContent">
          <Routes>
            <Route
              path="/"
              element={token ? <div>Home</div> : <Navigate to="/signIn" />}
            ></Route>
            <Route
              path="/swap"
              element={token ? <Swap></Swap> : <Navigate to="/signIn" />}
            ></Route>
            <Route
              path="/signIn"
              element={token ? <Navigate to="/" /> : <SignIn />}
            ></Route>
          </Routes>
        </div>
      </TokenContext.Provider>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
