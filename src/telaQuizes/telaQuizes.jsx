import "./telaQuizes.css"; // Importa um arquivo de estilo CSS
import logo from './logo.png'; // Importa uma imagem de logotipo
import React, {/*useState*/} from "react"; // Importa React e useState para gerenciar o estado
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
                        <button id="buttonFilter" onClick={() => {window.location.reload()}}>Filter</button>
                    </div>
                </div>
                <div id="divLista">
                    <ul id="listaQuizes">
                        {/* Colocar o quiz de cada matéria do banco de dados */}
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de Adiçãos</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de Divisão</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de Subtração</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de Multiplicação</li>
                        {/* <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de vestibulares</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de pontuação de vestibulares</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de acentuação de vestibulares</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de análise sintática de vestibulares</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de anatomia de mamiferos de vestibulares</li>
                        <li className="listaItem" onClick={() => {navigate('/questao')}}>Questões de interpretação de texto de vestibulares</li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default TelaQuizes;
