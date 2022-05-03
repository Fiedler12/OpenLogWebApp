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
import axios from 'axios';
import DatabaseService from './components/DatabaseService';
import { logRoles } from '@testing-library/react';


interface log {
  id: Number, 
  name: string, 
  measure: string
}

//testing push
function App() {
  const [logs, setLogs] = useState([]);
  const [id, setId] = useState(Number)

  async function GetLogs() {
    let allLogs = await DatabaseService.getLogs();
    setLogs(allLogs);
    setId(logs.length)
  }

  useEffect(() => {
    GetLogs();
    console.log("getting overview")
  },[id]);

  return (
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
  );
};
export default App