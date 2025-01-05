import axiosInstance from '../Auth/axiosInstance';
import { Carro } from '../../models/carro';

class CarroService {
  private apiUrl = "http://localhost:8080";
  private serverPath = "/api/carros";
  private headers = {
    'Content-Type': 'application/json',
  };

  // Método para salvar o carro
  save = async (carro: Carro) => {
    try {
      const url = `${this.apiUrl}${this.serverPath}`;
      const response = await axiosInstance.post(url, carro, { headers: this.headers });
      return response;
    } catch (error) {
      console.error("Erro ao salvar o carro", error);
      throw error;
    }
  }

  // Método para obter carros paginados
  getAllPaginated = (page: number, limit: number) => {
    return axiosInstance.get(`${this.apiUrl}${this.serverPath}`, {
      headers: {
        ...this.headers,
        page: page,
        size: limit,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao carregar os dados", error);
    });
  }

  // Método para obter todos os carros sem paginação
  getAll = (limit: number) => {
    return axiosInstance.get(`${this.apiUrl}${this.serverPath}`, {
      headers: {
        ...this.headers,
        page: 0,
        size: limit,
      },
    })
    .then((response) => response.data.content)
    .catch((error) => {
      console.error("Erro ao carregar os dados", error);
    });
  }

  // Método para deletar um carro
  delete = (id: number) => {
    return axiosInstance.delete(`${this.apiUrl}${this.serverPath}/${id}`, { headers: this.headers });
  }

  // Método para obter um carro pelo ID
  getById = (id: number) => {
    return axiosInstance.get<Carro>(`${this.apiUrl}${this.serverPath}/${id}`, { headers: this.headers });
  }

  // Método para atualizar um carro
  update = (id: number, carro: Carro) => {
    const url = `${this.apiUrl}${this.serverPath}/${id}`;
    return axiosInstance.put(url, carro, { headers: this.headers });
  }

  // Método para buscar carros com filtros
  search = (filters: { modelo?: string; fabricante?: string; pais?: string }) => {
    return axiosInstance.get(`${this.apiUrl}/api/carros/search`, {
      headers: {
        ...this.headers,
        modelo: filters.modelo || '',
        fabricante: filters.fabricante || '',
        pais: filters.pais || '',
      },
    })
    .then((response) => response)
    .catch((error) => {
      console.error('Erro ao buscar carros:', error);
      throw error;
    });
  }

  // Método para exportar carros em formato CSV
  exportCars = () => {
    return axiosInstance.get(`${this.apiUrl}${this.serverPath}/export-cars`, {
      responseType: 'blob',
      headers: this.headers,
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'carros.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Erro ao exportar carros", error);
      throw error;
    });
  }
}

export default CarroService;