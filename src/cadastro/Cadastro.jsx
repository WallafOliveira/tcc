import "./cadastro.css";
import React from "react";
import logo from './logo.png';
import {useNavigate} from "react-router-dom";
//import backgroundImage from "./backgroundImage.jpg"
function Cadastro() {
    const navigate = useNavigate();
    return (
        <div id="cadastroWrapDiv">
            <nav className="cabeçalho">
                <img className="logo" src={logo} alt='Eduquiz' onClick={() => {navigate('/')}}/> 
            </nav>
            <div className="container_cadastro">
                <span id="cadastroTitle">Faça seu Cadastro</span>
                <div className="email_password">
                    <input className="input" type="text" placeholder="Nome" />
                    <input className="input" type="number" placeholder="Idade" />
                    <input className="input" type="email" placeholder="Email" />
                    <input className="input" type="password" placeholder="Senha" />
                </div>
                <div className="btn_cad">
                    <button className="btn" onClick={() => {navigate('/homeusuario')}}>Cadastrar</button>
                </div>
                <div className="rede_login">
                    <img className='logo_social' src="https://img.freepik.com/icones-gratis/google_318-278809.jpg" alt="Google" onchange="$"/>
                    <img className='logo_social' src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="Facebook" onchange="$"/>
                </div>
            </div>
        </div>
    );
}
export default Cadastro;