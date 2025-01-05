import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorCarro from "../components/error";
import { getDetalhesCarro } from "../store/slices/carro/actions";
import { useDispatch, useSelector } from "react-redux";

function Detalhes() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const carro = useSelector((state) => state.carros.detalhe);

  useEffect(() => {
    dispatch(getDetalhesCarro(id));
  }, [dispatch, id]);

  if (!carro.id) {
    return <ErrorCarro />;
  } else {
    return <Form isEdit />;
  }
}

export default Detalhes;
