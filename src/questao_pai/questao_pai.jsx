import React from "react";
import logo from './logo.png';
import "./questao_pai.css"; // Corrija o caminho para o arquivo CSS

import { useNavigate } from "react-router-dom";

function QuestaoPai() {

 const navigate = useNavigate();

    return (

<div>
  <div>
    <nav className="cabeçalho">
      <img className="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }}/>
    </nav>
  </div>

  <div className="materia">
    <h3 className="text_mat">Crie uma questão para seu filho!!</h3>
    <h3 className="text_mat">Escolha a matéria para começar a criar</h3>
  </div>

  <div id="buttonDiv" class="button-container">

    <button style={{backgroundColor:"#00CC00"}} className="button" onClick={() => { navigate('/CriarQuestao') }}>CIÊNCIAS</button>
    <button style={{backgroundColor:"#E75502"}} className="button" onClick={() => { navigate('/CriarQuestao') }}>GEOGRAFIA</button>
    <button style={{backgroundColor:"#CC00FF"}} className="button" onClick={() => { navigate('/CriarQuestao') }}>INGLÊS</button>
    <button style={{backgroundColor:"#EBBE00"}} className="button" onClick={() => { navigate('/CriarQuestao') }}>HISTÓRIA</button>
    <button style={{backgroundColor:"#FF0000"}} className="button" onClick={() => { navigate('/CriarQuestao') }}>MATEMÁTICA</button>
    <button style={{backgroundColor:"#0088FF"}} className="button" onClick={() => { navigate('/CriarQuestao') }}>PORTUGUÊS</button>

  </div>
</div>

           

                    );
}

 export default QuestaoPai;
