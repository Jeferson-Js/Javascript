const baseUrl = "http://localhost:3000/usuarios";
const mostraLista = () => {
  fetch(`${baseUrl}`)
    .then((response) => response.json())
    .then((data) => renderizaLista(data));
};

const renderizaLista = (usuarios) => {
  const htmlRender = usuarios.map(
    (usuario) => `
    <h2>${usuario.id}</h2>
    <h2>${usuario.name}</h2>
    <h2>${usuario.password}</h2>
    <img src=${usuario.url} alt=${usuario.name}>
    <button id="deletar-user-${usuario.id}">Deletar</button>
      <button id="atualizar-user-${usuario.id}">Atualizar</button>
`
  );
  document.getElementById("app").innerHTML = htmlRender.join("");
  usuarios.forEach((usuario) => {
    const btnExcluir = document.getElementById(`deletar-user-${usuario.id}`);
    btnExcluir.addEventListener("click", () => {
      excluirUsuario(usuario.id);
    });
    const btnAtualizar = document.getElementById(
      `atualizar-user-${usuario.id}`
    );
    btnAtualizar.addEventListener("click", (event) => {
      atualizarUsuario(event, usuario.id);
    });
  });
};

const excluirUsuario = (id) => {
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then(() => {
    mostraLista();
  });
};

const addUsuario = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const url = document.getElementById("url").value;

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, url }),
  }).then(() => {
    mostraLista();
    document.getElementById("formulario-login").reset();
  });
};
document
  .getElementById("formulario-login")
  .addEventListener("submit", addUsuario);

window.addEventListener("load", () => {
  mostraLista();
});

const atualizarUsuario = (event, id) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const url = document.getElementById("url").value;

  fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, url }),
  }).then(() => {
    mostraLista();
    document.getElementById("formulario-login").reset();
  });
};
