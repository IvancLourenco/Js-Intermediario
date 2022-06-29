function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName("post");

    console.log(posts)
    
    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor= "red";
}
//Adicionando uma classe pelo JS
function aumentarFonteSegundoPost() {
    let textPost = document.getElementsByClassName("texto-post");
    
    textPost[1].classList.add("font-grande")
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById("genero-masculino");

    let radioFeminino = document.getElementById("genero-feminino");
    
    if(genero === 'M') {
        radioMasculino.checked = true;
    } else if (genero === 'F'){
        radioFeminino.checked = true;
    }
}