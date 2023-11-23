import React from 'react';
import Home from './home/Home';
import Login from'./login/login.jsx';
import ReactDOM from 'react-dom/client';
import Cadpais from './cad_pais/cad_pais';
import Cadastro from './cadastro/Cadastro';
import Questao from './telaQuestao/telaQuestao';
import TelaQuizes from './telaQuizes/telaQuizes';
import MateriaQuestao from './materiaQuestao/materiaQuestao';
import Materia from './select_materia/materias.jsx';
import HomeUsuario from './home-login/Home-login';
import CriarQuestao from './criarQuestao/criarQuestao.jsx';
import TelaEstatisticas from './estatisticas/telaEstatisticas';
import RealTimeFormValidation from './validation'
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
            <Route path="homeusuario" element={<HomeUsuario/>} />
            <Route path="cadastro" element={<Cadastro/>} /> 
            <Route path="materias" element={<Materia/>} />
            <Route path='telaquizes' element={<TelaQuizes/>} />
            <Route path='materiaquestao' element={<MateriaQuestao/>} />
            <Route path='criarquestao' element={<CriarQuestao/>} />
            <Route path='estatisticas' element={<TelaEstatisticas/>} />
            <Route path='validacao' element={<RealTimeFormValidation/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);