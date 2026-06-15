import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formulario = document.getElementById("pensamento-form");
  const btnCancelarFormulario = document.getElementById("botao-cancelar");

  formulario.addEventListener("submit", manipularEnvioFormulario);
  btnCancelarFormulario.addEventListener("click", cancelarEnvioFormulario);
});

async function manipularEnvioFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.salvarPensamento({ conteudo, autoria });
    ui.renderizarPensamentos();
  } catch {
    alert("Ops, algo deu errado ao salvar o pensamento.");
  }
}

function cancelarEnvioFormulario() {
  ui.limparFormulario();
}
