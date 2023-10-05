import React, {useState} from "react";
import logo from './logo.png';
import "./telaQuestao.css"; // Corrija o caminho para o arquivo CSS
import { useNavigate } from "react-router-dom";


function Questao() {

 const navigate = useNavigate();

 const [questoes, setQuestoes] = useState(
	[
    {
      "texto_questao": "Quanto é 1+1 ?",
      "img_questao": null
    },
  ]
);

const [alternativas, setAlternativas] = useState(
  [
      
      {
        "texto_alternativa": "2",
      },
      {
        "texto_alternativa": "3",
      },
      {
        "texto_alternativa": "4",
      },
      {
        "texto_alternativa": "1",
      },
      

  ]
)
    return (


    <div>
 

  <div>
    <nav class="cabeçalho">
      <img class="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }}/>
    </nav>
  </div>

    <div class="campo_text">
      {
      questoes.map(questao => (
        <h3 class="text_questao">{questao.texto_questao}</h3>
      ))
      }

    </div>

  <div class="buttonDiv">


    {alternativas.map(alternativa =>(



      <button style={{backgroundColor:"#00CC00"}} class="button">{alternativa.texto_alternativa}</button>
    ))
    }


{/*

<button style={{backgroundColor:"#E75502"}} class="button" onClick={() => { navigate('materias') }}>Alternativa B</button>
<button style={{backgroundColor:"#EBBE00"}} class="button" onClick={() => { navigate('cadastro') }}>Alternativa D</button>
<button style={{backgroundColor:"#CC00FF"}} class="button" onClick={() => { navigate('materias') }}>Alternativa C</button>
*/
}



  </div>

<div class="btn_continuar">
  <button class="btn_cont" onClick={() => { navigate('/') }} >Continuar</button>
  </div>
</div>
           
    )

}

 export default Questao;
