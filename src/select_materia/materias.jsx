import "./materias.css";
import React from "react";
import logo from './logo.png';
import logo2 from './logo2.png';
import {useNavigate} from "react-router-dom";
function Materia() {
 const navigate = useNavigate();
  return (
    <div>
      <nav className="cabeçalho">
        <img className="logo" src={logo} alt='Eduquiz' onClick={() => {navigate('/')}}/> 
      </nav>
      <div className="materia">
        <h1 className="texto_materia">Qual Matéria você quer aprender?</h1>
        <div>
          <button  className="btnMat" onClick={() => {navigate('/telaQuizes', {state: {materia: "Matemática"}})}}>Matemática</button>
          <button className="btnPor"  onClick={() => {navigate('/telaQuizes', {state: {materia: "Português"}})}}>Português</button>
        </div>
        <div className="meio"> 
          <button className="btnHis" onClick={() => {navigate('/telaQuizes' , {state: {materia: "História"}})}}>História</button> 
          <img className="logo2" src={logo2} alt='Eduquiz'/> 
          <button className="btnCie" onClick={() => {navigate('/telaQuizes', {state: {materia: "Ciências"}})}}>Ciências</button>
        </div>
        <div>
          <button className="btnGeo" onClick={() => {navigate('/telaQuizes', {state: {materia: "Geografia"}})}}>Geografia</button> 
          <button className="btnIn" onClick={() => {navigate('/telaQuizes', {state: {materia: "Inglês"}})}}>Inglês</button>
        </div>
      </div>
    </div>
  );
}
export default Materia;