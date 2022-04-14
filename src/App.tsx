import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import {LogCycle} from './pages/LogCycle' ;
import { LogOverview } from './pages/LogOverview';
import LoginPage from './pages/LoginPage';
import { Settings } from './pages/Settings';
import { AddNewLog } from './pages/AddNewLog';
import { makeStyles } from '@mui/material';
import { CssBaseline } from '@mui/material';
import './css_files/Backgroundimage.css'


//testing push
function App() {

  return (
    <div  className='backgroundstuff'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about-us" element={<AboutUs />} />
          <Route path="log-cycle" element={<LogCycle />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="settings" element={<Settings/>}/>
          <Route path='log-overview' element={<LogOverview />} />
          <Route path='add-new-log' element={<AddNewLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
