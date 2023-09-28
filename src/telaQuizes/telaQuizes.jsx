import React, { useState } from "react"; // Importa React e useState para gerenciar o estado
import logo from './logo.png'; // Importa uma imagem de logotipo
import "./telaQuizes.css"; // Importa um arquivo de estilo CSS
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate da biblioteca react-router-dom para a navegação na aplicação

function TelaQuizes() {
    const navigate = useNavigate(); 

    return (
        <div>
            <div>
                <nav className="cabeçalho">
                    <img className="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }} />
                </nav>
            </div>

            <div id="body">

                <div id="quizHeader">
                    <div id="titleDiv">
                        <text> Matéria </text>
                    </div>
                    <div id="buttonDiv">
                        <button id="buttonFilter" onClick={() => { navigate('/')}}>Filter</button>
                    </div>
                </div>

                <div id="divLista">
                    <ul id="listaQuizes">
                        <li class="listaItem"> <a href="">Questões de regência verbal de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de crase de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de virgula de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de literatura de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de análise sintática de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de interpretação de texto de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de pontuação de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de acentuação de vestibulares</a> </li>
                        <li class="listaItem"> <a href="">Questões de anatomia de mamiferos de vestibulares</a> </li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default TelaQuizes;
