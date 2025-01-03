import Header from "./header";
import Footer from "./footer";
import Container from "./container";

/* eslint-disable react/prop-types */
function Layout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
