// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn
let noCount = 0;
const audioNegativo = new Audio("negneguwu.mp3"); 
let audioYaSono = false;
noBtn.addEventListener("mouseover", () => {
    if (!audioYaSono) {
        audioNegativo.play();
        audioYaSono = true;
    }
    noCount++;
        if (noCount >= 6) {
        noBtn.style.display = "none";
        title.textContent = "Pues habrá que obligarte, vieja...";
        catImg.src = "uñas.png"; 

    } else {
        title.textContent = "¡¿Pero tu eres gilipollas?! 🖕 ";
        catImg.src = "respuestanegativa.png";

        const min = 200;
        const max = 200;

        const distance = Math.random() * (max - min) + min;
        const angle = Math.random() * Math.PI * 2;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

yesBtn.addEventListener("click", () => {
    const audio = new Audio("yupi.mp3"); 
    audio.loop = true; 
    audio.play();
    title.textContent = "¡Qué ilusión ^^!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    setTimeout(() => {
        window.location.href = "pagina/paginafinal.html";
    }, 10000);
});
