function mostrarOla(){
    let inputNome = document.getElementById('nome');
    let outputMostrar = document.getElementById('mostrar');
    outputMostrar.innerHTML = "Olá " + inputNome.value;
}

let botaoMostar = document.getElementById('botaoMostrar');
botaoMostrar.addEventListener('click', mostrarOla);


/*
console.log("Olá Mundo!");
//Declaração de Variável

let nome = "Marcelo";
nome = 'Marcelo';
nome = `Marcelo`;


let idade = 48;
let peso = 10.60;
let decisivo = true;

console.log(nome);
nome = `Petri tem ${idade} anos`;
nome = "Petri tem"+idade+"anos";

let endereco;
console.log(endereco);
*/