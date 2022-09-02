// valor da constante não pode ser modificado
// utilizasse CONST
// se eu começar a criar uma constante ja tenho que definir um valor para ela.
// o VAR é uma tag que permite que a gente redeclare a variável e isso é um comportamento que foi corrigido com a tag LET

const nome = String("João");

const primeiroNumero = Number(5);
const segundoNumero = Number(10);
let terceiroNumero = parseInt('5'); // parseInt ou parseFloat transforma a string em um número inteiro ou de ponto flutuante

const resultado = Number(primeiroNumero * segundoNumero);

console.log(resultado)

console.log(typeof(primeiroNumero))