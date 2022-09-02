/* Aprendendo sobre objetos
* Tudo que esta dentro de chaves{} é um objeto
* 
*const pessoas = {
*    nome: "Lucas",
*    sobrenome: "Francisco",
*    idade: 25
*};
*console.log(pessoas.nome); modo literal de criar objetos 
*
* 
* 
* 
* 
* 
* 
* 
*/

function criarPessoas(nome, sobrenome, idade) {
    return { //esta retornando um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }; // como há uma repetição "nome: nome, sobrenome: sobrenome, etc" podemos excluir o "nome:" e deixar so a segunda parte para diminuir o código, pois o js vai entender que é pra criar uma variavel nome com o valor nome. Sem precisar repetir. 
};

const pessoa1 = criarPessoas("Lucas", "Francisco", 23); // assim eu crio valores utilizando a função e armazeno no objeto
const pessoa2 = criarPessoas("Ademar", "Xavier", 20);
const pessoa3 = criarPessoas("Eduardo", "Fran", 21);
const pessoa4 = criarPessoas("Lula", "Inacio", 22);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
// dessa forma fica mais fácil criar uma base de dados sobre algo ou alguém


// console.log(criarPessoas("Lucas", "Francisco", "23")); // assim retorno valores