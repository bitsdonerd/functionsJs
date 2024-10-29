// Declaração de função (Function hoisting)
function digaOi() {
    console.log('Olá mundo!');
}
digaOi();

// First-class objects (Funções podem ser tratadas como dados)
// Function expression 
const souUmDado = function() {
    console.log('Sou um dado'); 
}

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function (Padrão mais novo)
const funcaoArrow = ( ) => {
    console.log('Esse é uma arrow function!');
};
funcaoArrow();

// Function inside object 
const objeto = {
    falar: function() {
        console.log('Parola');
    }
};
objeto.falar();

// Parâmetros de uma função 
// Funções definidas por function sustentantam todos os argumentos enviados 
function funcao () { // Mesmo sem definir os parâmetros da função a engine do JS aceita os argumentos
    let total = 0 
    for (let argumentos of arguments) { 
        total += argumentos;
    }
    console.log(total);
}
funcao(1,2,3,4,5,6,7,8);

// Nested Function - Matroska 
function criaMultiplicador (multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

// Escopo Léxico - Closures 
// Escopo léxico ocorre quando temos um aninhamento de funções. 
// Significa dizer que funções aninhadas podem acessar variáveis 
// dentro de outros blocos  de funções ao qual façam parte
function retornaFunction () {
    const nome = 'Lucas';
    return function () {
        return nome;
    };
}
const funcao = retornaFunction();
console.log(funcao);