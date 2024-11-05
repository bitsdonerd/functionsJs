// Chave privada com o Symbol - serve para travar o objeto 
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    // SET permite inputar regras e valor para o objeto 
    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    // GET que limita o uso do objeto 
    get velocidade(){
        console.log('GETTER')
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <=0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// For que permite acelerar toda a velocidade do carro 
for(let i=0; i<=200; i++){
    c1.acelerar();
}
// c1.velocidade = 99; - SETTER 
console.log(c1.velocidade); // GETTER