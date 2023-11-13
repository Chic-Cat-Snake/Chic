import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {

  const [SSID, setSSID] = useState('');

  console.log('this is SSID', SSID)
  return (
     <Router>
      <Link to='/' style= {{margin : 10}}>
        Home
      </Link>
      <Link to='/signup' style= {{margin : 10}}>
        Signup
      </Link>
      <Link to='/login' style= {{margin : 10}}>
        Login
      </Link>
      <Link to='/dashboard' SSID={SSID} style= {{margin : 10}}>
        Dashboard
      </Link>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login setSSID={setSSID}/>} />
      <Route path='/signup' element={<Signup setSSID={setSSID} />} />
      <Route path='/dashboard' element = {<Dashboard/>} />
      </Routes>
    </Router>
  )
}
export default App;