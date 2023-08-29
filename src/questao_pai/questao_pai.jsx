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
                <img className="logo" src={logo} alt='Eduquiz' onClick={ () => { navigate('/') }}/> 
                </nav>
            </div>

            <div class="texto_questão">

                <input className="input_questao" type="text" placeholder="Escreva a questão para seu filho" />           

            </div>

            <div className="select_materia_m">



                <input type="radio"  name="fav_language" value="HTML"/>
                  <label for="html">HTML</label>

               <input type="radio" name="fav_language" value="CSS"/>
                   <label for="css">CSS</label>


            </div>

            </div>

                    );
}

 export default  QuestaoPai;
