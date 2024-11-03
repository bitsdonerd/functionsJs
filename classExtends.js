class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado!');
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado!');
            return;
        }
        this.ligado = false;
    }
}
// const d1 = new Dispositivo('Smartphone');
// d1.desligar(); Para desligar o dispositivo 
// console.log(d1);

// Herança de Classes 
class Smartphone extends Dispositivo {
    constructor(nome, modelo) {
        super(nome);
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Iphone', '15 Pro');
s1.ligar()
console.log(s1);
