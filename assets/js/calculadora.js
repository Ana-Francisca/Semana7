function somar(){
    let n1 = document.getElementById('numero1');
    let n2 = document.getElementById('numero2');

    if (isNaN(n1.value)){
        alert('Número 1 inválido');
        n1.focus();
        return;
    }
    if (isNaN(n2.value)){
        alert('Número 2 inválido');
        n2.focus();
        return;
    }

    let resultado = document.getElementById('resultado');
    let soma = Number(n1.value) + Number(n2.value);

    resultado.textContent = soma;
}

const btnSomar = document.getElementById('btnSomar');
btnSomar.addEventListener('click', somar);

function subtrair(){
    let n1 = document.getElementById('numero1');
    let n2 = document.getElementById('numero2');
    let resultado = document.getElementById('resultado');

    let subtrair = Number(n1.value) - Number(n2.value);

    resultado.textContent = subtrair;
}

const btnSubtrair = document.getElementById('btnSubtrair');
btnSubtrair.addEventListener('click', subtrair);

function multiplicar(){
    let n1 = document.getElementById('numero1');
    let n2 = document.getElementById('numero2');
    let resultado = document.getElementById('resultado');

    let multiplicar = Number(n1.value) * Number(n2.value);

    resultado.textContent = multiplicar;
}

const btnMultiplicar = document.getElementById('btnMultiplicar');
btnMultiplicar.addEventListener('click', multiplicar);

function dividir(){
    let n1 = document.getElementById('numero1');
    let n2 = document.getElementById('numero2');
    let resultado = document.getElementById('resultado');

    let dividir = Number(n1.value) / Number(n2.value);

    resultado.textContent = dividir;
}

const btnDividir = document.getElementById('btnDividir');
btnDividir.addEventListener('click', dividir);

function modulo(){
    let n1 = document.getElementById('numero1');
    let n2 = document.getElementById('numero2');
    let resultado = document.getElementById('resultado');

    let modulo = Number(n1.value) % Number(n2.value);

    resultado.textContent = modulo;
}

const btnModulo = document.getElementById('btnModulo');
btnModulo.addEventListener('click', modulo);