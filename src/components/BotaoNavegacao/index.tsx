import './BotaoNavegacao.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BotaoNavegacaoProps {
    imagemSrc: string;
    textoAltSrc: string;
    texto?: string;
    onClick?: () => void;
    navegarPara?: string;
}

const BotaoNavegacao = ({ imagemSrc, texto, textoAltSrc, onClick, navegarPara }: BotaoNavegacaoProps) => {
    const navigate = useNavigate();

    const manipularClick = () => {
        if (onClick) {
            onClick();
        }

        if (navegarPara) {
            navigate(navegarPara);
        }
    };

    return (
        <button className="btn-nav" onClick={manipularClick}>
            <img src={imagemSrc} alt={textoAltSrc} />
            {texto}
        </button>
    );
};

export default BotaoNavegacao;