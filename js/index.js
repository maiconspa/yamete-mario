const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const clouds = document.getElementById("clouds");
const gameover = document.getElementById("gameover");
let gameStatus = "playing";
let jumpCounterBox = document.getElementById("jumpCounter");
let jumpCounter = 0;

addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        mario.classList.add("jump")
        setTimeout(() => {
            mario.classList.remove("jump")
        }, 500)
    }
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const cloudsPosition = clouds.offsetLeft;
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        document.getElementById("audio").play();
        
        gameover.classList.add("gameover-animation")
        gameover.style.top = "156px";

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = "../images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        gameStatus = "stop";
    } else {
        jumpCounter +=1;
        jumpCounterBox.innerText = jumpCounter;
    }
}, 10)

addEventListener("keydown", (event) => {
    if (event.key === "r" && gameStatus === "stop") {
        window.location.reload();
    }
})