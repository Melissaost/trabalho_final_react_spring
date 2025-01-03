import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/carro/actions";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carro = useSelector((state) => state.carros.detalhe);

  const changeField = (field, value) => dispatch(editForm(field, value));
  const submitForm = () => dispatch(saveForm(isEdit)).then(() => navigate("/"));

  return (
    <div className="cadastro p-[5%] h-[82vh]">
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="modelo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Modelo
            </label>
            <input
              type="text"
              id="modelo"
              onChange={(e) => changeField("modelo", e.target.value)}
              placeholder="Digite aqui o Modelo"
              value={carro?.modelo || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="fabricante"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Fabricante
            </label>
            <input
              type="text"
              id="fabricante"
              onChange={(e) => changeField("fabricante", e.target.value)}
              placeholder="Digite aqui o Fabricante"
              value={carro?.fabricante || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="cor"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Cor
            </label>
            <input
              type="cor"
              id="cor"
              onChange={(e) => changeField("cor", e.target.value)}
              placeholder="Digite a cor"
              value={carro?.cor || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cavalosDePotencia"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Cavalos De Potencia
            </label>
            <input
              type="cavalosDePotencia"
              id="pais"
              onChange={(e) => changeField("cavalosDePotencia", e.target.value)}
              placeholder="Digite a quantidade de cavalos de potencia"
              value={carro?.cavalosDePotencia || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="ano"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Ano
            </label>
            <input
              type="ano"
              id="ano"
              onChange={(e) => changeField("ano", e.target.value)}
              placeholder="Digite o ano"
              value={carro?.ano || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pais"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Pais
            </label>
            <input
              type="pais"
              id="pais"
              onChange={(e) => changeField("pais", e.target.value)}
              placeholder="Digite o pais"
              value={carro?.pais || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-center w-full gap-10">
          <button
            type="button"
            onClick={submitForm}
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
            Salvar
          </button>
          <button
            type="button" 
            onClick={() => navigate(`/`)}
            className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
