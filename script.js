// =====================================
// MENSAGEM NO CONSOLE
// =====================================

console.log("❤️ Bem-vindo ao nosso cantinho de amor ❤️");


// =====================================
// ANIMAÇÃO AO CARREGAR A PÁGINA
// =====================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1.5s ease";

        document.body.style.opacity = "1";

    }, 150);

});


// =====================================
// BOTÃO COM EFEITO AO CLICAR
// =====================================

const botao = document.querySelector(".botao");

if(botao){

    botao.addEventListener("click", () => {

        botao.style.transform = "scale(.95)";

        setTimeout(() => {

            botao.style.transform = "scale(1)";

        },150);

    });

}


// =====================================
// MENSAGENS ROMÂNTICAS
// =====================================

const mensagens = [

"❤️ Você é meu lugar favorito.",

"🌹 Meu coração sempre escolhe você.",

"🥰 Obrigado por existir.",

"💖 Cada dia ao seu lado é um presente.",

"✨ Eu te escolheria mil vezes.",

"💕 Você é o amor da minha vida."

];

let indice = 0;

setInterval(()=>{

    console.log(mensagens[indice]);

    indice++;

    if(indice >= mensagens.length){

        indice = 0;

    }

},4000);


// =====================================
// SCROLL SUAVE
// =====================================

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        const destino = this.getAttribute("href");

        if(destino.startsWith("#")){

            e.preventDefault();

            document.querySelector(destino).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =====================================
// CORAÇÕES ALEATÓRIOS
// =====================================

const tiposCoracao = [
    "❤️",
    "💕",
    "💖",
    "🤍"
];

// Substitui a função anterior por uma versão melhor
function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.classList.add("coracao");

    coracao.innerHTML =
        tiposCoracao[Math.floor(Math.random() * tiposCoracao.length)];

    coracao.style.left = Math.random() * 100 + "%";

    coracao.style.fontSize =
        (18 + Math.random() * 22) + "px";

    coracao.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    coracao.style.opacity =
        (0.5 + Math.random() * 0.5);

    document.getElementById("coracoes").appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 9000);

}

// Reinicia a chuva usando a nova função
clearInterval(window.intervaloCoracoes);

window.intervaloCoracoes = setInterval(criarCoracao, 350);


// =====================================
// PARTÍCULAS AO CLICAR
// =====================================

document.addEventListener("click", function(e){

    for(let i = 0; i < 8; i++){

        const particula = document.createElement("div");

        particula.innerHTML = "❤️";

        particula.style.position = "fixed";

        particula.style.left = e.clientX + "px";

        particula.style.top = e.clientY + "px";

        particula.style.pointerEvents = "none";

        particula.style.fontSize =
            (12 + Math.random() * 12) + "px";

        particula.style.zIndex = "9999";

        document.body.appendChild(particula);

        const x = (Math.random() - 0.5) * 150;
        const y = (Math.random() - 0.5) * 150;

        particula.animate(
            [
                {
                    transform: "translate(0,0) scale(1)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px, ${y}px) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 900,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            particula.remove();
        }, 900);

    }

});


// =====================================
// ANIMAÇÃO SUAVE AO ABRIR
// =====================================

window.addEventListener("load", () => {

    document.body.animate(

        [
            {
                opacity:0,
                transform:"translateY(25px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],

        {

            duration:1200,
            easing:"ease-out"

        }

    );

});