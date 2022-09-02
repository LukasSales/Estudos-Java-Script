const numb1 = Number(window.prompt("Digite um número? "));
const numeroTitulo = document.getElementById("numero_titulo");
const resp = document.querySelector("div#resp");

numeroTitulo.innerHTML = (`${numb1} <br>`);
resp.innerHTML = (`A raiz quadrada: ${numb1**0.5} <br>`);
resp.innerHTML += (`${numb1} é inteiro: ${Number.isInteger(numb1)} <br>`);
resp.innerHTML += (`É NaN: ${Number.isNaN(numb1)} <br>`);
resp.innerHTML += (`Arredondando para baixo: ${Math.floor(numb1)} <br>`);
resp.innerHTML += (`Arredondando para cima: ${Math.ceil(numb1)} <br>`);
resp.innerHTML += (`Com duas casas decimais ${numb1.toFixed(2)} <br>`);