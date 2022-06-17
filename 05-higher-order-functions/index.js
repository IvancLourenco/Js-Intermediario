/*const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 2
    let anoDeNascimento = 2022 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log("Seu ano de nascimento é: " + anoDeNascimento)
}

calcularAnoDeNascimento(23, 10, imprimirAnoDeNascimento)*/

 function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
 }

 let dobrar = multiplicar(2)
 let triplicar = multiplicar(3)
 let quadruplicar = multiplicar(4)

  console.log(dobrar(4))
  console.log(triplicar(4))
  console.log(quadruplicar(4))