// console.log("console log desde main.js")

// * GLOBAL VARIABLES
const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const nextLevelBtnNode = document.querySelector("#nextLevel-btn");
const audioOnBtn = document.querySelector("#audioOn");
const audioOffBtn = document.querySelector("#audioOff");

const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen")
const gameCompleteScreenNode = document.querySelector("#gamecomplete-screen")
const scoreNode = document.querySelector("#score");
const itemBonusNode = document.querySelector("#itemBonus");

//Score
const barraProgreso = document.querySelector("#barraProgreso");
const cantidadProgreso = document.querySelector("#cantidad-progreso");


let gameObj = null; //juego aún no ha iniciado
let itemHits = 0;

let level = 2


// * STATE MANAGEMENT FUNCTIONS

//Audio

audioOn = () => {
    gameObj.gameMusic.play();
    gameObj.isMusicOn = true;
  };
  
audioOff = () => {
    gameObj.gameMusic.pause();
    gameObj.isMusicOn = false;
  };

function startGame() {
    
    console.log("iniciando el juego")
    splashScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "none";
    gameCompleteScreenNode.style.display ="none";
    gameScreenNode.style.display = "flex";
    
    itemHits = 0
    barraProgreso.innerText = "0%"
    gameBoxNode.innerHTML = "";
 
    gameObj = new Game(level);
    gameObj.itemsArr = [];
    gameObj.gameLoop();
    
    audioOn();
    
    gameObj.frames = 0;
    }

    function nextLevel() {

    level = level+2
    
    console.log("iniciando el juego")
    splashScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "none";
    gameCompleteScreenNode.style.display ="none";
    gameScreenNode.style.display = "flex";
        
    itemHits = 0
    barraProgreso.innerText = "0%"
    gameBoxNode.innerHTML = "";
    

    gameObj = new Game(level);
    gameObj.itemsArr = [];
    gameObj.gameLoop();
    
    audioOn();

    gameObj.frames = 0;
        }

// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click",startGame)

nextLevelBtnNode.addEventListener("click",nextLevel)

restartBtnNode.addEventListener("click",startGame)

audioOnBtn.addEventListener("click", audioOn)

audioOffBtn.addEventListener("click", audioOff)


window.addEventListener("keydown", () => {

    // console.log("presionando una tecla",event.key);

   
    if (event.key === " " && gameObj.cafe.y === 570) {
        gameObj.cafe.y -= 120;
        gameObj.cafe.cafeNode.src = "./images/cafeSalto.png";

        const audio =new Audio();
        audio.src = "./sounds/jump.wav";
        audio.volume = 0.3;
        
        audio.play().then(() => {
            return true;
          });

    }
    if (event.key === "ArrowUp" && gameObj.cafe.y === 570) {
        gameObj.cafe.y -= 120;
        gameObj.cafe.cafeNode.src = "./images/cafeSalto.png";

        const audio =new Audio();
        audio.src = "./sounds/jump.wav";
        audio.volume = 0.3;
        
        audio.play().then(() => {
            return true;
          });

    }

    if (event.key === "ArrowRight" && gameObj.cafe.x < 1061 ) {
        gameObj.cafe.x += 60;
        gameObj.cafe.cafeNode.src = "./images/cafeDrch.png";
    }

    if (event.key === "ArrowLeft" && gameObj.cafe.x > 0) {
        gameObj.cafe.x -= 60;
        gameObj.cafe.cafeNode.src = "./images/cafeIzq.png";
    }
 
    gameObj.cafe.positionUpdate();
    gameObj.cafe.volverSalto();

})






//PLANIFICACIÓN

//PROPIEDADES conseguidas:
//1. el café: 
        //-dimensiones y posición: x, y, w, h CHECK
        //-movimiento: derecha e izq CHECK

//2. Items (azúcar)
    //-dimensiones y posición: x, y, w, h CHECK
    //-movimiento gravedad CHECK
    //

//3. obstáculos
    //-dimensiones y posición: x, y, w, h CHECK


//MÉTODOS conseguidos:
// -Movimiento café: derecha/izq CHECK
// -efecto gravedad CHECK
// -randomizar items/obstáculos CHECK
// -Crear clase café CHECK
// -Crear clases para items CHECK
// -Colisiones CHECK
// -Game over CHECK
// -Siguiente Nivel CHECK
// -Puntuación- Nivel satisfaccción CHECK


//BONUS conseguidos:
// -Barra- salto café CHECK
// -score con barra y no con números CHECK
// -Cambiar imagen café drch/izq CHECK
// -Reinicio juego CHECK
// -Café no salga de los márgenes CHECK
// -Sonido- CHECK
// -¡¡Solucionar problema congelación items!! conseguido con .slice() CHECK

//PENDIENTES:
// -movimiento fluido café
// -Conseguir volver a imagen inicial cafe
// -¡¡objetos no se superpongan!! Mirar con comprobación colisiones
//-¡¡FUNCIÓN PERDER ITEMS EN TODOS LOS NIVELES!!
