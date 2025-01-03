import { Link } from "react-router-dom";
import BotaoNavegacao from "../BotaoNavegacao";
import logo from './assets/logo.png';
import usuario from './assets/usuario.svg';
import cadastrar from './assets/cadastrar.svg';
import './BarraNavegacao.css';
import React from 'react';

function BarraNavegacao() {
    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>
            <div className="navegacao">
            </div>
            <ul className="acoes">
                <li>
                    <BotaoNavegacao 
                    texto="Login" 
                    textoAltSrc="Icone representando um usuário" 
                    imagemSrc={usuario} 
                    navegarPara="/login"/>
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar Carro"
                        textoAltSrc="Icone representando por adição"
                        imagemSrc={cadastrar}
                        navegarPara="/cadastro"
                    />
                </li>
            </ul>
        </nav>
    );
}

export default BarraNavegacao;