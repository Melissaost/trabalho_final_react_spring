import axios from 'axios';
import { LoginData } from '../../models/loginData';


class UsuarioService {
    apiUrl = "http://localhost:8080";
    serverPath = "/api/usuarios/login";

    authenticateUser = async (loginData: LoginData) => {
        try {
            const response = await axios.post(this.apiUrl + this.serverPath, loginData);
            sessionStorage.setItem('token', response.data.token);
            return response;  
        } catch (erro) {
            if (erro?.response?.data?.message) {
                alert(erro.response.data.message);
            } else {
                alert('Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte!');
            }
            return null;
        }
    };

}
export default UsuarioService;