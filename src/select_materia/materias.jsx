import React from "react";
import logo from './logo.png';
import logo2 from './logo2.png';

import "./materias.css"; // Corrija o caminho para o arquivo CSS

import { useNavigate } from "react-router-dom";

function Materia() {

 const navigate = useNavigate();

    return (


            <div>
                <nav className="cabeçalho">
                <img className="logo" src={logo} alt='Eduquiz' onClick={ () => { navigate('/') }}/> 
                </nav>

        <div className="materia">

            <h1 className="text_mat">Qual Matéria você quer aprender?</h1>


        <div>

          <button  className="btnMat" onClick={ () => { navigate('cadpais') } }> Matematica</button>
          <button className="btnPor"  onClick={ () => { navigate('login') } }> Português</button>

          </div>

        <div className="meio"> 
          <button className="btnHis" onClick={ () => { navigate('cadastro') } } > Hístoria</button> 
          <img className="logo2" src={logo2} alt='Eduquiz'/> 
          <button className="btnCie" onClick={ () => { navigate('materias') } } > Ciências</button>
          </div>

         <div>
          
          <button className="btnGeo" onClick={ () => { navigate('materias') } } > Geografia</button> 
          <button className="btnIn" onClick={ () => { navigate('materias') } } > Inglês</button>

          </div>

            </div>

            </div>

                    );
}

 export default Materia;
