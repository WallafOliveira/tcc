import logo from './logo.png';
import "./telaEstatisticas.css";
import Carousel from "./carousel";
import imagem1 from "./kidsEsta.jpg";
import React, { useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";
function TelaEstatisticas() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div>
        <nav className="cabeçalho">
          <img className="logo" src={logo} alt='Eduquiz' onClick={() => {navigate('/')}} />
        </nav>
      </div>
      <div id="body">
        <div id="carrossel">
          {/* <Carousel />  */}
          <h1 id="textoEvolucao"> Estatística </h1>
          <img className="estatistica" src={imagem1} alt='Estatistica'/>
        </div>
        <div id="evolucaoDiv">
          <h1 id="textoEvolucao"> Evolução </h1>
          <div id="container">
            <div id="quizFeitos">
              <h1 id="tituloQuizFeitos"> Total de Quizes Feitos: </h1>
              <p id="numeroQuizes">1</p>
            </div>
            <div id="media">
              <div id="tituloDiv">
                <h1 id="tituloMedia"> Média de Acertos </h1>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-all">
                  <div className="progress-bar-fill">
                  </div>
                </div>
                <text className="texto-progress-bar">100%</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TelaEstatisticas;
