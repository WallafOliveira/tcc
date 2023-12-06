import "./telaQuestao.css"; // Corrija o caminho para o arquivo CSS
import logo from './logo.png';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
function Questao() {
 const navigate = useNavigate();
 const [questoes, /*setQuestoes*/] = useState(
	[
		{
        		"texto_questao": "Quanto é 1+1 ?",
        		"img_questao": null
      		},
    	]
  );
  const [alternativas, /*setAlternativas*/] = useState(
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
        <nav className="cabeçalho">
          <img className="logo" src={logo} alt='Eduquiz' onClick={() => {navigate('/')}}/>
        </nav>
      </div>
      <div className="campo_text">{questoes.map(questao => (<h3 className="text_questao">{questao.texto_questao}</h3>))}</div>
      <div className="buttonDiv">{alternativas.map(alternativa =>(<button style={{backgroundColor:"#eaeaea", color:'black', }} className="button" onClick={()=>{navigate('/telaquestao2')}} > {alternativa.texto_alternativa} </button>))}</div>
      {/* Quiz precisa ter várias questões dentro dele, e o botão tem que passar para a próxima questão do quiz */ }
      <div className="btn_continuar">
        <button className="btn_cont" onClick={() => {navigate('/telaquestao2')}}>Continuar</button>
        {/* {window.location.reload()} */}
      </div>
    </div>      
  )
}
export default Questao;
