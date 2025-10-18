let sumabtn = document.getElementById("suma");
let restabtn = document.getElementById("resta");
let multibtn = document.getElementById("multiplicacion");
let divibtn = document.getElementById("divicion");
let resultado = document.getElementById("resultado");
let limpiarbtn = document.getElementById("limpiar");
let log = document.getElementById("log");

sumabtn.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let suma = num1 + num2;
    if (isNaN(suma)) {
        resultado.textContent = "Los Campos no deben estar vacios";
        return;
    }
    resultado.textContent = suma;
    log.innerHTML += `<p>Suma: ${num1} + ${num2} = ${suma}</p>`;
}

restabtn.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resta = num1 - num2;
    if (isNaN(resta)) {
        resultado.textContent = "Los Campos no deben estar vacios";
        return;
    }
    resultado.textContent = resta;
    log.innerHTML += `<p>Resta: ${num1} - ${num2} = ${resta}</p>`;
}

multibtn.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let multiplicacion = num1 * num2;
    if (isNaN(multiplicacion)) {
        resultado.textContent = "Los Campos no deben estar vacios";
        return;
    }
    resultado.textContent = multiplicacion;
    log.innerHTML += `<p>Multiplicación: ${num1} * ${num2} = ${multiplicacion}</p>`;
}

divibtn.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        resultado.textContent = "Error: División por cero";
        return;
    }
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Los Campos no deben estar vacios";
        return;
    }
    let divicion = num1 / num2;
    resultado.textContent = divicion;
    log.innerHTML += `<p>División: ${num1} / ${num2} = ${divicion}</p>`;
}

limpiarbtn.onclick = function() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    resultado.textContent = "";
}