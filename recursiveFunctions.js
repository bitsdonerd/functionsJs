// Uma função recursiva é uma função que chama a si mesma até encontrar uma instrução de parar.
recursiveFunction = (max) => {
    if (max >=10) return;
    max ++;
    console.log(max);
    recursiveFunction(max);

}
recursiveFunction(-10);