class Item {
  constructor(posX, level) {
    
    this.node = document.createElement("img");
    this.node.src = "./images/azucar.png";
    gameBoxNode.append(this.node);

    //Propiedades item
    this.x = posX; //posición eje y
    this.y = 0; //posición eje y
    this.w = 70; //ancho
    this.h = 70; //alto

    this.gravitySpeed = level;

    //Tamaño y posición inicial item
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //Métodos items:
  gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
  };
}