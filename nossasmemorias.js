/* ==========================================
        VIRAR POLAROID
========================================== */

// Seleciona todas as Polaroids

const cards = document.querySelectorAll(".card");

// Adiciona um clique em cada Polaroid

cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("virado");

    });

});

/* ==========================================
        APENAS UMA POLAROID ABERTA
========================================== */

// Guarda a Polaroid que está aberta
let cardAberto = null;

// Percorre todas as Polaroids
cards.forEach((card) => {

    card.addEventListener("click", () => {

        // Se clicou na mesma Polaroid, apenas fecha
        if (card === cardAberto) {

            card.classList.remove("virado");
            cardAberto = null;

            return;

        }

        // Fecha a Polaroid que estava aberta
        if (cardAberto) {

            cardAberto.classList.remove("virado");

        }

        // Abre a nova
        card.classList.add("virado");

        cardAberto = card;

    });

});

/* ==========================================
        EFEITOS EXTRAS
========================================== */

// Adiciona um efeito mais bonito ao clicar
cards.forEach((card) => {

    card.addEventListener("click", () => {

        // Remove o destaque das outras Polaroids
        cards.forEach((c) => {

            c.classList.remove("ativa");

        });

        // Adiciona destaque apenas na clicada
        card.classList.add("ativa");

        // Rola suavemente até ela
        card.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});

/* ==========================================
        FIM DO SCRIPT
========================================== */