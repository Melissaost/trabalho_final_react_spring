import axiosInstance from '../Auth/axiosInstance';
import { Carro } from '../../models/carro';


class CarroService {
  apiUrl = "http://localhost:8080";
  serverPath = "/api/carros";


  save = async (carro) => {
    try {
      const url = `${this.apiUrl}${this.serverPath}`;
      const response = await axiosInstance.post(url, carro);
      return response;
    } catch (error) {
      console.error("Erro ao salvar o carro", error);
      throw error;
    }
  }


  getAllPaginated(page: number, limit: number) {
    return axiosInstance.get("http://localhost:8080" + this.serverPath, {
      headers: {
        page: page,
        size: limit,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados", error);
    });
  }

  getAll(limit: number) {
    return axiosInstance.get("http://localhost:8080" + this.serverPath, {
      headers: {
        page: 0,
        size: limit,
      },
    })
    .then((response) => {
      return response.data.content;      ;
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados", error);
    });
  }

  delete(id){
    return axiosInstance.delete("http://localhost:8080" + this.serverPath + "/" + id)
  }

  getById(id:number){
    return axiosInstance.get<Carro>(`http://localhost:8080${this.serverPath}/${id}`)
  }

  update = (id: number, carro) => {
    const url = `${this.apiUrl}${this.serverPath}/${id}`;
    return axiosInstance.put(url, carro);
  }

  search(formData: { origin: string; nome: string; status: string }) {
    return axiosInstance.get<Carro[]>("http://localhost:8080/api/characters/search",{
      headers:{
        nome: formData.nome,
        land: formData.origin,
        status: formData.status
      }
    })
  }
}
export default CarroService;