import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Reservia from './pages/Reservia';
import OhmyFood from './pages/OhmyFood';
import FishEye from './pages/FishEye';
import Kasa from './pages/Kasa';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reservia" element={<Reservia />} />
        <Route path="/ohmyfood" element={<OhmyFood />} />
        <Route path="/fisheye" element={<FishEye />} />
        <Route path="/kasa" element={<Kasa />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;