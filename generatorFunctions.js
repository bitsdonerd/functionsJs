// Geradores são funções cuja execução pode ser interrompida e posteriormente reconduzida.
// Lazy evaluation 
// Se utilziar return no lugar de yield a função geradora PARA de rodar.
function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
//console.log(g1.next().value); // Visualizando o valor 1
//console.log(g1.next().value); // Visualizando o valor 2
//console.log(g1.next().value); // Visualizando o valor 3

// Pode-se utilizar o For para visualizar os valores do gerador
for (let valor of g1) {
    console.log(valor);
}

// Você pode utilizar uma função geradora seguir a outra 
function* geradora2(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora3(){
    yield* geradora2(); // Use yield* para chamar a outra function 
    yield 4;
    yield 5;
    yield 6;
}

const g3 = geradora3();
for (let valor of g3) {
    console.log(valor);
}

// Pode-se utilizar uma função geradora com varios geradores 
function* geradora4() {
    yield function(){
        console.log('Gerador 1');
    }

    yield function() {
        console.log('Gerador 2')
    }
}
const g4 = geradora4();
const f1 = g4.next().value;
const f2 = g4.next().value;

f1();
f2();