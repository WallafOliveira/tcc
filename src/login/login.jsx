import React from "react";
import logo from './logo.png';
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    return (

    <div className="container_login"> 

    <img classNameName="logo" src={logo} alt='Eduquiz'/> 

        <span className="title">Bem vindo de volta!</span> 
        <div className="email_password"> 
            <input className="input" type="email" placeholder="email@gmail.com" /> 
            <input className="input"  type="password" placeholder="123ABC!" /> 
        </div> 

        <div className="check_btn"> 

            <label className="checkbox-label"> 
                <input type="checkbox" /> 
                Lembrar Usuário 
            </label> 
            <a href="$">Esqueseu sua senha?</a> 

        </div> 
    
    <div className="btn_cad_log"> 
        <button className="btn" onClick={ () => { navigate('/') }} >Login</button> 
        <button className="btn" onClick={ () => { navigate('/cadastro') }} >Cadastro</button> 
 
    </div> 
        <div className="rede_login"> 
            <img className='logo_social' src="https://img.freepik.com/icones-gratis/google_318-278809.jpg" alt="Google" onChange="$"/>            
            <img className='logo_social' src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="Facebook" onChange="$"/>   
    </div> 
</div>                    );
}

 export default Login;
