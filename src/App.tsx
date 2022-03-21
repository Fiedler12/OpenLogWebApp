import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';

//testing push
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
