import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyMap from './components/MyMap2';
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
      <div style={{flex:1, height:'100vh'}}>
        <MyMap />
      </div>
      
    </>
  );
}

export default App;
