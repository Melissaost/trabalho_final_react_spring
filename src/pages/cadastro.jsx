import { useEffect } from "react";
import Form from "../components/form";
import { useDispatch } from "react-redux";
import { setDetalhes } from "../store/slices/carro/reducer";

function Cadastro() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDetalhes());
  }, [dispatch]);

  return <Form />;
}

export default Cadastro;
