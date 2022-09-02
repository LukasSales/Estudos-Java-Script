// objeto math faz diversas operações matematicas.

let num1 = (9.8192398);
let arrendodar = Math.floor(num1); // arrendoda para baixo
console.log(arrendodar);

let num2 = (9.8192398);
let arrendod = Math.ceil(num1); // arrendoda para cima
console.log(arrendod);

let num3 = (9.8192398);
let arrend = Math.round(num1); // arrendoda da forma correta
console.log(arrend);

// para achar o maior valor usa o MAX e para achar o menor usa MIN

console.log(Math.max(1,2,3,4,5,6,7,8,9,11111,222222));

// para gerar número aleatorio entre 0 e 1 usasse o random

console.log(Math.random());

// para determinar o intervalo do número aleatorio se faz assim "Math.random() * (x -y) +y;"

const aleatorio = Math.round(Math.random() * (100 -40) +40);
console.log(aleatorio);

// para arrendodar é so colocar dentro do round