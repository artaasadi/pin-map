import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyMap from './components/MyMap';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
      <MyMap />
    </>
  );
}

export default App;
