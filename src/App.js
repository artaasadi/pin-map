import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyMap from './components/MyMap';

function App() {

  const [location, setLocation] = useState(require("./components/img/img.png"));
  const setData = (data) => {
    setLocation(data);
  };
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact/>
        </Routes>
      </Router>
      <div style={{width:'100%'}}>
        <div style={{float:'left',width:'20%', color:'#FFF'}}>
          <div style={{float:'top', width:'100%'}}>
            <img src={(location)} style={{width:'100%'}}/>
          </div>
        </div>
        <div style={{float:'left',width:'80%',height:'100vh'}}>
          <MyMap returnData = {setData}/>
        </div>
      </div>
      
    </>
  );
}

export default App;
