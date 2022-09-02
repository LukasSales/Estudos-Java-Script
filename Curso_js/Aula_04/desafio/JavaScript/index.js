const nome = String(window.prompt("Qual é o seu nome? "));
const numb1 = parseFloat(window.prompt("Digite um número: "));
const numb2 = parseFloat(window.prompt("Digite outro número: "));
let resultado = (numb1 + numb2);

window.alert(`${nome}! O valor de ${numb1} + ${numb2} é igual a: ${resultado}`);