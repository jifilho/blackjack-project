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
  if (mensagemErro) { 
    if (condicao) {
      campo.classList.remove("correct");
      campo.classList.add("error");
      mensagemErro.textContent = mensagem;
      mensagemErro.style.display = "block";
      mensagemErro.style.color = "red";
    } else {
      campo.classList.add("correct");
      campo.classList.remove("error");
      mensagemErro.textContent = ""; 
      mensagemErro.style.display = "none";
    }
  }
}

function limparClasses() {
  const campos = document.querySelectorAll("#myForm input");
  campos.forEach((campo) => {
    campo.classList.remove("correct")
  })
}

loginLink.addEventListener("click", abrirModal);

document.addEventListener("keyup", (evento) => {
  if (evento.key === "Escape") {
    fecharModal();
  }
});

spanClose.onclick = fecharModal;

const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

nomeInput.addEventListener("blur", () => {
  if (nomeInput.value.trim() !== "") {
    addRemErro(nomeInput, nomeInput.value.length < 3, "nomeError", "Seu nome deve ter pelo menos 3 caracteres.");
  }
});
emailInput.addEventListener("change", () => {
  if (emailInput.value.trim() !== ""){
  addRemErro(emailInput, !emailInput.value.includes('@'), "emailError", "O email deve conter '@'");  
  }
});

cpfInput.addEventListener("blur", () => {
  if (cpfInput.value.trim() !== ""){
  addRemErro(cpfInput, cpfInput.value.length < 11, "cpfError", "CPF deve ter 11 caracteres");
  }
});
cpfInput.addEventListener("input", () => {
  cpfInput.value = cpfInput.value.replace(/\D/g, '');

    if (cpfInput.value.length > 11) {
    cpfInput.value = cpfInput.value.slice(0, 11);
  }
});

senhaInput.addEventListener("blur", () => {
  if(senhaInput.value.trim() !== ""){
  addRemErro(senhaInput, senhaInput.value.length < 6, "senhaError", "Senha deve ter pelo menos 6 caracteres");
  }
});

myForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const dataNascimentoInput = document.getElementById("data_nascimento");

  addRemErro(nomeInput, nomeInput.value.length < 3);
  addRemErro(emailInput, !emailInput.value.includes('@'));
  addRemErro(cpfInput, cpfInput.value.length < 11);
  addRemErro(senhaInput, senhaInput.value.length < 6);

  if (
    nomeInput.classList.contains("error") ||
    emailInput.classList.contains("error") ||
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
        "\nEmail: " +
        emailInput.value +
        "\nData de Nascimento: " +
        dataNascimentoInput.value +
        "\nSenha: " +
        senhaInput.value + 

        "\n\nCadastro Feito com sucesso!"
    );

    limparClasses();
    
    const campos = ["cpf", "nome", "email", "data_nascimento", "senha"];
    campos.forEach((campo) => {
      document.getElementById(campo).value = "";
    });
  }
});