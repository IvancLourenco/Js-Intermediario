/*
let videoGame = {
    nome: "Xbox",
    valor: 3000,
    jogos: [
        {
            nome: "Fallout"}, 
        {
            nome: "Final fantasy"}
        ]
}

let jogo3 = {
    nome: "Fifa"
}
videoGame.jogos.push(jogo3)

console.log(videoGame)
*/

let cliente ={
    nome: "ivan",
    ultimoPedido: {
        produto: "Xbox",
        valor : 3000,
        jogos: [
            {nome: "Fifa"}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)