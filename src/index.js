import React from 'react';
import Home from './home/Home';
import Login from'./login/login.jsx';
import ReactDOM from 'react-dom/client';
import Cadpais from './cad_pais/cad_pais';
import Cadastro from './cadastro/Cadastro';
import Questao from './telaQuestao/telaQuestao';
import TelaQuizes from './telaQuizes/telaQuizes';
import HomeUsuario from './home-login/Home-login';
import Materia from './select_materia/materias.jsx';
import Telaquestao2 from './telaQuestao/telaquestao2';
import CriarQuestao from './criarQuestao/criarQuestao.jsx';
import MateriaQuestao from './materiaQuestao/materiaQuestao';
import TelaEstatisticas from './estatisticas/telaEstatisticas';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
/*silverladder.com*/
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/">
            <Route index  element={<Home/>} /> 
            <Route path="login" element={<Login/>} />
            <Route path='questao' element={<Questao/>} />
            <Route path="cadpais" element={<Cadpais/>} />
            <Route path="materias" element={<Materia/>} />
            <Route path="cadastro" element={<Cadastro/>} /> 
            <Route path='telaquizes' element={<TelaQuizes/>} />
            <Route path="homeusuario" element={<HomeUsuario/>} />
            <Route path='telaquestao2' element={<Telaquestao2/>} />
            <Route path='criarquestao' element={<CriarQuestao/>} />
            <Route path='estatisticas' element={<TelaEstatisticas/>} />
            <Route path='materiaquestao' element={<MateriaQuestao/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
