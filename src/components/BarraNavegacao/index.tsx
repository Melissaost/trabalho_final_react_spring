import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/Auth/AuthContext";
import BotaoNavegacao from "../BotaoNavegacao";
import logo from './assets/logo.png';
import usuario from './assets/usuario.svg';
import cadastrar from './assets/cadastrar.svg';
import './BarraNavegacao.css';

function BarraNavegacao() {
    const { isUserLoggedIn, setIsUserLoggedIn } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setIsUserLoggedIn(false);
        navigate('/login');
    };

      // Estado para controlar a visibilidade do menu em telas pequenas
    const [isOpen, setIsOpen] = useState(false);
    
      // Função para alternar o menu
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                <span
                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                >
                    Infnet - Carros
                </span>
                </Link>
            </h1>
            <div className="navegacao"></div>
            <ul className="acoes">
                {!isUserLoggedIn ? (
                    <li>
                        <BotaoNavegacao
                            texto="Login"
                            textoAltSrc="Ícone representando um usuário"
                            imagemSrc={usuario}
                            navegarPara="/login"
                        />
                    </li>
                ) : (
                    <>
                        <li>
                            <BotaoNavegacao
                                texto="Cadastrar Carro"
                                textoAltSrc="Ícone representando por adição"
                                imagemSrc={cadastrar}
                                navegarPara="/cadastro"
                            />
                        </li>
                        <li>
                            <BotaoNavegacao
                                texto="Sair"
                                textoAltSrc="Ícone representando um usuário"
                                imagemSrc={usuario}
                                onClick={handleLogout}
                            />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default BarraNavegacao;