// Constuctor Functions 
// Funções construtoras não precisam de camelCase e devem iniciar com Letra Maiúscula 
// Construtora -> new Pessoa
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.metodo = function () {
            console.log(this.nome + ': sou um método');
        };
    }
}

const p1 = new Pessoa('Lucas','Martins');
const p2 = new Pessoa('Gabriela', 'Guedes');
p1.metodo();
p2.metodo();

// New - Cria um novo objeto e atrela a palavra this a esse objeto 

function Player1(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Caso queira travar o valor do objeto
    // Object.freeze(this);
}

const pl1 = new Player1('Lucas','Martins');
console.log(pl1);

// Objetos com construtor 
const pessoa = new Object();
pessoa.nome = 'Lucas';
pessoa.sobrenome = 'Martins';
pessoa.idade = 26;
pessoa.falarNome = function () {
    return (`${this.nome} é um usuário desse sistema!`);
};

pessoa.falarNome();

// Crie uma função construtora para exibir a data de nascimento 
pessoa.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.getDataNascimento());

//console.log(pessoa.nome); 
//console.log(pessoa['sobrenome']);
