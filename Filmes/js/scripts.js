const baseUrl = "http://localhost:3000/filmes";

const listarFilmes = () => {
  fetch("http://localhost:3000/filmes")
    .then((response) => response.json())
    .then((data) => mostrarFilmes(data));
};

const mostrarFilmes = (filmes) => {
  const htmlRender = filmes.map(
    (filme) => `
    <div class="box">
    <h2>${filme.title}</h2>
    <h2>${filme.year}</h2>
    <img src=${filme.url} alt=${filme.title}>
    <button  id="btn-delete-${filme.id}">Deletar</button>
    </div>
    `
  );
  document.getElementById("app").innerHTML = htmlRender.join("");
  filmes.forEach((filme) => {
    const btnDeletar = document.getElementById(`btn-delete-${filme.id}`);
    btnDeletar.addEventListener("click", () => {
      excluirFilme(filme.id);
    });
  });
};

const adicionarFilme = (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const year = document.getElementById("year").value;

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, url, year }),
  })
    .then(() => {
      listarFilmes();
      document.getElementById("formulario").reset();
    })
    .catch((error) => console.error("Erro ao adicionar filme:", error));
};

document
  .getElementById("formulario")
  .addEventListener("submit", adicionarFilme);

const excluirFilme = (id) => {
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then(() => {
    listarFilmes();
  });
};

window.addEventListener("load", () => {
  listarFilmes();
});
