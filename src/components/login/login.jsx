import { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const usuarioService = new UsuarioService();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const usuario = {
            email,
            password,
        };
    
        const resposta = await usuarioService.authenticateUser(usuario);
    
        if (resposta) {
            setEmail('');
            setPassword('');
            navigate('/');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;