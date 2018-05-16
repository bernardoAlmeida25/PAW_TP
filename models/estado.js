class Estado {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    get Nome() {
        return this.nome;
    }

    get Descricao() {
        return this.descricao;
    }

}
module.exports = {
    Estado: Estado
}