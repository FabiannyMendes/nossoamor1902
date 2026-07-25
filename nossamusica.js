/* ==========================================
            ELEMENTOS
========================================== */

const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");

const progresso = document.getElementById("progresso");

const tempoAtual = document.getElementById("tempoAtual");

const tempoTotal = document.getElementById("tempoTotal");

const capa = document.getElementById("capa");

/* ==========================================
        PLAY / PAUSE
========================================== */

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();

        playBtn.textContent = "⏸";

        capa.classList.add("tocando");

    }else{

        audio.pause();

        playBtn.textContent = "▶";

        capa.classList.remove("tocando");

    }

});

/* ==========================================
        TEMPO E BARRA DE PROGRESSO
========================================== */

// Quando os metadados da música forem carregados
audio.addEventListener("loadedmetadata", () => {

    progresso.max = Math.floor(audio.duration);

    tempoTotal.textContent = formatarTempo(audio.duration);

});

// Enquanto a música estiver tocando
audio.addEventListener("timeupdate", () => {

    progresso.value = Math.floor(audio.currentTime);

    tempoAtual.textContent = formatarTempo(audio.currentTime);

});

// Função para formatar o tempo
function formatarTempo(segundos){

    const minutos = Math.floor(segundos / 60);

    const segundosRestantes = Math.floor(segundos % 60);

    return `${minutos}:${segundosRestantes.toString().padStart(2,"0")}`;

}

/* ==========================================
        CONTROLE DA BARRA
========================================== */

// Permite avançar ou voltar a música
progresso.addEventListener("input", () => {

    audio.currentTime = progresso.value;

});

// Quando a música terminar
audio.addEventListener("ended", () => {

    playBtn.textContent = "▶";

    progresso.value = 0;

    tempoAtual.textContent = "0:00";

});