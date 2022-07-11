import React from "react";
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css"

import Counters from './Components/counters'

import Navbar from "./Components/Navbar";

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Counters />} />
      <Route path="games" element={<Counters />} />
    </Routes>
  </BrowserRouter>
);

const navbar = createRoot(document.getElementById('navbar'))
navbar.render(
  <Navbar />
);

for (let i = 1; i <= 1; i++) {
  console.error(i + ". Stop fucking with my website")
}
