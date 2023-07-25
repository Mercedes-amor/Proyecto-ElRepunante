// console.log("desde item")

class Item {
    constructor(posX,level) {

    //propiedades items: azucar, leche, sacarina, aguardiente

    this.node = document.createElement("img");
    this.node.src = "./images/azucar.png";  
    

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




//Métodos items:

gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdate()
  };

positionUpdate = () => {
    
this.node.style.top = `${this.y}px`;

  }


}