import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { TokenContext } from "./tokenContext";
import SignIn from "./components/SignIn/SignIn";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return <div style={{ color: "blue", backgroundColor: "red" }}>HOME</div>;
};

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <TokenContext.Provider value={null}>
        <NavBar></NavBar>
      </TokenContext.Provider>

      {/* body */}
      <div className="bodyContent">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
