const urlBase = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const resposta = await fetch(`${urlBase}/pensamentos`);
      return await resposta.json();
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const resposta = await fetch(`${urlBase}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await resposta.json();
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const resposta = await fetch(`${urlBase}/pensamentos/${id}`);
      return await resposta.json();
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const resposta = await fetch(`${urlBase}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await resposta.json();
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const resposta = await fetch(`${urlBase}/pensamentos/${id}`, {
        method: "DELETE",
      });
      return await resposta.json();
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },
};

export default api;
