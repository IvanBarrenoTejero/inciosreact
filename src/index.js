import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from "components/SumarNumeros/SumarNumeros.js";
import SaludoPadre from './components/Saludo/SaludoPadre';
import App from './components/App/App';
import SaludoPadre from './components/Saludo/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador/Contador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador/>
  </React.StrictMode>
);
reportWebVitals();
