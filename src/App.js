import './App.css';
import NavBar from './components/NavBar/NavBar';
import Swap from './pages/swap/Swap'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="appBody">
        <Swap />
      </div>
    </div>
  );
}

export default App;