import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Reservia from './pages/Reservia';
import OhmyFood from './pages/OhmyFood';
import FishEye from './pages/FishEye';
import Kasa from './pages/Kasa';
import NotFound from './pages/NotFound';
import Sportsee from './pages/Sportsee';
import ArgentBank from './pages/ArgentBank';
import WealthHealth from './pages/WealthHealth';
import Contact from './pages/Contact';
import PetitsPlats from './pages/PetitsPlats';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  return (
    <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/portfolio_kd_2022 " element={< Home/>} />
        <Route path="/" element={< Home/>} />
        <Route path="/reservia" element={< Reservia/>} />
        <Route path="/ohmyfood" element={< OhmyFood/>} />
        <Route path="/fisheye" element={< FishEye/>} />
        <Route path="/petitplat" element={< PetitsPlats/>} />
        <Route path="/kasa" element={< Kasa/>} />
        <Route path="/sportsee" element={< Sportsee/>} />
        <Route path="/argentbank" element={< ArgentBank/>} />
        <Route path="/wealth" element={< WealthHealth/>} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="*" element={< NotFound/>} />
      </Routes>
    </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
