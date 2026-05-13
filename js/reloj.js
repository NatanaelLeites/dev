function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    if(document.getElementById('reloj')) {
        document.getElementById('reloj').textContent = `${horas}:${minutos}`;
        document.getElementById('fecha').textContent = `${ahora.getDate()} ${meses[ahora.getMonth()]}`;
    }
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

window.onload = () => {
    const tl = gsap.timeline();

    tl.from(".header", { opacity: 0, y: -20, duration: 0.8 })
      .from(".intro", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4");

    // Cambiamos 'from' por 'fromTo' para las tarjetas
    // Esto obliga a que empiecen en 0 y terminen en 1 SI O SI
    tl.fromTo(".project-card", 
        { 
            opacity: 0, 
            y: 50 
        }, 
        { 
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            duration: 0.8,
            ease: "power2.out"
        }, 
        "-=0.4"
    );

    tl.from(".skill-card", { opacity: 0, x: -10, stagger: 0.05, duration: 0.5 }, "-=0.2");
};