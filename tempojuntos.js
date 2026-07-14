/* ==========================================
        DATA DO INÍCIO DO NAMORO
========================================== */

/*
Data oficial do início do namoro:

19 de fevereiro de 2025
08:20 da manhã
*/

const inicioNamoro = new Date(
    2025,
    1,
    19,
    8,
    20,
    0
);

/* ==========================================
        ELEMENTOS DA PÁGINA
========================================== */

const anos = document.getElementById("anos");
const meses = document.getElementById("meses");
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

/* ==========================================
        FUNÇÃO PRINCIPAL
========================================== */

function atualizarContador(){

    const agora = new Date();

    let anosCalculados = agora.getFullYear() - inicioNamoro.getFullYear();
    let mesesCalculados = agora.getMonth() - inicioNamoro.getMonth();
    let diasCalculados = agora.getDate() - inicioNamoro.getDate();

    let horasCalculadas = agora.getHours() - inicioNamoro.getHours();
    let minutosCalculados = agora.getMinutes() - inicioNamoro.getMinutes();
    let segundosCalculados = agora.getSeconds() - inicioNamoro.getSeconds();

    // Ajusta os segundos
    if(segundosCalculados < 0){

        segundosCalculados += 60;
        minutosCalculados--;

    }

    // Ajusta os minutos
    if(minutosCalculados < 0){

        minutosCalculados += 60;
        horasCalculadas--;

    }

    // Ajusta as horas
    if(horasCalculadas < 0){

        horasCalculadas += 24;
        diasCalculados--;

    }

    // Ajusta os dias
    if(diasCalculados < 0){

        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );

        diasCalculados += ultimoMes.getDate();
        mesesCalculados--;

    }

    // Ajusta os meses
    if(mesesCalculados < 0){

        mesesCalculados += 12;
        anosCalculados--;

    }

    // Atualiza os números na tela
    anos.textContent = anosCalculados;
    meses.textContent = mesesCalculados;
    dias.textContent = diasCalculados;
    horas.textContent = horasCalculadas;
    minutos.textContent = minutosCalculados;
    segundos.textContent = segundosCalculados;

}

/* ==========================================
        ANIMAÇÃO DOS NÚMEROS
========================================== */

function animarNumero(elemento){

    elemento.classList.add("numeroAtualizado");

    setTimeout(() => {

        elemento.classList.remove("numeroAtualizado");

    }, 350);

}

/* ==========================================
        ATUALIZAÇÃO AUTOMÁTICA
========================================== */

let ultimoSegundo = -1;

function iniciarContador(){

    atualizarContador();

    const segundoAtual = Number(segundos.textContent);

    if(segundoAtual !== ultimoSegundo){

        animarNumero(segundos);

        ultimoSegundo = segundoAtual;

    }

}

// Executa imediatamente
iniciarContador();

// Atualiza a cada segundo
setInterval(iniciarContador, 1000);