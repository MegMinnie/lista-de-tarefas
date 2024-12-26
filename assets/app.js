let entrada = document.querySelector(".entrada");
let botaoAdicionar = document.querySelector(".bi-plus");
let main = document.getElementById("minha-lista");

// Função para adicionar tarefa
botaoAdicionar.addEventListener("click", function () {
  let valorEntrada = entrada.value.trim();

  if (valorEntrada !== "") {
    let novaTarefa = document.createElement("div");
    novaTarefa.classList.add("lista");

    novaTarefa.innerHTML = `
      <div class="lista-checkbox">
        <input type="checkbox" />
      </div>
      <div class="lista-descricao">${valorEntrada}</div>
      <div class="lista-lixeira">
        <i class="bi bi-trash-fill"></i>
      </div>
    `;

    console.log("botao adicionado");
  }
});
