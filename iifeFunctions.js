// IIFE - Immediately invoked function expression 
// Função definida dentro de parenteses onde sua chamada é realizada imediatamente ao final 
(function(){
    console.log('Está é uma função IIFE');
})();

(function (altura, peso){
    const idade = 26;
    function criaNome (nome) {
        return nome + idade;
    }

    function nomeIdade () {
        console.log(criaNome('Lucas'));
    }

    nomeIdade();
    console.log(altura,peso);
})(1.75,88);