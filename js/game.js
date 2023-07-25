// console.log("desde game.js")

//Clase Game

class Game {
    constructor(level) {

     //Agregamos el jugador/café   
     this.cafe = new Cafe()   

    //Agregamos los items/azúcar como array

    this.itemsArr = []
    this.obstaculosArr = []
    
    
    this.frames = 0   
    this.isGameOn = true;
    this.level = level

    }

//Métodos juego

levelComplete =() => {
    this.isGameOn = false; // detiene la recursión del juego
    gameScreenNode.style.display ="none"; //oculta pantalla del juego
    gameCompleteScreenNode.style.display = "flex"; //muestra pantalla nivel completado   
    gameOverScreenNode.style.display = "none"; //ocultar pantalla GameOver
}
gameOver = () => {
    this.isGameOn = false; // detiene la recursión del juego
    gameScreenNode.style.display ="none"; //oculta panta del juego
    gameOverScreenNode.style.display = "flex"; //mostrar pantalla final
    gameCompleteScreenNode.style.display = "none"; //oculta pantalla del gameOver
}
changeItemIcon =() => {
if (this.frames < 600 || this.frames === 1800 || this.frames === 3600) { 
    itemBonusNode.style.backgroundImage = 'url("./images/azucar.png")';
}
if (this.frames === 600 || this.frames === 2400) { 
    itemBonusNode.style.backgroundImage = 'url("./images/leche.png")';
}

if (this.frames === 1200 || this.frames === 3000) { 
    itemBonusNode.style.backgroundImage = 'url("./images/gotas.png")';
}

}

subirScore =() => {
//Aumentar barra verde Score 
const porcentaje = `${itemHits*10}%`;
barraProgreso.style.width = porcentaje;
}


cogerItem = () => {
//Si el café coge el Item sube puntuación
this.itemsArr.forEach((eachItem,i) => {
    //los items => eachItem
   
    if (this.frames > 600) { 
    this.itemsArr[i].node.src = "./images/leche.png";
    }

    if (this.frames > 1200) { 
        this.itemsArr[i].node.src = "./images/gotas.png";
        }

    if (this.frames > 1800) { 
        this.itemsArr[i].node.src = "./images/azucar.png";
         }
    if (this.frames > 2400) { 
        this.itemsArr[i].node.src = "./images/leche.png";
        }
        
    if (this.frames > 3000) { 
        this.itemsArr[i].node.src = "./images/gotas.png";
        }
        
    if (this.frames > 3600) { 
        this.itemsArr[i].node.src = "./images/azucar.png";
    }

    if (
        this.cafe.x < eachItem.x + eachItem.w &&
        this.cafe.x + this.cafe.w > eachItem.x &&
        this.cafe.y < eachItem.y + eachItem.h &&
        this.cafe.y + this.cafe.h > eachItem.y
      ) {

    //azucarillo cogido!
    itemHits++
    let porcentaje = itemHits*10
    // console.log(`estos son los itemHits azucar, ${itemHits}`)


    barraProgreso.innerText = `${porcentaje}%`// En el nodo hijo, span
    // console.log("Has cogido un azucarillo!")  
    // console.log(eachItem)
  
    
    this.itemsArr[i].node.remove()
    this.itemsArr.shift() //quitar el elemento del array
   

    if (itemHits === 10) {
        this.levelComplete();
    }}
})

} 

obstaculoColision = () => {
    //Si el café choca con un obstaculo baja puntuación
    
    this.obstaculosArr.forEach((eachObstaculo,i) => {
        //Cambio de la imagen obstáculos cada 600 frames
        if (this.frames > 600 && this.obstaculosArr[i].imgA === true) {
        this.obstaculosArr[i].node.src = "./images/azucar.png"
        }
        
        if (this.frames > 1200 && this.obstaculosArr[i].imgA === false) {
            this.obstaculosArr[i].node.src = "./images/leche.png"
        }

        if (this.frames > 1800 && this.obstaculosArr[i].imgA === true) {
            this.obstaculosArr[i].node.src = "./images/gotas.png"
        }
        if (this.frames > 2400 && this.obstaculosArr[i].imgA === false) {
            this.obstaculosArr[i].node.src = "./images/azucar.png"
        }
                
        if (this.frames > 3000 && this.obstaculosArr[i].imgA === true) {
            this.obstaculosArr[i].node.src = "./images/leche.png"
        }
        
        if (this.frames > 3600 && this.obstaculosArr[i].imgA === false) {
            this.obstaculosArr[i].node.src = "./images/gotas.png"
        }

        //Declarar las colisiones
        if (
            this.cafe.x < eachObstaculo.x + eachObstaculo.w &&
            this.cafe.x + this.cafe.w > eachObstaculo.x &&
            this.cafe.y < eachObstaculo.y + eachObstaculo.h &&
            this.cafe.y + this.cafe.h > eachObstaculo.y
          ) {
    
        //Has cogido el erróneo!
        itemHits--
        let porcentaje = itemHits*10
        // console.log(`estos son los itemHits azucar, ${itemHits}`)

        barraProgreso.innerText = `${porcentaje}%`
        // console.log(eachObstaculo)
        
        this.obstaculosArr[i].node.remove()
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
    
    if (this.frames % 240 === 0) {
        let randomPositionX = Math.floor(Math.random() * 940); 
        //nos devuelve un número aleatorio entre 0 y 940 (para respetar ancho gameBox)
        

        let newItem = new Item(randomPositionX,this.level);
        this.itemsArr.push (newItem)
        // console.log(this.itemsArr[0].y)
        // console.log(this.itemsArr)
    }
   
    
}

obstaculosFalls = () => {
    //cuando queremos que aparezcan obstaculos
    // - Al inicio del juego
    // - cuando hayan pasado 2 segundos. this.frames % 120 === 0 
    let newObstaculoA
    let newObstaculoB
    
    if (this.frames % 400 === 0) {
        let randomPositionA = Math.floor(Math.random() * 940); 
        let randomPositionB = Math.floor(Math.random() * 940); 
        //nos devuelve un número aleatorio entre 0 y 940 (para respetar ancho gameBox)
        
        // if (this.newObstaculoA.x < newObstaculoB.x + newObstaculoB.w &&
        //     this.newObstaculoA.x + this.newObstaculoB.w > newObstaculoB.x &&
        //     this.newObstaculoA.y < newObstaculoB.y + newObstaculoB.h &&
        //     this.newObstaculoA.y + this.newObstaculoB.h > newObstaculoB.y) {
        //  }        

        newObstaculoA = new Obstaculo(randomPositionA, true,this.level);
        this.obstaculosArr.push (newObstaculoA)
    
        newObstaculoB = new Obstaculo(randomPositionB, false,this.level);
        this.obstaculosArr.push (newObstaculoB)

        // console.log(this.obstaculosArr[0].y)
        // console.log(this.obstaculosArr)
   }
}

itemsDelete= () => {
    //si el primer item del array ha salido de la vista lo eliminamos

    if (this.itemsArr.length !== 0 && this.itemsArr[0].y > 700) {
        this.itemsArr[0].node.remove() // quitar el elemento del DOM (la vista)
        this.itemsArr.shift() //quitar el elemento del array
        // console.log("eliminando elemento")
    }

    if (this.obstaculosArr.length !== 0 && this.obstaculosArr[0].y > 700) {
        this.obstaculosArr[0].node.remove() // quitar el elemento del DOM (la vista)
        this.obstaculosArr.shift() //quitar el elemento del array
        // console.log("eliminando elemento")
    }
}

 
gameLoop = () => {
    
    this.frames++;
    // console.log(this.frames)

    this.changeItemIcon();
    this.cogerItem();
    this.subirScore();


    this.itemsFalls();
    this.obstaculosFalls();
    this.itemsDelete();


    this.obstaculoColision();

    if (this.isGameOn === true) {      
        this.cafe.volverSalto()
        }

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
