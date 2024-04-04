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

function addRemErro(campo, condicao) {
  if (condicao) {
    campo.classList.remove("correct")
    campo.classList.add("error");
  } else {
    campo.classList.add("correct")
    campo.classList.remove("error");
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

nomeInput.addEventListener("input", () => {
  addRemErro(nomeInput, nomeInput.value.length < 3);
});
sobrenomeInput.addEventListener("input", () => {
  addRemErro(sobrenomeInput, sobrenomeInput.value.length < 3);
});

cpfInput.addEventListener("input", () => {
  addRemErro(cpfInput, cpfInput.value.length < 11);
});

senhaInput.addEventListener("input", () => {
  addRemErro(senhaInput, senhaInput.value.length < 6);
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

    // Limpa os campos do formulário
    const campos = ["cpf", "nome", "sobrenome", "data_nascimento", "senha"];
    campos.forEach((campo) => {
      document.getElementById(campo).value = "";
    });
  }
});
