// Importa as bibliotecas e recursos necessários
import "./criarQuestao.css"; // Importa um arquivo de estilo CSS
import logo from './logo.png'; // Importa uma imagem de logotipo
import React, {useState} from "react"; // Importa React e useState para gerenciar o estado
import {useNavigate} from "react-router-dom"; // Importa o hook useNavigate da biblioteca react-router-dom para a navegação na aplicação
function CriarQuestao() {
    const navigate = useNavigate(); // Inicializa o hook useNavigate para permitir a navegação entre páginas
    // Define um estado para as alternativas (A, B, C, D) com seus textos iniciais vazios
    const [alternativas, setAlternativas] = useState(
        [
            {id: 'A', text: ''},
            {id: 'B', text: ''},
            {id: 'C', text: ''},
            {id: 'D', text: ''},
        ]
    );
    // Função para atualizar o texto de uma alternativa com base no ID
    const handleInputChange = (id, text) => {
        // Usando a função setAlternativas para atualizar o estado
        setAlternativas(prevAlternativas => {
            return prevAlternativas.map(alternativa => {
                if (alternativa.id === id) {
                    // Se o ID da alternativa corresponder, atualiza o texto
                    return {...alternativa, text};
                }
                // Mantém as outras alternativas inalteradas
                return alternativa;
            });
        });
    };
    // O componente renderiza o seguinte HTML JSX
    return (
        <div>
            <div>
                {/* Cabeçalho com um logotipo clicável que navega para a página inicial */}
                <nav className="cabeçalho">
                    <img className="logo" src={logo} alt='Eduquiz' onClick={() => { navigate('/') }} />
                </nav>
            </div>
            <div id="enunciadoDiv">
                {/* Campo de entrada de texto para o enunciado da questão */}
                <input type="text" id="enunciado" placeholder="Escreva o enunciado da questão" />
            </div>
            <div id="alternativasDiv">
                {/* Mapeia as alternativas e renderiza campos de texto para cada uma */}
                {alternativas.map(alternativa => (
                    <textarea
                        key={alternativa.id}
                        style={{backgroundColor: "#d9d9d9"}}
                        className="alternativa"
                        placeholder={`Texto da alternativa ${alternativa.id}`}
                        value={alternativa.text}
                        onChange={(e) => handleInputChange(alternativa.id, e.target.value)}
                    />
                ))}
            </div>
            <div id="divButtonCriar">
                  <button id="criarButton" onClick={ () => {window.location.reload() }} > Criar </button>
            </div>
        </div>
    );
}
export default CriarQuestao;
/* Resumidamente, este código cria um componente React que renderiza um formulário de criação de questões com campos de texto para o enunciado e as alternativas (A, B, C, D).
O estado é usado para rastrear o texto inserido pelo usuário nas alternativas, e a função handleInputChange é chamada quando o usuário digita em um campo de alternativa para 
atualizar o estado correspondente. O logotipo no cabeçalho é clicável e redireciona para a página inicial usando o hook de navegação do react-router-dom.
*/ 