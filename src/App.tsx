import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { LogCycle } from './pages/LogCycle';
import { LogOverview } from './pages/LogOverview';
import LoginPage from './pages/LoginPage';
import { Settings } from './pages/Settings';
import { AddNewLog } from './pages/AddNewLog';
import './css_files/Backgroundimage.css'
<<<<<<< HEAD
import axios from 'axios'; 
import Login from './components/Login';

// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// const [user, setUser] = useState(null)
=======
import axios from 'axios';
import DatabaseService from './components/DatabaseService';
import { logRoles } from '@testing-library/react';
>>>>>>> 94dacb369cc6df784989f3993a01183ca72cadc3


interface log {
  id: Number, 
  name: string, 
  measure: string
}

//testing push
function App() {
  const [logs, setLogs] = useState([]);
  const [id, setId] = useState(Number)
<<<<<<< HEAD
  const [userId, setUserId] = useState(1);
 
=======

  async function GetLogs() {
    let allLogs = await DatabaseService.getLogs();
    setLogs(allLogs);
    setId(logs.length)
  }

>>>>>>> 94dacb369cc6df784989f3993a01183ca72cadc3
  useEffect(() => {
    GetLogs();
    console.log("getting overview")
  },[id]);

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home logs ={logs}/>} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="log-cycle" element={<LogCycle />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path='log-overview/:id' element={<LogOverview logs={logs} id={id} />} />
          <Route path='add-new-log' element={<AddNewLog id={logs.length}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
    <div className='backgroundstuff'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="log-cycle" element={<LogCycle />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="settings" element={<Settings />} />
            <Route path='log-overview/:id' element={<LogOverview id={id} />} />
            <Route path='add-new-log' element={<AddNewLog id={logs.length} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> 94dacb369cc6df784989f3993a01183ca72cadc3
  );
};
export default App