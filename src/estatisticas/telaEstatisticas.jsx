import React, { useState } from "react";
import logo from './logo.png';
import "./telaEstatisticas.css";
import { useNavigate, useLocation } from "react-router-dom";
import Carousel from "./carousel";

function TelaEstatisticas() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div>
        <nav className="cabeçalho">
          <img className="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }} />
        </nav>
      </div>

      <div id="body">
        <div id="carrossel">
          <Carousel /> 
        </div>
      </div>
    </div>
  );
}

export default TelaEstatisticas;
