import React from "react";
import logo from './logo.png';

import "./questao_pai.css"; // Corrija o caminho para o arquivo CSS

import { useNavigate } from "react-router-dom";

function QuestaoPai() {

 const navigate = useNavigate();

    return (


            <div>

                <nav className="cabeçalho">
                <img className="logo" src={logo} alt='Eduquiz' onClick={ () => { navigate('/') }}/> 
                </nav>


            </div>

                    );
}

 export default  QuestaoPai;
