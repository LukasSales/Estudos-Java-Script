function meuEscopo() {
    const form = window.document.querySelector(".form");
    const result = window.document.querySelector(".resul");

    const pessoas = []; //criei uma lista vazia
    
    function recebeMeuEscopo(evento) {
    evento.preventDefault(); //para previnir que o navegador reinicie o processo

    const nome = String(form.querySelector(".nome").value);
    const sobrenome = String(form.querySelector(".sobrenome").value);
    const peso = Number(form.querySelector(".peso").value);
    const altura = Number(form.querySelector(".altura").value);
    
    pessoas.push ({
        nome: nome, 
        sobrenome: sobrenome, 
        peso: peso, 
        altura: altura
    });
    console.log(pessoas);
    result.innerHTML += (`${nome} `);
    result.innerHTML += (`${sobrenome} `);
    result.innerHTML += (`${peso} `);
    result.innerHTML += (`${altura} <br>`);
   };

   form.addEventListener("submit", recebeMeuEscopo);
};
meuEscopo();
