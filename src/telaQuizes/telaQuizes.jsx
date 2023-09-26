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
                    <text> Matéria </text>
                    <button></button>
                </div>

                <div id="divLista">
                    <ul id="listaQuizes">
                        <li class="listaItem"> Quiz 1 </li>
                        <li class="listaItem"> Quiz 2 </li>
                        <li class="listaItem"> Quiz 3 </li>
                        <li class="listaItem"> Quiz 4 </li>
                        <li class="listaItem"> Quiz 5 </li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default TelaQuizes;
