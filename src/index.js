import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/Home';
import Cadastro from './cadastro/Cadastro';
import Login from'./login/login.jsx';
import Cadpais from './cad_pais/cad_pais';
import Materia from './select_materia/materias.jsx';
import QuestaoPai from './questao_pai/questao_pai';
import Questao from './telaQuestao/telaQuestao';
import CriarQuestao from './criarQuestao/criarQuestao.jsx';
import TelaQuizes from './telaQuizes/telaQuizes.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
       <Route path="/">
            <Route index  element={ <Home />} /> 
            <Route path="cadastro" element={ <Cadastro/> } /> 
             <Route path="login" element={ <Login/> } />
             <Route path="cadpais" element={ <Cadpais/> } />
             <Route path="materias" element={ <Materia/> } />
             <Route path='QuestaoPai' element={<QuestaoPai/>}/>
             <Route path='Questao' element={<Questao/>}/>
             <Route path='criarQuestao' element={<CriarQuestao/>} />
             <Route path='telaQuizes' element={<TelaQuizes/>} />
       </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

