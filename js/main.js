// console.log("console log desde main.js")

// * GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const nextLevelBtnNode = document.querySelector("#nextLevel-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen")
const gameCompleteScreenNode = document.querySelector("#gamecomplete-screen")
const scoreNode = document.querySelector("#score");
const itemBonusNode = document.querySelector("#itemBonus");

const barraProgreso = document.querySelector("#barraProgreso");
const cantidadProgreso = document.querySelector("#cantidad-progreso");



let gameObj = null; //juego aún no ha iniciado
let itemHits = 0;

let level = 2


// * STATE MANAGEMENT FUNCTIONS

function startGame() {

    console.log("iniciando el juego")
    splashScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "none";
    gameCompleteScreenNode.style.display ="none";
    gameScreenNode.style.display = "flex";
    
    itemHits = 0
    barraProgreso.innerText = "0%"
    gameBoxNode.innerHTML = "";
    
    gameObj = new Game(2);
    gameObj.gameLoop()
    }

function nextLevel() {
    console.log("siguiente nivel")
    gameCompleteScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    itemHits = 0
    barraProgreso.innerText = "0%"
        
    gameBoxNode.innerHTML = "";

    gameObj = new Game(level+=2);
    gameObj.gameLoop()

    
    }

// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click",startGame)

nextLevelBtnNode.addEventListener("click",nextLevel)

restartBtnNode.addEventListener("click",startGame)

window.addEventListener("keydown", () => {

    // console.log("presionando una tecla",event.key);

   
    if (event.key === " ") {
        gameObj.cafe.y -= 100;
        gameObj.cafe.cafeNode.src = "./images/cafeSalto.png";
    }

    if (event.key === "ArrowRight") {
        gameObj.cafe.x += 40;
        gameObj.cafe.cafeNode.src = "./images/cafeDrch.png";
    }

    if (event.key === "ArrowLeft") {
        gameObj.cafe.x -= 40;
        gameObj.cafe.cafeNode.src = "./images/cafeIzq.png";
    }
 
    gameObj.cafe.positionUpdate();
    gameObj.cafe.volverSalto();

})






//PLANIFICACIÓN

//Propiedades
//1. el café: 
        //-dimensiones y posición: x, y, w, h CHECK
        //-movimiento: derecha e izq CHECK

//2. Items (azúcar)
    //-dimensiones y posición: x, y, w, h CHECK
    //-movimiento gravedad CHECK
    //

//3. obstáculos
    //-dimensiones y posición: x, y, w, h CHECK


//Métodos

//Movimiento café: derecha/izq CHECK
//efecto gravedad CHECK
//randomizar items/obstáculos CHECK
//Crear clase café CHECK
//Crear clases para items CHECK
//Colisiones CHECK
//Game over CHECK
//Siguiente Nivel CHECK
//Puntuación- Nivel satisfaccción CHECK


//Bonus

//Barra- salto café CHECK
//score con barra y no con números
//Cambiar imagen café drch/izq CHECK
//Conseguir volver a imagen inicial cafe
//movimiento fluido café
//randomizar item bonus
//Solucionar problema congelación items, que no se superpongan
//Reinicio juego CHECK
//Sonido
//Café no salga de los márgenes
//iconos no se superpongan
//Que el café no salga de los laterales