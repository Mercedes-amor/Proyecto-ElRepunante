console.log("café")

class Cafe {
    constructor() {

    //Creamos el elemento en el DOM
    this.cafeNode = document.createElement("img");
    this.cafeNode.src = "./images/cafe3.png";
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

//Moverse derecha/izq



//Acelerón


//Actualización posición
positionUpdate = () => {
    // Iría aquí todo lo que afectara al eje x u otros cambios afectara a la posición.

    this.cafeNode.style.left = `${this.x}px`;

  }
}