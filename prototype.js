function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.aumento(25);

// Criar Objeto Literal para setar o Prototype 
const p2 = {
    nome: 'Calça',
    preco: 150
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

console.log(p1);
console.log(p2);

// Setar o prototype direto no objeto 
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    }
});
p3.aumento(10);
console.log(p3);