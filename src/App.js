import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
      <h1>HELLLOOO</h1>
    </>
  );
}

export default App;
