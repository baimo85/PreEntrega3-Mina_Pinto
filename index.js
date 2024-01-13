document.addEventListener("DOMContentLoaded", function () {

    const opcionesGuardadas = obtenerDelStorage("opciones");
    const opciones = opcionesGuardadas ? JSON.parse(opcionesGuardadas) : [];

    document.getElementById("botonSimular").addEventListener("click", function () {
        console.log("Botón clickeado");
        const opcionInput = document.getElementById("opcionInput");
        const opcionSeleccionada = parseInt(opcionInput.value);
        simularCuotas(opcionSeleccionada, opciones);

        guardarEnStorage("opciones", JSON.stringify(opciones));
    });
});

function simularCuotas(opcion, opciones) {
    const opcionSeleccionada = opciones.find((_, index) => index + 1 === opcion);
    if (opcionSeleccionada) {
        const { capital, cuotas } = opcionSeleccionada;
        const interes = 0.2;
        const subtotal1 = capital * interes;
        const subtotal2 = capital + subtotal1;
        const cuotaMensual = (subtotal2 / cuotas).toFixed(2);
        console.log("Cuota Mensual:", cuotaMensual);
        actualizarDOM(cuotaMensual);
    } else {
        alert("Opción incorrecta");
    }
}


function simularCuotas(opcion, opciones) {
    const opcionSeleccionada = opciones.find((_, index) => index + 1 === opcion);
    if (opcionSeleccionada) {
        const { capital, cuotas } = opcionSeleccionada;
        const interes = 0.2;
        const subtotal1 = capital * interes;
        const subtotal2 = capital + subtotal1;
        const cuotaMensual = (subtotal2 / cuotas).toFixed(2);
        actualizarDOM(cuotaMensual);
    } else {
        alert("Opción incorrecta");
    }
}

function actualizarDOM(resultado) {
    const elementoResultado = document.getElementById("resultadoCuotas");
    elementoResultado.innerHTML = `Pagarás ${resultado} mensuales`;
}

function guardarEnStorage(clave, valor) {
    localStorage.setItem(clave, valor);
}

function obtenerDelStorage(clave) {
    return localStorage.getItem(clave);
}