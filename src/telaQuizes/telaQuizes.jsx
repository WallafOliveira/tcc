import "./telaQuizes.css"; // Importa um arquivo de estilo CSS
import logo from './logo.png'; // Importa uma imagem de logotipo
import React, {useState} from "react"; // Importa React e useState para gerenciar o estado
import {useNavigate, useLocation} from "react-router-dom"; // Importa o hook useNavigate da biblioteca react-router-dom para a navegação na aplicação
function TelaQuizes() {
    const navigate = useNavigate(); 
    const location = useLocation();
    return (
        <div>
            <div>
                <nav className="cabeçalho">
                    <img className="logo" src={logo} alt='Eduquiz' onClick={() => {navigate('/')}}/>
                </nav>
            </div>
            <div id="body">
                <div id="quizHeader">
                    <div id="titleDiv">
                        <text> {location.state.materia} </text>
                    </div>
                    <div id="buttonDiv">
                        <button id="buttonFilter" onClick={() => {navigate('/')}}>Filter</button>
                    </div>
                </div>
                <div id="divLista">
                    <ul id="listaQuizes">
                        <li className="listaItem"> <a href="">Questões de regência verbal de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de crase de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de virgula de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de literatura de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de análise sintática de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de interpretação de texto de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de pontuação de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de acentuação de vestibulares</a> </li>
                        <li className="listaItem"> <a href="">Questões de anatomia de mamiferos de vestibulares</a> </li>
                    </ul>
                </div>

            </div>

        </div>
    );
}
export default TelaQuizes;