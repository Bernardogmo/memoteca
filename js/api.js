const urlBase = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const resposta = await axios.get(`${urlBase}/pensamentos`);
      return resposta.data;
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const resposta = await axios.post(`${urlBase}/pensamentos`, pensamento);
      return resposta.data;
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const resposta = await axios.get(`${urlBase}/pensamentos/${id}`);
      return resposta.data;
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const resposta = await axios.put(
        `${urlBase}/pensamentos/${pensamento.id}`,
        pensamento,
      );
      return resposta.data;
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const resposta = await axios.delete(`${urlBase}/pensamentos/${id}`);
      return resposta.data;
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },
};

export default api;
