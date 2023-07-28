class Cafe {
  constructor() {
    //Creamos el elemento en el DOM
    this.cafeNode = document.createElement("img");
    this.cafeNode.src = "./images/cafe.png";
    gameBoxNode.append(this.cafeNode);

    //propiedades café
    this.x = 400; //posición eje x
    this.y = 570; //posición eje y
    this.w = 130; //ancho
    this.h = 90; //alto

    //tamaño y posición inicial café
    this.cafeNode.style.width = `${this.w}px`;
    this.cafeNode.style.height = `${this.h}px`;
    this.cafeNode.style.position = "absolute";
    this.cafeNode.style.top = `${this.y}px`;
    this.cafeNode.style.left = `${this.x}px`;
  }

  //Métodos del café

  //Actualización posición
  positionUpdate = () => {
    this.cafeNode.style.left = `${this.x}px`;
    this.cafeNode.style.top = `${this.y}px`;
  };

  volverSalto = () => {
    if (this.y < 570) { //Solo lo ejecuta si el café está por encima de su posición inicial
      this.y += 4;
      this.positionUpdate();
    }
  };
}
