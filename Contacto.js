window.addEventListener('DOMContentLoaded', (event) => {
    const btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener('click', mostrarMensaje);

    function mostrarMensaje() {
        alert("Datos enviados");
    }
});