import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Service from './pages/Services';
import Contato from './pages/Contato';

import Header from "./components/Header";
import Footer from "./components/Footer";

import './styles.css'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Rotas;