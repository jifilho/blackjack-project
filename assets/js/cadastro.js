const modal = document.getElementById("myModal");
const overlay = document.getElementById("overlay");
const loginLink = document.getElementById("openModal");
const spanClose = document.getElementsByClassName("close")[0];
const myForm = document.getElementById("myForm");

function abrirModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

function addRemErro(campo, condicao, mensagemId, mensagem) {
  const mensagemErro = document.getElementById(mensagemId);
  if (condicao) {
    campo.classList.remove("correct");
    campo.classList.add("error");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
    mensagemErro.style.color = "red"; // Estilo da mensagem de erro
  } else {
    campo.classList.add("correct");
    campo.classList.remove("error");
    mensagemErro.textContent = ""; 
    mensagemErro.style.display = "none";
  }
}

loginLink.addEventListener("click", abrirModal);

document.addEventListener("keyup", (evento) => {
  if (evento.key === "Escape") {
    fecharModal();
  } else {
    console.log("Houve uma falha! ");
  }
});

spanClose.onclick = fecharModal;

const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const sobrenomeInput = document.getElementById("sobrenome");
const senhaInput = document.getElementById("senha");

nomeInput.addEventListener("blur", () => {
  if (nomeInput.value.trim() !== "") {
    addRemErro(nomeInput, nomeInput.value.length < 3, "nomeError", "Seu nome deve ter mais de 3 caracteres.");
  }
});
sobrenomeInput.addEventListener("blur", () => {
  if (sobrenomeInput.value.trim() !== ""){
  addRemErro(sobrenomeInput, sobrenomeInput.value.length < 3, "sobrenomeError", "Sobrenome tem que ter mais de 3 caracteres");  
  }
});

cpfInput.addEventListener("blur", () => {
  if (cpfInput.value.trim() !== ""){
  addRemErro(cpfInput, cpfInput.value.length < 11, "cpfError", "CPF tem que ter mais de 11 caracteres");
  }
});

senhaInput.addEventListener("blur", () => {
  if(senhaInput.value.trim() !== ""){
  addRemErro(senhaInput, senhaInput.value.length < 6, "senhaError", "Senha tem que ter mais de 6 caracteres");
  }
});

myForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const dataNascimentoInput = document.getElementById("data_nascimento");

  addRemErro(nomeInput, nomeInput.value.length < 3);
  addRemErro(sobrenomeInput, sobrenomeInput.value.length < 3);
  addRemErro(cpfInput, cpfInput.value.length < 11);
  addRemErro(senhaInput, senhaInput.value.length < 6);

  if (
    nomeInput.classList.contains("error") ||
    sobrenomeInput.classList.contains("error") ||
    cpfInput.classList.contains("error") ||
    senhaInput.classList.contains("error")
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
  } else {
    alert(
      "CPF: " +
        cpfInput.value +
        "\nNome: " +
        nomeInput.value +
        "\nSobrenome: " +
        sobrenomeInput.value +
        "\nData de Nascimento: " +
        dataNascimentoInput.value +
        "\nSenha: " +
        senhaInput.value + 

        "\n\nCadastro Feito com sucesso!"
    );

    const campos = ["cpf", "nome", "sobrenome", "data_nascimento", "senha"];
    campos.forEach((campo) => {
      document.getElementById(campo).value = "";
    });
  }
});
