console.log("desde game.js")

//Clase Game

class Game {
    constructor() {

     //Agregamos el jugador/café   
     this.cafe = new Cafe()   

    //Agregamos los items/azúcar como array

    this.itemsArr = []
    this.obstaculosArr = []
    
    
    this.frames = 0   
    this.isGameOn = true;

    }

//Métodos juego

levelComplete =() => {
    this.isGameOn = false; // detiene la recursión del juego
    gameScreenNode.style.display ="none"; //oculta pantalla del juego
    gameCompleteScreenNode.style.display = "flex"; //muestra pantalla nivel completado
}
gameOver = () => {
    this.isGameOn = false; // detiene la recursión del juego
    gameScreenNode.style.display ="none"; //oculta panta del juego
    gameOverScreenNode.style.display = "flex"; //mostrar pantalla final
}

cogerItem = () => {
//Si el café coge el Item sube puntuación

this.itemsArr.forEach((eachItem) => {
    //los items => eachItem
    if (
        this.cafe.x < eachItem.x + eachItem.w &&
        this.cafe.x + this.cafe.w > eachItem.x &&
        this.cafe.y < eachItem.y + eachItem.h &&
        this.cafe.y + this.cafe.h > eachItem.y
      ) {

    //azucarillo cogido!
    itemHits++
    console.log(`estos son los itemHits azucar, ${itemHits}`)

    scoreNode.innerText = itemHits
    console.log("Has cogido un azucarillo!")  
    console.log(eachItem)
    
    this.itemsArr[this.itemsArr.indexOf(eachItem)].node.remove()
    this.itemsArr.shift() //quitar el elemento del array

   
    if (itemHits > 2) {
        this.itemsArr[this.itemsArr.indexOf(eachItem)].node.src = "./images/leche.png"
        
    }
   

    if (itemHits === 5) {
        this.levelComplete();
    }}
})

} 

obstaculoColision = () => {
    //Si el café choca con un obstaculo baja puntuación
    
    this.obstaculosArr.forEach((eachObstaculo) => {
        //los items => eachObstaculo
        if (
            this.cafe.x < eachObstaculo.x + eachObstaculo.w &&
            this.cafe.x + this.cafe.w > eachObstaculo.x &&
            this.cafe.y < eachObstaculo.y + eachObstaculo.h &&
            this.cafe.y + this.cafe.h > eachObstaculo.y
          ) {
    
        //azucarillo cogido!
        itemHits--
        console.log(`estos son los itemHits azucar, ${itemHits}`)

        scoreNode.innerText = itemHits
        console.log("Has cogido leche!")  
        console.log(eachObstaculo)
        
        this.obstaculosArr[this.obstaculosArr.indexOf(eachObstaculo)].node.remove()
        this.obstaculosArr.shift() //quitar el elemento del array
    
        if (itemHits < 0) {
            this.gameOver();
        }
    }
    })
} 

itemsFalls = () => {
    //cuando queremos que aparezcan items
    // - Al inicio del juego
    // - cuando hayan pasado 2 segundos. this.frames % 120 === 0 
    let isBonus= true
    
    if (this.frames % 100 === 0) {
        let randomPositionX = Math.floor(Math.random() * 940); 
        //nos devuelve un número aleatorio entre 0 y 940 (para respetar ancho gameBox)
        

        let newItem = new Item(randomPositionX,isBonus);
        this.itemsArr.push (newItem)
        console.log(this.itemsArr[0].y)
        console.log(this.itemsArr)
    }
   
    
}

obstaculosFalls = () => {
    //cuando queremos que aparezcan obstaculos
    // - Al inicio del juego
    // - cuando hayan pasado 2 segundos. this.frames % 120 === 0 

    
    if (this.frames % 100 === 0) {
        let randomPositionX = Math.floor(Math.random() * 940); 
        //nos devuelve un número aleatorio entre 0 y 940 (para respetar ancho gameBox)
        
        let newObstaculo = new Obstaculo(randomPositionX);
        this.obstaculosArr.push (newObstaculo)
        console.log(this.obstaculosArr[0].y)
        console.log(this.obstaculosArr)
    }
}
itemsDelete= () => {
    //si el primer item del array ha salido de la vista lo eliminamos

    if (this.itemsArr.length !== 0 && this.itemsArr[0].y > 700) {
        this.itemsArr[0].node.remove() // quitar el elemento del DOM (la vista)
        this.itemsArr.shift() //quitar el elemento del array
        console.log("eliminando elemento")
    }

    if (this.obstaculosArr.length !== 0 && this.obstaculosArr[0].y > 700) {
        this.obstaculosArr[0].node.remove() // quitar el elemento del DOM (la vista)
        this.obstaculosArr.shift() //quitar el elemento del array
        console.log("eliminando elemento")
    }
}






 
gameLoop = () => {
    
    this.frames++;
    // console.log(this.frames)

    this.itemsFalls();
    this.obstaculosFalls();
    this.itemsDelete();

    this.cogerItem();
    this.obstaculoColision();
    // this.changeItem();

   if (this.isGameOn === true) {      
    this.itemsArr.forEach((eachItem) => {
        eachItem.gravityEffect();
    })

    if (this.isGameOn === true) {      
        this.obstaculosArr.forEach((eachObstaculo) => {
            eachObstaculo.gravityEffect();
        })
    //Regresión

    requestAnimationFrame(this.gameLoop);
}
}}}
