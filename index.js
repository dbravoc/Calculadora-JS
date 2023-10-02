let cantidad = 0;
let precioBase = 400000;
let precioTotal = 0;

function sumar() {
    cantidad++;
    actualizarCantidadYTotal();
}

function restar() {
    if (cantidad > 0) {
        cantidad--;
        actualizarCantidadYTotal();
    }
}

function actualizarCantidadYTotal() {
    document.querySelector('#cantidad').innerHTML = cantidad;
    precioTotal = cantidad * precioBase;
    document.querySelector('#preciototal').innerHTML = precioTotal;
}
