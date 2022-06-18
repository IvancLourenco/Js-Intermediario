let usuario = {
    nome:"ivan",
    excluir: function(){
        console.log("O usuário, " + this.nome +" foi excluido!")
    }
}

usuario.excluir()