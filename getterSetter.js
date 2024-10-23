// Getter - Setter na Constructor Function 
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true, 
        get: function() { // Use o Getter para visualizar o objeto 
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Utilize somente números!');
                return;
            }

            estoque = valor;
        }
    })
}

const newProduct = new Produto('Camisa', 110, 10);
newProduct.estoque = 1000;
console.log(newProduct.estoque);

// Getter - Setter na Factory Function 
function criaProduto (nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}
const nomeProduto = criaProduto('Suplemento');
console.log(nomeProduto.nome);