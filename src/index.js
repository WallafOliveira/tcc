import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/Home';
import Cadastro from './cadastro/Cadastro';
import Login from'./login/login.jsx';
import Cadpais from './cad_pais/cad_pais';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    

    <BrowserRouter>
      <Routes>
       <Route path="/">
            <Route index  element={ <Home />} /> 
            <Route path="cadastro" element={ <Cadastro/> } /> 
             <Route path="login" element={ <Login/> } />
             <Route path="cadpais" element={ <Cadpais/> } />
             
       </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

