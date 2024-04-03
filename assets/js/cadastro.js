const modal = document.getElementById("myModal");
const overlay = document.getElementById("overlay");
const loginLink = document.getElementById("openModal")
const spanClose = document.getElementsByClassName("close")[0];


function fecharModal() {
    modal.style.display = "none"
    overlay.style.display = "none"
}

function abrirModal() {
    modal.style.display = "block"
    overlay.style.display = "block"
}

loginLink.addEventListener("click", abrirModal)
    
document.addEventListener("keyup",  (evento) => {
    if (evento.key === "Escape"){
        fecharModal()
    } else {
        console.log("Houve uma falha! ")
    }
})
spanClose.onclick = fecharModal;

// spanClose.onclick = function(){
//     modal.style.display = "none";
//     overlay.style.display = "none";
// }
