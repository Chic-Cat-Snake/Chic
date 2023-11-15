import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import AllOutfits from './components/AllOutfits.jsx';

const App = () => {
  const [SSID, setSSID] = useState('');

  console.log('this is SSID', SSID);
  return (
    <Router>
      <Link to="/" style={{ margin: 10 }}>
        Home
      </Link>
      <Link to="/signup" style={{ margin: 10 }}>
        Signup
      </Link>
      <Link to="/login" style={{ margin: 10 }}>
        Login
      </Link>
      <Link to="/dashboard" style={{ margin: 10 }}>
        Dashboard
      </Link>
      <Link to="/alloutfits" style={{ margin: 10 }}>
        All Outfits
      </Link>
      <Routes>
      {/** Look into why they have the setSSID to SetSSID 
          Potentially is prop drilling this function down*/}
        <Route path="/" element={<Login setSSID={setSSID} />} />
        <Route path="/signup" element={<Signup setSSID={setSSID} />} />
        <Route path="/dashboard" element={<Dashboard SSID={SSID} />} />
        <Route path="/alloutfits" element={<AllOutfits SSID={SSID} />} />
      </Routes>
    </Router>
  );
};
export default App;
