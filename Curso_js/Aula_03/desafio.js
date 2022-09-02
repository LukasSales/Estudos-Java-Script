const nome = String("Lucas Francisco");
const sobrenome = String("Alcantara");
let idade = Number(23);
let peso = Number(56);
const alturaEmM = Number(1.7);
let imc;
imc = Number((peso)/(alturaEmM**2))

let anoNascimento;
anoNascimento = Number(2022 - (idade + 1));

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);