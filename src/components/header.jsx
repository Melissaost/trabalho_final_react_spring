import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // Estado para controlar a visibilidade do menu em telas pequenas
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav className="h-[9vh] dark:bg-black relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Infnet - Carros
          </span>
        </a>
        
        {/* Botão hamburguer para telas pequenas */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu de navegação */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto absolute md:static top-[9vh] left-0 z-10`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-black dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/cadastro"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;