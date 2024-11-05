class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar () {
        console.log(`${this.nome} ${this.sobrenome} está executando o software!`);
    }
}
const usuario1 = new Pessoa('Lucas', 'Martins');
console.log(usuario1.falar());