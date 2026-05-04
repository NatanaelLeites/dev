function actualizarReloj() {
    const ahora = new Date();
    
    
    let horas = String(ahora.getHours()).padStart(2, '0');
    let minutos = String(ahora.getMinutes()).padStart(2, '0');
    /* let segundos = String(ahora.getSeconds()).padStart(2, '0'); */
    const tiempo = `${horas}:${minutos}`;

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const nombreMes = meses[ahora.getMonth()];
    const diaDelMes = ahora.getDate();
    const fecha = `${diaDelMes} ${nombreMes}`;

    document.getElementById('reloj').textContent = tiempo;
    document.getElementById('fecha').textContent = fecha;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();