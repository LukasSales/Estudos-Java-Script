// para obter o valor de um número em binário se utiliza "toString(2)"

let numb1 = (1);
let numb2 = (3);
let numb3 = (2045);

console.log(numb1.toString(2));
console.log(numb2.toString(2));
console.log(numb3.toString(2));

// pra definir quantas casas decimais eu quero exibir uso "toFixed(aqui vou informar quantas casas depois da virgula eu quero)" isso arredonda o valor

let numb4 = (12.9283498294892839);

console.log(numb4.toFixed(2));

// para saber se o valor é inteiro ou não (verdadeiro ou falso) é usado o "Number.isInteger(aqui vai o nome da variavel)"

console.log(Number.isInteger(numb2));

// o Js tem uma imprecisão nas contas, exemplo

let valor1 = (0.7);
let valor2 = (0.1);

let conta = (valor1 + valor2); // 0.8
conta += (valor2); // 0.9
conta += (valor2); // 1 (porem isso não acontece, vc fica com 0.9999999)

console.log(conta); // para corrigir essa imprecisão deve ser feito

conta = parseFloat(conta.toFixed(2));
console.log(conta); // agora vai estar retornando o valor correto