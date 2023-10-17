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

        <div id="evolucao">
          <h1 id="textoEvolucao"> Evolução </h1>

          <div id="container">

            <div id="quizFeitos">
              <h1 id="tituloQuizFeitos"> Total de Quizes Feitos </h1>
              <p id="numeroQuizes">?</p>
            </div>

            <div id="media">
              <h1 id="tituloMedia"> Média de Acertos </h1>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaEstatisticas;
