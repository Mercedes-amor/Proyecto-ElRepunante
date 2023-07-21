console.log("console log desde main.js")

// * GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const nextLevelBtnNode = document.querySelector("#nextLevel-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen")
const gameCompleteScreenNode = document.querySelector("#gamecomplete-screen")

let gameObj = null; //juego aún no ha iniciado

// * STATE MANAGEMENT FUNCTIONS

function startGame() {

    console.log("iniciando el juego")
    splashScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "none";
    gameCompleteScreenNode.style.display ="none";
    gameScreenNode.style.display = "flex";
    
    
    
    gameObj = new Game();
    gameObj.gameLoop()
    }


// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click",startGame)

window.addEventListener("keydown", () => {

    console.log("presionando una tecla");

    if (event.key === "ArrowRight") {
        gameObj.cafe.x += 40;}

    if (event.key === "ArrowLeft") {
        gameObj.cafe.x -= 40;
    }

    gameObj.cafe.positionUpdate();

})






//PLANIFICACIÓN

//Propiedades
//1. el café: 
        //-dimensiones y posición: x, y, w, h
        //-movimiento: derecha e izq

//2. Items (azúcar)
    //-dimensiones y posición: x, y, w, h
    //-movimiento gravedad
    //

//3. obstáculos
    //-dimensiones y posición: x, y, w, h


    //Métodos

//Movimiento café: derecha/izq
//efecto gravedad
//randomizar items/obstáculos
//Crear clase café
//Crear clases para items
//Collisiones
//Game over
//Siguiente Nivel
//Puntuación- Nivel satisfaccción


//Bonus
//Barra- acelerón café
//Cambiar imagen café drch/izq
//randomizar item bonus
//Diferentes velocidades items
//Reinicio juego