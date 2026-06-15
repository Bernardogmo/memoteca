const api = {
  async buscarPensamentos() {
    try {
      const resposta = await fetch("http://localhost:3000/pensamentos");
      return await resposta.json();
    } catch (error) {
      alert("Ops, algo deu errado.");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const resposta = await fetch("http://localhost:3000/pensamentos", {
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
};

export default api;
