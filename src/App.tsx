import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import {LogCycle} from './pages/LogCycle' ;
import { LogOverview } from './pages/LogOverview';
import LoginPage from './pages/LoginPage';
import { Settings } from './pages/Settings';

//testing push
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about-us" element={<AboutUs />} />
          <Route path="log-cycle" element={<LogCycle />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="settings" element={<Settings/>}/>
          <Route path='log-overview' element={<LogOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
