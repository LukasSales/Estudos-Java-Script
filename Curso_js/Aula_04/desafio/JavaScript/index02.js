let a = String("A"); // apontar para B
let b = String("B"); // apontar para C
let c = String("C"); // apontar para A

console.log(a, b, c);
let aAux = (a)
a = (b);
b = (c);
c = (aAux);

console.log(a, b, c);

// uma maneira mais simples e atual para resolver seria assim:

[a, b, c ] = [c, a, b]; // a vai receber o valor de c, b vai receber o valor de a e c vai receber o valor de b

console.log(a, b, c);