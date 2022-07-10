import React from "react";
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import Counters from './Components/counters'
import Counter from './Components/counter'
import Game from './Components/game'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Counters />} />
      <Route path="games" element={<Game />} />
    </Routes>
  </BrowserRouter>
);

const rootGames = createRoot(document.getElementById('games/rootGames'))
rootGames.render(<Counter />)

for (let i = 1; i <= 10; i++) {
  console.error(i + ". Stop fucking with my website")
}
