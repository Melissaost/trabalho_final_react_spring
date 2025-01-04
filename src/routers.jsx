import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./pages/index";
import Layout from "./components/layout";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";
import { Provider } from "react-redux";
import { store } from "./store";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./services/Auth/PrivateRoute"; 

function Routers() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" Component={LoginPage} />
            {/* As rotas protegidas precisam ser envolvidas com PrivateRoute */}
            <Route path="/" element={<PrivateRoute><Initial /></PrivateRoute>} />
            <Route path="/cadastro" element={<PrivateRoute><Cadastro /></PrivateRoute>} />
            <Route path="/detalhes/:id?" element={<PrivateRoute><Detalhes /></PrivateRoute>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default Routers;