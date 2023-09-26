import React from "react";
import logo from './logo.png';
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    return (

    <div class="container_login"> 

    <img className="logo" src={logo} alt='Eduquiz'/> 

        <span class="title">Bem vindo de volta!</span> 
        <div class="email_password"> 
            <input class="input" type="email" placeholder="email@gmail.com" /> 
            <input class="input"  type="password" placeholder="123ABC!" /> 
        </div> 

        <div class="check_btn"> 

            <label class="checkbox-label"> 
                <input type="checkbox" /> 
                Lembrar Usuário 
            </label> 
            <a href="$">Esqueseu sua senha?</a> 

        </div> 
    
    <div class="btn_cad_log"> 
        <button class="btn" onClick={ () => { navigate('/') }} >Login</button> 
        <button class="btn" onClick={ () => { navigate('/') }} >Cadastro</button> 
 
    </div> 
        <div class="rede_login"> 
            <img class='logo_social' src="https://img.freepik.com/icones-gratis/google_318-278809.jpg" alt="Google" onchange="$"/>            
            <img class='logo_social' src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="Facebook" onchange="$"/>   
    </div> 
</div>                    );
}

 export default Login;
