import React from "react";
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Games from "./Games";
import VideoBg from "./Components/VideoBg";
import Counters from "./Components/counters"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="games" element={<Games />} />
    </Routes>
  </BrowserRouter>
);
/*
for (let i = 1; i <= 1; i++) {
  console.error(i + ". Stop fucking with my website")
}
*/