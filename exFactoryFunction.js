// Exemplo de Factory Function 
function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        
        falar() {
            console.log(`${this.nome} está falando!`);
        },

        comer(){
            console.log(`${this.nome} está comendo.`);
        },

        beber(){
            console.log(`${this.nome} está bebendo.`);
        }
    };

    // Para acessar os objetos - Object.create()
    // Criar objetos pelo prototype economiza recursos e memória
    return Object.create(pessoaPrototype, {
        nome: {value: nome}, // add value a chave - {value: chave}
        sobrenome: {value: sobrenome}
    }); 
}

const pessoa = criaPessoa('Lucas', 'Martins');
console.log(pessoa.beber());