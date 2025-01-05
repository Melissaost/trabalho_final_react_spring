import Footer from "./footer";
import BarraNavegacao from "./BarraNavegacao";

/* eslint-disable react/prop-types */
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <BarraNavegacao />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
