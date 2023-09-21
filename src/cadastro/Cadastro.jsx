import React from "react";
import logo from './logo.png';

import "./cadastro.css"; // Corrija o caminho para o arquivo CSS

import { useNavigate } from "react-router-dom";

function Cadastro() {

    const navigate = useNavigate();


    

    return (


            <div class="container_cadastro_pais">

            <img className="logo" src={logo} alt='Eduquiz'/> 

            {

       
        
  

            }

        
                    <span>CADASTRAR-SE COMO RESPONSÁVEL</span>
                    <div class="email_password">
                        <input class="input" type="text" placeholder="Nome" />
                        <input class="input" type="number" placeholder="Idade" />
                        <input class="input" type="text" placeholder="Nome da Criança" />
                        <input class="input" type="email" placeholder="Email" />
                        <input class="input" type="password" placeholder="Senha!" />
                    </div>

                    <div class="btn_cad">
                        <button class="btn" onClick={ () => { navigate('/') }} >Cadastrar</button>
                    </div>
                    <div class="rede_login">
                        <img class='logo_social' src="https://img.freepik.com/icones-gratis/google_318-278809.jpg" alt="Google" onchange="$"/>
                            <img class='logo_social' src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="Facebook" onchange="$"/>
                            </div>
                    </div>

                    );
}

 export default Cadastro;
