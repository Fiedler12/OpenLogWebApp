import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useMatch } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { LogCycle } from './pages/LogCycle';
import { LogOverview } from './pages/LogOverview';
import LoginPage from './pages/LoginPage';
import { Settings } from './pages/Settings';
import { AddNewLog } from './pages/AddNewLog';
import './css_files/Backgroundimage.css'
import axios from 'axios'; 
import Login from './components/Login';

// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// const [user, setUser] = useState(null)


//testing push
function App() {
  const [logs, setLogs] = useState([]);
  const [id, setId] = useState(Number)
  const [userId, setUserId] = useState(1);
 
  useEffect(() => {
    const response = axios.get('http://localhost:3001/logs').then(response => {
      setLogs(response.data)
      const id = axios.get('http://localhost:3001/values').then(id => {
        setId(id.data.length)
      } )
    }) 
  }, []);
  return (
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
  );
}

export default App