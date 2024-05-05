document.getElementById("botonCalcular").addEventListener("click", function() {
    realizarOperacion();
});

function realizarOperacion() {
    // Obtener los valores de los campos de formulario
    var p = parseFloat(document.getElementById("p").value);
    var k = parseFloat(document.getElementById("k").value);
    var x = parseFloat(document.getElementById("x").value);
    var q = 1-p;

    const respuesta = document.getElementById("resultado");
    
    // Realizar la operación b*(x,k,p)
    var resultado = (combinacion(x-1,k-1))*(Math.pow(p,k))*(Math.pow(q,x-k));

    respuesta.textContent = resultado;
}


// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función para calcular combinaciones (nCr)
function combinacion(n, r) {
    if (r === 0 || r === n) {
        return 1;
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Función para calcular permutaciones (nPr)
function permutacion(n, r) {
    return factorial(n) / factorial(n - r);
}