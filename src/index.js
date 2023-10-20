import React from 'react';
import Home from './home/Home';
import Login from'./login/login.jsx';
import ReactDOM from 'react-dom/client';
import Cadpais from './cad_pais/cad_pais';
import Cadastro from './cadastro/Cadastro';
import Questao from './telaQuestao/telaQuestao';
import TelaQuizes from './telaQuizes/telaQuizes';
import QuestaoPai from './questao_pai/questao_pai';
import Materia from './select_materia/materias.jsx';
import CriarQuestao from './criarQuestao/criarQuestao.jsx';
import TelaEstatisticas from './estatisticas/telaEstatisticas';
import RealTimeFormValidation from './validation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/">
            <Route index  element={<Home/>} /> 
             <Route path="login" element={<Login/>} />
             <Route path='Questao' element={<Questao/>} />
             <Route path="cadpais" element={<Cadpais/>} />
            <Route path="cadastro" element={<Cadastro/>} /> 
             <Route path="materias" element={<Materia/>} />
             <Route path='telaQuizes' element={<TelaQuizes/>} />
             <Route path='QuestaoPai' element={<QuestaoPai/>} />
             <Route path='criarQuestao' element={<CriarQuestao/>} />
             <Route path='estatisticas' element={<TelaEstatisticas/>} />
             <Route path='validacao' element={<RealTimeFormValidation/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);