import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import Quandale from './Pages/Quandale';
import Games from './Pages/Games';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/games" element = {<Games />} />
        <Route path="/quandale" element = {<Quandale />} />
      </Routes>
    </Router>
  );
}

export default App;
