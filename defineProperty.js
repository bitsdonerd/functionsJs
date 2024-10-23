// Object Property - Define as propriedades de um objeto 
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Para visualizar a chave do objeto
        value: estoque, // Para add valor ao objeto 
        writable: true, // Para não alterar o valor do objeto 
        configurable: false // Para reconfigurar a chave
    })
}

const newProduct = new Produto('Camisa', 110, 10);
newProduct.estoque = 1000;
console.log(newProduct);

// Object Properties - Define as propriedades para multiplos objetos 
function Loja(produtos, vendas, vendedores) {
    Object.defineProperties(this, {
        produtos: {
            enumerable: true,
            value: produtos,
            writable: true,
            configurable: true
        },
        vendas: {
            enumerable: true,
            value: vendas,
            writable: true,
            configurable: false
        },
        vendedores: {
            enumerable: true,
            value: vendedores,
            writable: false,
            configurable: false
        },
    });
};

const vendasLoja = new Loja('Suplementos', 100, 2);
console.log(vendasLoja);