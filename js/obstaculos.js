// console.log("desde obstáculos")

class Obstaculo {
    constructor(posX,imgA,level) {

    //propiedades items: azucar, leche, sacarina, aguardiente

    this.node = document.createElement("img");
    if (imgA === true) {
    this.node.src = "./images/leche.png";
    } else {
    this.node.src = "./images/gotas.png"; 
    }    
    this.imgA = imgA
    gameBoxNode.append(this.node)

    
    //aqui las propiedades item
    this.x = posX; //posición eje y
    this.y = 0; //posición eje y
    this.w = 60; //ancho
    this.h = 60; //alto

    this.gravitySpeed = level;
    

    // ajustar el tamaño y posición inicial item
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    }


//Métodos obstaculo:

gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdate()
  };

positionUpdate = () => {
    
this.node.style.top = `${this.y}px`;

  }
}