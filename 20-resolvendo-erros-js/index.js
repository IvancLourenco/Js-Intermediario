//let ValorBoleto = 100;

//console.log(valorBoleto)
//console.log(valorBolet)

let inputTelefone = document.getElementById("telefone");

inputTelefone.disabled = true;

function habilitarTelefone(){
    inputTelefone.disabled = false;
    alert("Destravado");
}

function desabilitarTelefone() {
 inputTelefone.disabled = true;
 alert("Travado");
}