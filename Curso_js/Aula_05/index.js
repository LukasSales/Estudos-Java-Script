// strings
// cada string começa com o indice 0, exemplo String= "Lucas", "L" seria o indice 0 e assim sucessivamente.

let umaString = String("Lucas Francisco");

console.log(umaString[6]); // com colchetes eu vou restringir para aparecer o indice 2 da minha string

// outro metodo é esse:

console.log(umaString.charAt(6)); //seria por meio da função charAt (metodo ja que esta em um objeto)

// e para saber onde começa o index de um texto, usamos a função indexof ou lastindexof (essa começa do final da string)

console.log(umaString.indexOf("Francisco")); // se eu colocar indexOf("Francisco", 3) ele vai procurar o começo do "Francisco" a parti do index 3.

// com a função replace posso substituir algo por outra

console.log(umaString.replace("Francisco", "Sales"));

console.log(umaString.toUpperCase()); // para mudar tudo para maisculo
console.log(umaString.toLowerCase()); // para deixar tudo em minusculo