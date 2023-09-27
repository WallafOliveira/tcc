import React from "react";
import logo from './logo.png';
import logo2 from './logotcc2.png'

import { useNavigate } from "react-router-dom";

//import Cadastro from "../cadastro/Cadastro";

import "./App.css"; 

function Home() {

  const navigate = useNavigate();

  return (
    <div> 
      <nav className="botão">
        <img className="logo" src={logo} alt='Eduquiz'/> 
        <ul>
          <button  className="li" onClick={ () => { navigate('cadpais') } }> Area dos pais</button>
          <button className="li"  onClick={ () => { navigate('login') } }> Login</button>
          <button className="li" onClick={ () => { navigate('cadastro') } } > Cadastro</button> 
          <button className="li" onClick={ () => { navigate('materias') } } > materias</button> 
          <button className="li" onClick={ () => { navigate('QuestaoPai') } } >questao_pai</button> 
          <button className="li" onClick={ () => {navigate('CriarQuestao') } } > Criar Questão </button>
          <button className="li" onClick={ () => {navigate('Questao') } } > Questão </button>
          <button className="li" onClick={ () => {navigate('telaQuizes') } } > Quizes </button>
        </ul> 
      </nav>

      <div className="conteudo">
        <h1 id="title">Quer aprender de maneira interativa?</h1>
        <img className="logo2" src={logo2} alt='Eduquiz'/>  
        
        <div className="sobre">
        <h1 id="pTitle">Sobre</h1>
        <br/>
        <p class="text">
        Recursos interativos: Tornamos a aprendizagem divertida e envolvente para as crianças. Com elementos visuais atraentes, 
        animações e feedback imediato sobre as respostas, 
        incentivamos o interesse e a motivação dos alunos durante o processo de aprendizagem.
        </p>
        <br/>
        <p class="text">
          Relatórios e avaliações: Receba relatórios detalhados sobre o desempenho de seus filhos em cada questionário realizado. 
          Com base nesses relatórios, você poderá avaliar o progresso individual, 
          identificar áreas de força e áreas que necessitam de mais atenção, e tomar medidas educacionais personalizadas para ajudar seus 
          filhos a alcançarem seu pleno potencial acadêmico.
        </p>
        <br/>
        <p class="text">
          Controle de Pais:       
          Acompanhamento do progresso: Obtenha informações detalhadas sobre o desempenho de seus filhos nos questionários. 
          Nosso software registra as respostas corretas e incorretas,
          permitindo que você identifique as áreas em que eles podem precisar de mais apoio e orientação. Acompanhe o progresso ao
          longo do tempo e observe o crescimento das habilidades educacionais de seus filhos.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
