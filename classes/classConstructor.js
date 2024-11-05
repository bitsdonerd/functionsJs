// Constructor Function - molde(class)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome= sobrenome;
    this.nomeCompleto= () => this.nome + ' ' + this.sobrenome;
}

// Instância 
const pessoa1 = new Pessoa('Lucas','M.'); // Pessoa = Função construtora 
const data = new Date();
//console.dir(pessoa1);

const d1 = data.getFullYear();
console.dir(d1);