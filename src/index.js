import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './Components/counters'

const root = createRoot(document.getElementById('root'))
root.render(<Counters />)
