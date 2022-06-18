let comida = {
    nome:"Brócolis",
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento){
        console.log("this no contexto do objeto comida ", this)
        this.temperatura = temperaturaDeCozimento
    }
}

comida.cozinhar(200)

console.log(comida)