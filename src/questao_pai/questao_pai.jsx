import React from "react";
import logo from './logo.png';


import "./questao_pai.css"; // Corrija o caminho para o arquivo CSS

import { useNavigate } from "react-router-dom";

function QuestaoPai() {

 const navigate = useNavigate();

    return (

<div>
  <div>
    <nav class="cabeçalho">
      <img class="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }}/>
    </nav>
  </div>

  <div class="materia">
    <h3 class="text_mat">Crie uma questão para seu filho!!</h3>
    <h3 class="text_mat">Escolha a matéria para começar a criar</h3>
  </div>

  <div id="buttonDiv" class="button-container">
    <button style={{backgroundColor:"#00CC00"}} class="button" onClick={() => { navigate('materias') }}>CIÊNCIAS</button>
    <button style={{backgroundColor:"#E75502"}} class="button" onClick={() => { navigate('materias') }}>GEOGRAFIA</button>
    <button style={{backgroundColor:"#CC00FF"}} class="button" onClick={() => { navigate('materias') }}>INGLÊS</button>
    <button style={{backgroundColor:"#EBBE00"}} class="button" onClick={() => { navigate('cadastro') }}>HISTÓRIA</button>
    <button style={{backgroundColor:"#FF0000"}} class="button" onClick={() => { navigate('cadpais') }}>MATEMÁTICA</button>
    <button style={{backgroundColor:"#0088FF"}} class="button" onClick={() => { navigate('login') }}>PORTUGUÊS</button>
  </div>
</div>

           

                    );
}

 export default QuestaoPai;
