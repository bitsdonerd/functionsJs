
// Funções 
function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}

saudacao('Luiz');

// Return function 
function bomDia(pessoa){
    return `Olá humano ${pessoa}!`;
}
const variavel = bomDia('Lucas');
console.log(variavel);

// Math function 
function soma(x,y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,5));

// Variável recebendo uma função 
const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9));

// Arrow function - (Fat function)
const raiz2 = n => n**0.5; 

// Objetos dentro de funções 
const pessoa = {
    nome1: 'Lucas',
    sobrenome1: 'Martins',
    idade1: 26
};
console.log(pessoa.sobrenome1)

// Funções com parâmetros e argumentos (Factor)
function criaPessoa (nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
// Argumentos são os valores que cada parâmetro recebe
const pessoal = criaPessoa('Lucas','Martins', 26)
console.log(pessoal.nome);