// Factory Functions 
// Utilize o this para se referir a um objeto dentro de uma function 
function criaPessoa (nome, sobrenome, a, p) {
    return {
        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },


        nome,
        sobrenome,
        fala (assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,

        // Para transformar o IMC em um atributo use o GETTER - get imc 
        imc ( ) {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
    }
    };
}

const p1 = criaPessoa('Lucas', 'Martins', 1.75, 86);
p1.nomeCompleto = 'Gabriela Guedes Silva';
console.log(p1.nome);
console.log(p1.sobrenome);