let contador = 0;
let entrada = document.querySelector(".entrada");
let botaoAdicionar = document.querySelector(".bi-plus");
let main = document.getElementById("minha-lista");
const limparTudo = document.querySelector(".bi-trash2-fill");
let minhaLista = document.getElementById("minha-lista");

const tarefas = JSON.parse(localStorage.getItem(`listaDeTarefas`)) || [];

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
  salvarNoLocalStorage();
}

function marcar(id) {
  var marcarLista = document.getElementById(id);
  if (marcarLista.style.textDecoration === "line-through") {
    marcarLista.style.textDecoration = "none";
  } else {
    marcarLista.style.textDecoration = "line-through";
  }
  salvarNoLocalStorage();
}

limparTudo.addEventListener("click", function () {
  main.innerHTML = "";
  localStorage.removeItem("listaDeTarefas");
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
    salvarNoLocalStorage();
    entrada.value = "";
  }
});

entrada.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    botaoAdicionar.click();
  }
});

function salvarNoLocalStorage() {
  const tarefasAtualizadas = [];
  document.querySelectorAll(".lista").forEach((tarefa) => {
    tarefasAtualizadas.push({
      id: parseInt(tarefa.id),
      descricao: tarefa.querySelector(".lista-descricao").innerText,
      marcado: tarefa.querySelector("input[type=checkbox]").checked,
    });
  });
  localStorage.setItem(`listaDeTarefas`, JSON.stringify(tarefasAtualizadas));
}

window.addEventListener("DOMContentLoaded", () => {
  for (let tarefa of tarefas) {
    let novaTarefa = document.createElement("div");
    novaTarefa.id = `${tarefa.id}`;
    novaTarefa.classList.add("lista");

    novaTarefa.innerHTML = `
            <div class="lista-checkbox">
                <input onclick="marcar(${tarefa.id})" type="checkbox" />
            </div>
            <div class="lista-descricao">${tarefa.descricao}</div>
            <div class="lista-lixeira">
                <i onclick="deletar(${tarefa.id})" class="bi bi-trash-fill"></i>
            </div>
        `;
    main.appendChild(novaTarefa);
  }
});
