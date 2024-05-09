function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}
atualizaCronometro();
setInterval(atualizaCronometro(), 1000);
