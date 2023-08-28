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

            <div class="radio-group">

        <label class="radio-mat">
            <input type="radio" name="opcao" value="Matematica"/>  Matematica  </label>

        <label class="radio-pot">
            <input type="radio" name="opcao" value="Portugues"/> Portugues </label>

        <label class="radio-geo">
            <input type="radio" name="opcao" value="Geografia"/>  Geografia </label>

        <label class="radio-his">
            <input type="radio" name="opcao" value="Hístoria"/> Hístoria  </label>

        <label class="radio-cie">
            <input type="radio" name="opcao" value="Ciência"/> Ciência  </label>

        <label class="radio-ing">
            <input type="radio" name="opcao" value="Inglês  "/> Inglês  </label>

    </div>

            </div>

                    );
}

 export default  QuestaoPai;
