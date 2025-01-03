import { Link } from "react-router-dom";

function ErrorCarro() {
  return (
    <div className="error">
      <h2>Carro não foi encontrado.</h2>
      <h5>Não foi possível encontrar o carro buscado.</h5>
      <br />
      <br />
      <br />
      <br />
      <Link to="/">Volte para pagina Inicial</Link>
    </div>
  );
}

export default ErrorCarro;
