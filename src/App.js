import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { TokenContext } from "./tokenContext";
import SignIn from "./components/SignIn/SignIn";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Swap from "./components/Swap/Swap";
import { useMetaMask } from "metamask-react";

const Home = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable") return <div>MetaMask not available</div>;

  if (status === "notConnected")
    return <button onClick={connect}>Connect to MetaMask</button>;

  if (status === "connecting") return <div>Connecting...</div>;

  if (status === "connected")
    return (
      <div>
        Connected account {account} on chain ID {chainId}
      </div>
    );

  return null;
};

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
              element={token ? <Home></Home> : <Navigate to="/signIn" />}
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
