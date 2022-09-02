// aprendendo a usar alert, confirm e prompt

alert("Ola, Mundo!"); // esse é um atalho para o de baixo

window.alert("Ola, Mundo!"); // window é o objeto e esta sendo omitido no primeiro exemplo.

window.confirm("Deseja continuar?"); // aqui retorna valorez booleanos

window.prompt("Qual é seu nome?"); 

// quando uma função esta dentro do objeto, ela é chamada de método. Se estiver fora do objeto(window, por exemplo) é chamada de função.

// o metodo de amarzena os valores das funções é por meio de Const, Let ou Var, tipo:

const nome = window.prompt("Qual seria o seu nome? ");

const confirma = window.confirm("Você deseja continuar o seu estudo? ");

let idade = parseInt(window.prompt("qual a sua idade? "));