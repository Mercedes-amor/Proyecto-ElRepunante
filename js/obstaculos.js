class Obstaculo {
  constructor(posX, imgA, level) {
    
    //2 tipos obstáculos imgA= true y imgB=false
    this.node = document.createElement("img");
    if (imgA === true) {
      this.node.src = "./images/leche.png";
    } else {
      this.node.src = "./images/gotas.png";
    }
    this.imgA = imgA;
    gameBoxNode.append(this.node);

    //Propiedades obstáculos
    this.x = posX; //posición eje x
    this.y = 0; //posición eje y
    this.w = 70; //ancho
    this.h = 70; //alto

    this.gravitySpeed = level;//Velocidad caída

    //Tamaño y posición inicial obstáculos
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //Métodos obstaculo:

  gravityEffect = () => {
    this.y += this.gravitySpeed;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
  };
}
