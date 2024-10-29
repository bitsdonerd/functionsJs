// Callback de funções 

// Função que retorna um número aleatório entre 1000 e 3000 milesegundos 
// setTimeout para simular um retorno de função com tempo maior 
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

console.log(rand());

function f1(callback) {
    setTimeout(function() {
        console.log('F1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('F2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('F3');
        if (callback) callback();
    }, rand());
}

// Callback Hell - Para executar todas as funções na ordem 
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Callback Hell executado!');
        });
    });
});