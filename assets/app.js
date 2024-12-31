let contador = 0;
let entrada = document.querySelector(".entrada");
let botaoAdicionar = document.querySelector(".bi-plus");
let main = document.getElementById("minha-lista");
const limparTudo = document.querySelector(".bi-trash2-fill");
let minhaLista = document.getElementById("minha-lista");

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcar(id) {
  var marcarLista = document.getElementById(id);
  if (marcarLista.style.textDecoration === "line-through") {
    marcarLista.style.textDecoration = "none";
  } else {
    marcarLista.style.textDecoration = "line-through";
  }
}

limparTudo.addEventListener("click", function () {
  minhaLista.remove();
});

botaoAdicionar.addEventListener("click", function () {
  let valorEntrada = entrada.value.trim();

  ++contador;
  if (valorEntrada !== "") {
    let novaTarefa = document.createElement("div");
    novaTarefa.id = `${contador}`;
    novaTarefa.classList.add("lista");

    novaTarefa.innerHTML = `
      <div class="lista-checkbox">
        <input onclick="marcar(${contador})" type="checkbox" />
      </div>
      <div class="lista-descricao">${valorEntrada}</div>
      <div class="lista-lixeira">
        <i onclick="deletar(${contador})" class="bi bi-trash-fill"></i>
      </div>
    `;

    main.appendChild(novaTarefa);

    entrada.value = "";
    console.log("botao adicionado");
  }

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      botaoAdicionar.click();
    }
  });
});
