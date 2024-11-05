// Utilizando Promisses para calcular o tempo de resposta de uma função 
function timeDone(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}
// Sempre que usar resolve use then() e reject use catch();
// catch() é sempre atribuido a error
timeDone('Conectando com o BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return timeDone('Buscando base de dados...', rand(1,3));
    })
    .then(resposta => {
        console.log( resposta);
        // return timeDone(2222, rand(1,3)); Para testar o catch()  
    })
    .catch(e => {
        console.log('ERROR: ', e);
    });

// Função para gerar um tempo de resposta aleaório 
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
// Tipos de Promises fundamentais - Promise.all(); Promise.race(); Promise.resolve(); Promise.reject();
// Promise.all()
const promises = [
    'Array de promises: ',
    timeDone('Promise 1', 3000),
    timeDone('Promise 2', 500),
    timeDone('Promise 3', 1000)
];

Promise.all(promises).then((v) =>{
    console.log(v);
})

// Promise.resolve()
function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache.');
    } else {
        return timeDone('Baixei a página', 3000);
    }
}
baixaPagina()
    .then((dados) =>{
        console.log(dados);
    })
    .catch((e) => {
        console.log(e);
    });