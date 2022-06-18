let frutas = ["banana", "maça", "laranja", "pera"]

/* let frutasExtraidas = frutas.slice(1,3)

console.log(frutasExtraidas) */

//let frutasExtraidas = frutas.splice(1,2 ) //remove frutas
 
//console.log(frutasExtraidas)
//console.log(frutas)

let removeEAdicionaFrutas = frutas.splice(1, 2, "Goiaba", "Pêra", "Uva")//adiciona na array

console.log(frutas)