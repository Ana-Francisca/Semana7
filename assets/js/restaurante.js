function calcular(){
let vlquilo = document.getElementById('vlquilo');
let vlconsumo = document.getElementById('vlconsumo');
let mostrar = document.getElementById('mostrar');

let calculo = (Number(vlquilo.value) * Number(vlconsumo.value))/1000;
mostrar.textContent = "Valor Total R$: " +calculo.toFixed(2);
}

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);