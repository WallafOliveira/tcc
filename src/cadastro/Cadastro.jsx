import "./cadastro.css";
import React from "react";
import logo from './logo.png';
import {useNavigate} from "react-router-dom";
import backgroundImage from "./backgroundImage.jpg"
function Cadastro() {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="cabeçalho">
                <img className="logo" src={logo} alt='Eduquiz' onClick={() => {navigate('/')}}/> 
            </nav>
        <div class="container_cadastro">
            <span id="cadastroTitle">Faça seu Cadastro</span>
            <div class="email_password">
                <input class="input" type="text" placeholder="Nome" />
                <input class="input" type="number" placeholder="Idade" />
                <input class="input" type="email" placeholder="Email" />
                <input class="input" type="password" placeholder="Senha" />
            </div>
            <div class="btn_cad">
                <button class="btn" onClick={() => {navigate('/homeusuario')}}>Cadastrar</button>
            </div>
            <div class="rede_login">
                <img class='logo_social' src="https://img.freepik.com/icones-gratis/google_318-278809.jpg" alt="Google" onchange="$"/>
                <img class='logo_social' src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="Facebook" onchange="$"/>
            </div>
        </div>
        </div>
    );
}
export default Cadastro;