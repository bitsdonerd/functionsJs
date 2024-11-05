// Função para gerar um tempo de resposta aleaório 
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function timeDone(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

async function startPromise() {
    try {
        const fase1 = await timeDone('Fase 1', rand(1,3));
    console.log(fase1);

    const fase2 = await timeDone('Fase 2', rand(1,3));
    console.log(fase2);

    const fase3 = await timeDone('Fase 3', rand(1,3));
    console.log(fase3);
    } catch(e){
        console.log(e);
    }
    
}
startPromise();