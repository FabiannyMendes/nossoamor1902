/* ==========================================
            ELEMENTOS
========================================== */

const envelope = document.getElementById("envelope");

const carta = document.getElementById("carta");

const clicar = document.querySelector(".clicar");

/* ==========================================
        ABRIR CARTA
========================================== */

envelope.addEventListener("click", () => {

    envelope.classList.add("aberto");

    clicar.style.display = "none";

    setTimeout(() => {

        envelope.style.display = "none";

        carta.classList.add("mostrar");

        carta.scrollIntoView({

            behavior:"smooth"

        });

    },800);

});