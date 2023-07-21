console.log("desde game.js")

//Clase Game

class Game {
    constructor() {

     //Agregamos el jugador/café   
     this.cafe = new Cafe()   

    //Agregamos los items/azúcar como array

    this.itemsArr = []
    
    
    this.frames = 0   
    this.isGameOn = true;

    }

//Métodos juego

itemsFalls = () => {
    //cuando queremos que aparezcan obstaculos
    // - Al inicio del juego
    // - cuando hayan pasado 2 segundos. this.frames % 120 === 0 

    
    if (this.frames % 120 === 0) {
        let randomPositionX = Math.floor(Math.random() * 1000) 
        //nos devuelve un número aleatorio entre 0 y 1000
        
        let newItem = new Item(randomPositionX);
        this.itemsArr.push (newItem)
    }
 }



 
gameLoop = () => {
    
    this.frames++;
    // console.log(this.frames)

    this.itemsFalls();

   if (this.isGameOn === true) {      
    this.itemsArr.forEach((eachItem) => {
        eachItem.gravityEffect();
    })
    //Regresión

    requestAnimationFrame(this.gameLoop);
}
}}
