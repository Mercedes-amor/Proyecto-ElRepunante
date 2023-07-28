// * GLOBAL VARIABLES
//Buttons
const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const nextLevelBtnNode = document.querySelector("#nextLevel-btn");
const audioOnBtn = document.querySelector("#audioOn");
const audioOffBtn = document.querySelector("#audioOff");

//Screens
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen");
const gameCompleteScreenNode = document.querySelector("#gamecomplete-screen");

//Score
const scoreNode = document.querySelector("#score");
const itemBonusNode = document.querySelector("#itemBonus");
const barraProgreso = document.querySelector("#barraProgreso");
const cantidadProgreso = document.querySelector("#cantidad-progreso");

let gameObj = null; //juego aún no ha iniciado
let itemHits = 0;
let level = 2;

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

//Funciones
function startGame() {
  level = 2;

  splashScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "none";
  gameCompleteScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  itemHits = 0; //Reiniciar contador
  barraProgreso.innerText = "0%"; //Reiniciar contador
  gameBoxNode.innerHTML = ""; //Limpiar pantalla partida anterior

  gameObj = new Game(level);
  gameObj.itemsArr = []; //Vaciar array cada vez para prevenir fallos
  gameObj.gameLoop();

  audioOn();
  gameObj.frames = 0; //Reiniciar los frames cada vez para prevenir fallos
}
function nextLevel() {
  level = level + 2; //Cada nuevo nivel aumenta en 2

  splashScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "none";
  gameCompleteScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  itemHits = 0; //Reiniciar contador
  barraProgreso.innerText = "0%"; //Reiniciar contador
  gameBoxNode.innerHTML = ""; //Limpiar pantalla partida anterior

  gameObj = new Game(level); //Cada vez aumenta en 2 la velocidad
  gameObj.itemsArr = []; //Vaciar array cada vez para prevenir fallos
  gameObj.gameLoop();

  audioOn();

  gameObj.frames = 0; //Reiniciar los frames cada vez para prevenir fallo
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
nextLevelBtnNode.addEventListener("click", nextLevel);
restartBtnNode.addEventListener("click", startGame);
audioOnBtn.addEventListener("click", audioOn);
audioOffBtn.addEventListener("click", audioOff);

window.addEventListener("keydown", () => {
    //2 teclas para el salto, ArrowUp y barra
  if (event.key === " " && gameObj.cafe.y === 570) {
    gameObj.cafe.y -= 120;
    gameObj.cafe.cafeNode.src = "./images/cafeSalto.png";

    //Audio del salto
    const audio = new Audio();
    audio.src = "./sounds/jump.wav";
    audio.volume = 0.2;
    audio.play().then(() => {
      return true;
    });
  }
  if (event.key === "ArrowUp" && gameObj.cafe.y === 570) {
    gameObj.cafe.y -= 120;
    gameObj.cafe.cafeNode.src = "./images/cafeSalto.png";
    
    //Audio del salto
    const audio = new Audio();
    audio.src = "./sounds/jump.wav";
    audio.volume = 0.2;
    audio.play().then(() => {
      return true;
    });
  }

  if (event.key === "ArrowRight" && gameObj.cafe.x < 1061) {
    gameObj.cafe.x += 60;
    gameObj.cafe.cafeNode.src = "./images/cafeDrch.png";

     //Audio movimiento
     const audio = new Audio();
     audio.src = "./sounds/move2.wav";
     audio.volume = 0.1;
     audio.play().then(() => {
       return true;
     });
  }

  if (event.key === "ArrowLeft" && gameObj.cafe.x > 0) {
    gameObj.cafe.x -= 60;
    gameObj.cafe.cafeNode.src = "./images/cafeIzq.png";

     //Audio movimiento
     const audio = new Audio();
     audio.src = "./sounds/move2.wav";
     audio.volume = 0.1;
     audio.play().then(() => {
       return true;
     });
  }

  gameObj.cafe.positionUpdate();
  gameObj.cafe.volverSalto();
});

//PLANIFICACIÓN

//PROPIEDADES conseguidas:
//1. el café:
//-dimensiones y posición: x, y, w, h CHECK
//-movimiento: derecha e izq CHECK

//2. Items (azúcar)
//-dimensiones y posición: x, y, w, h CHECK
//-movimiento gravedad CHECK

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
// -Penalización perder Items en todos los niveles - CHECK

//PENDIENTES:
// -movimiento fluido café
// -Conseguir volver a imagen inicial cafe
// -Aletoriedad completa cambio imagen Items
// -¡¡objetos no se superpongan!! Mirar con comprobación colisiones
// -Implementar Item especial: Duplicar puntuación, no penalización objeto erróneo
