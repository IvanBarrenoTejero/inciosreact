import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from "components/SumarNumeros/SumarNumeros.js";
import App from './components/App/App';
import SaludoPadre from './components/Saludo/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Audi" modelo="Q8" velocidadmaxima="240" aceleracion="25"/>
    <Car marca="Ponticac" modelo="Firebird" velocidadmaxima="340" aceleracion="33"/>
  </React.StrictMode>
);
reportWebVitals();
