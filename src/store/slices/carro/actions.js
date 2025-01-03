import CarroService from "../../../services/CarroService";
import { setCarros, setDetalhes, setLoading, setTotal } from "./reducer";
import Swal from "sweetalert2";

const carroService = new CarroService();

export const getAllPaginated = (page, limit) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await carroService.getAllPaginated(page, limit);
    dispatch(setCarros(response.content));
    dispatch(setTotal(response.totalElements));
  } catch (error) {
    console.log('Erro', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getDetalhesCarro = (id) => async (dispatch) => {
  try {
    const result = await carroService.getById(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    console.log("error", error);
  }
};

export const editForm = (field, value) => async (dispatch, getState) => {
  const carro = getState().carros.detalhe;

  dispatch(
    setDetalhes({
      ...carro,
      [field]: value,
    }),
  );
};

export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const carro = getState().carros.detalhe;

      if (editForm) {
        const id = carro.id;
        await carroService.update(id, carro);
      } else {
        await carroService.save(carro);
      }
      
      dispatch(getAllPaginated());

      Swal.fire({
        title: "Sucesso !",
        text: `O carro ${editForm ? "editado" : "cadastrado"} com sucesso.`,
        icon: "success",
      });

      return Promise.resolve();
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Erro!",
        text: `Aconteceu um erro ao ${editForm ? "atualizar" : "cadastrar"} o carro.`,
        icon: "error",
      });
      throw new Error(
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`,
      );

    }
  };

  export const deleteCarro = (carro) => async (dispatch) => {
    Swal.fire({
      title: `Deseja excluir o carro ${carro.modelo}?`,
      text: "Após a exclusão, esta tarefa não poderá ser desfeita.",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#cccc",
      confirmButtonText: "Confirmar Exclusão",
      confirmButtonColor: "green",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await carroService.delete(carro.id);
  
          Swal.fire({
            title: "Sucesso!",
            text: `Carro ${carro.modelo} foi excluído com sucesso.`,
            icon: "success",
          });
  
          dispatch(getAllPaginated());
        } catch (error) {
          Swal.fire({
            title: "Ops!!!",
            text: error.message || "Aconteceu um erro ao tentar deletar",
            icon: "error",
          });
        }
      }
    });
  };
