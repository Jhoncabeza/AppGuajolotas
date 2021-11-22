import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Formulario from './Formulario/Formulario';
import Registrarse from './Registrarse/Registrarse';
import Modal from './Home/Modal';
import BuscadorModal from './Buscador/BuscadorModal';



function AppLinks() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/"         element={<Formulario/>} />
          <Route exact path="/Login"    element={<Registrarse/>} />
          <Route exact path="/Home"     element={<Home/>} />
          <Route exact path="/Products" element={<Modal/>} />
          <Route exact path="/Search"   element={<BuscadorModal />}/>
          <Route exact path="/Car" />
        </Routes>
      </Router>
    </div>
  );
}
export default AppLinks;
