// continuando sobre objetos e funções

const pessoa1 = {
    nome: "Lucas",
    sobrenome: "Francisco",
    idade: 23,

    fala() {
        console.log(`Meu nome é: ${this.nome} \nE meu sobrenome é: ${this.sobrenome}`);
        console.log(`Minha idade atual é ${this.idade}`);
    }, //aqui é uma função, mas não é necessário colocar a ''function no inicio''

    incrementoIdade() {
        ++this.idade;
    },
};

pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala(); // assim a idade muda toda vez que for chamado a função "incrementoIdade"

// da pra criar os comandos do jogo so com funções e objetos, no caso toda vez que eu precionar um botão vai ser executado tão função 