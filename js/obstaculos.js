console.log("desde obstáculos")

class Obstaculo {
    constructor(posX) {

    //propiedades items: azucar, leche, sacarina, aguardiente

    this.node = document.createElement("img");
    this.node.src = "./images/leche.png";    
    gameBoxNode.append(this.node)


    //aqui las propiedades item
    this.x = posX; //posición eje y
    this.y = 0; //posición eje y
    this.w = 60; //ancho
    this.h = 60; //alto

    this.gravitySpeed = 2;

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