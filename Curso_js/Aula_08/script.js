// aprendendo sobre arrays (listas)

// o ideal é fazer uma lista para cada tipo de dado (tipo uma para strings, outra para números, outra para booleanos, etc)

const listaNomes = ["Lucas", "Luana", "Maria", "Levi", "Rafael", "Rosangela"];

// console.log(listaNomes.indexOf("Maria")); pra ver a posição de algum elemento
// console.log(listaNomes[3]); pra ver algum indice
// console.log(listaNomes); pra ver a relação da lista
// listaNomes[6] = ("Gato"); caso o indice não exista, eu estou adicionando na lista, caso ja exista eu estou alterando
// listaNomes[listaNomes.length] = ("Gato"); assim tbm consigo adicionar elementos sem precisar saber o tamanho da lista, são adicionados por ultimo
// listaNomes.push("Gato"); assim funciona igual ao do length
// listaNomes.unshift("Gato"); Aqui adiciona ao começo da lista
// listaNomes.pop(); essa função exclui o último elemento da lista e da pra salvar o elemento excluido em uma variável (const removido = listaNomes.pop();)
// listaNomes.shift(); essa função remove o elemento do começo da lista
//delete listaNomes[1]; essa função apaga pelo indice e deixa esse indice vazio para que um novo elemento entre. Dessa forma a ordem e o indice dos valores não são alterados.
console.log(listaNomes);