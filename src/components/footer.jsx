function Footer() {
    return (
      <footer className="h-[9vh] overflow-auto bg-white shadow dark:bg-black overflow-hidden">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://infnet.edu.br" className="hover:underline">
              Infnet
            </a>
            . &copy;Todos os direitos reservados.
          </span>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  