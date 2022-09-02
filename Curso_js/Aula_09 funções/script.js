/* 
* funções 
* os parenteses é pra informa que essa função esta sendo executada
* os parenteses são usados também para colocar parametros que serão inseridos quando a função for chamada
* o que esta dentro das chaves é o corpo da função
* a tag function pode ser substituida por "=>" no caso function saudacao (nome) {} pode ser substituida por (nome) => {}, nesse caso pode ser eliminado os parenteses, chaves e o return (funções simples)
*/
// ctrl shift L

function saudacao (nome) {
    console.log(`Bom dia, ${nome}!`);
    return 1234; //aqui eu estou fazendo com o que a função retorne esse valor 1234, no caso estou salvando esse valor em saudacao 
};

saudacao ("Lucas"); // aqui estou chamando essa função para ser execultada
saudacao ("Luana"); // assim posso reutilizar a função e alterar so o parametro
const variavel = saudacao("Maria"); // ela execulta normalmente essa função com o parametro
console.log(variavel); //aqui vemos que esta retornando o valor do return

// se eu quiser que a função retorne o valor "Bom dia, nome" então devo excluir a linha do console.log("Bom dia, nome") e deixa esse valor na parte do return

function soma(x, y) {
    const resultado = Number(x + y);
    return resultado; // a função acaba aqui no return
};

console.log(soma(2,3));
console.log(soma(512,254));
console.log(soma(6,3));

function soma2(z = 2, f = 1) { // isso é usado para caso a gente chame a função sem por parametros, ai a função já vai usar valores predefinidos 2 e 1
    const resultado = Number(z + f)
    return resultado
}

console.log(soma2())

const raiz = function(n) {
    const raizQuadrada = (n**1/2)
    return raizQuadrada
};

console.log(raiz(4));