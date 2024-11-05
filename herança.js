// Produto -> aumento , desconto 
// Camiseta = Cor, Caneca = material 
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = (quant) => {
    this.preco += quant;
};
Produto.prototype.desconto = (quant) => {
    this.preco -= quant;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Herança da função para Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Herança da função para Caneca 
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    // Adicionando o estoque 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return 'Is not a number!';
            estoque= valor;
        }
    })

}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const prod1 = new Camiseta('Regata', 110, 'Preta');
const prod2 = new Caneca('Caneca Harry Potter', 180, 'Porcelana', 15);
prod2.estoque  = 100;
console.log(prod1);
console.log(prod2.estoque);