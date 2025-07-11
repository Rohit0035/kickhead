import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import ProjectDetailOne from './pages/WorkFolioDetailOne';
import ProjectsLayout from './pages/WorkFolio';
import KickstartFlow from './pages/KickstartFlow';
import WorkFolio from './pages/WorkFolio';
import WorkFolioDetailOne from './pages/WorkFolioDetailOne';
import Credo from './pages/Credo';
import Freekick from './pages/FreeKick';
import AboutUs from './pages/AboutUs';
import OurCredo from './pages/OurCredo';
import ThankyouTwo from './pages/ThankyouTeam';
import ThankyouOne from './pages/ThankyouOne';
import ThankyouTeam from './pages/ThankyouTeam';

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/work-folio-detail" element={<WorkFolioDetailOne />} />

        <Route path="/workfolio" element={<WorkFolio />} />

        <Route path="/our-credo" element={<Credo />} />

        <Route path="/credo" element={<OurCredo />} />


        <Route path="/freekick" element={<Freekick />} />



        <Route path="/kick-start" element={<KickstartFlow />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/thankyou" element={<ThankyouTeam />} />

        <Route path="/thankyoutwo" element={<ThankyouOne />} />

      </Routes>
    </div>
  );
}

export default App;
