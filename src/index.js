import React from "react";
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./LandingPage";
import Games from "./Games";
import Random from "./Random";

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/games" element={<Games />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  </BrowserRouter>
);
/*
for (let i = 1; i <= 1; i++) {
  console.error(i + ". Stop fucking with my website")
}
*/