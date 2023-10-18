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

        <div id="evolucaoDiv">
          <h1 id="textoEvolucao"> Evolução </h1>

          <div id="container">

            <div id="quizFeitos">
              <h1 id="tituloQuizFeitos"> Total de Quizes Feitos: </h1>
              <p id="numeroQuizes">?</p>
            </div>

            <div id="media">
              <h1 id="tituloMedia"> Média de Acertos </h1>
              <div className="progress-bar">
                <div className="progress-bar-all">
                  <div className="progress-bar-fill" />
                </div>
                <text className="texto-progress-bar">%</text>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaEstatisticas;
