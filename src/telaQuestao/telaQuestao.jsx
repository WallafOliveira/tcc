import React from "react";
import logo from './logo.png';
import "./telaQuestao.css"; // Corrija o caminho para o arquivo CSS
import { useNavigate } from "react-router-dom";

function Questao() {

 const navigate = useNavigate();

    return (

<div>
  <div>
    <nav class="cabeçalho">
      <img class="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }}/>
    </nav>
  </div>

    <div class="campo_text">
    <h3 class="text_questao">Questao</h3>
    </div>

  <div class="buttonDiv">
    <button style={{backgroundColor:"#00CC00"}} class="button" onClick={() => { navigate('materias') }}>ALternativa A</button>
    <button style={{backgroundColor:"#E75502"}} class="button" onClick={() => { navigate('materias') }}>ALternativa B</button>
    <button style={{backgroundColor:"#CC00FF"}} class="button" onClick={() => { navigate('materias') }}>ALternativa C</button>
    <button style={{backgroundColor:"#EBBE00"}} class="button" onClick={() => { navigate('cadastro') }}>ALternativa D</button>
  </div>

<div class="btn_continuar">
  <button class="btn_cont" onClick={() => { navigate('cadastro') }} >Continuar</button>
  </div>
</div>

           

                    );
}

 export default Questao;
