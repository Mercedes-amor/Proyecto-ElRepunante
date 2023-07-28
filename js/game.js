class Game {
  constructor(level) {
    //Agregamos el jugador/café
    this.cafe = new Cafe();

    //Agregamos los items y obstáculos como 2 arrays inicialmente vacíos
    this.itemsArr = [];
    this.obstaculosArr = [];

    this.frames = 0;
    this.isGameOn = true;
    this.actualLevel = level;

    //Audio
    this.isMusicOn = true;

    this.gameMusic = new Audio();
    this.gameMusic.src = "./sounds/bso2.mp3";
    this.gameMusic.volume = 0.05;
    this.gameMusic.loop = true;

    this.audioWin = new Audio();
    this.audioWin.src = "./sounds/victory.wav";
    this.audioWin.volume = 0.1;
    this.audioWin.loop = false;

    this.audioGameOver = new Audio();
    this.audioGameOver.src = "./sounds/gameover.mp3";
    this.audioGameOver.volume = 0.1;
    this.audioGameOver.loop = false;

    this.audioBonus = new Audio("./sounds/bonusSound.mp3");
    this.audioBonus.volume = 0.1;
    this.audioBonus.loop = false;

    this.audioFail = new Audio("./sounds/fail.mp3");
    this.audioFail.volume = 0.1;
    this.audioFail.loop = false;
  }

  //Métodos juego

  //Audio
  musicOn = () => {
    if (this.isGameOn === true) {
      this.gameMusic.play();
    }
  };
  musicOff = () => {
    if (this.isGameOn === true) {
      this.gameMusic.pause();
    }
  };

  //Cambio de pantalla
  levelComplete = () => {
    this.isGameOn = false; // detiene la recursión del juego
    this.gameMusic.pause();
    this.audioWin.play();
    gameScreenNode.style.display = "none"; //oculta pantalla del juego
    gameCompleteScreenNode.style.display = "flex"; //muestra pantalla nivel completado
    gameOverScreenNode.style.display = "none"; //ocultar pantalla GameOver
  };
  gameOver = () => {
    this.isGameOn = false; // detiene la recursión del juego
    this.gameMusic.pause();
    this.audioGameOver.play();
    gameScreenNode.style.display = "none"; //oculta panta del juego
    gameOverScreenNode.style.display = "flex"; //mostrar pantalla final
    gameCompleteScreenNode.style.display = "none"; //oculta pantalla del gameOver
  };

  //Funcionalidades generales
  changeItemIcon = () => {
    if (this.frames < 600 || this.frames === 1800 || this.frames === 3600) {
      itemBonusNode.style.backgroundImage = 'url("./images/azucar.png")';
    }
    if (this.frames === 600 || this.frames === 2400) {
      itemBonusNode.style.backgroundImage = 'url("./images/leche.png")';
    }

    if (this.frames === 1200 || this.frames === 3000) {
      itemBonusNode.style.backgroundImage = 'url("./images/gotas.png")';
    }
  };

  subirScore = () => {
    //Aumentar barra verde Score
    const porcentaje = `${itemHits * 10}%`;
    barraProgreso.style.width = porcentaje;
  };

  cogerItem = () => {
    //Si el café coge el Item sube puntuación
    this.itemsArr.forEach((eachItem, i) => {
      //Frecuencia cambio imagen items
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

      //Colisión con Item para cogerlo
      if (
        this.cafe.x < eachItem.x + eachItem.w &&
        this.cafe.x + this.cafe.w > eachItem.x &&
        this.cafe.y < eachItem.y + eachItem.h &&
        this.cafe.y + this.cafe.h > eachItem.y
      ) {
        //Consecuencias coger Item
        itemHits++;
        let porcentaje = itemHits * 10;

        barraProgreso.innerText = `${porcentaje}%`; // En el nodo hijo, span

        //Audio
        this.audioBonus.play();

        //Eliminar Items cogidos del array
        eachItem.node.remove();
        this.itemsArr.splice(i, 1);

        //Pasar al siguiente nivel
        if (itemHits === 10) {
          this.levelComplete();
        }
      }
    });
  };

  perderItem = () => {
    //Si dejas escapar un Item resta puntos

    this.itemsArr.forEach((eachItem, i) => {
      if (eachItem.y > 690) {
        itemHits--;
        let porcentaje = itemHits * 10;
        barraProgreso.innerText = `${porcentaje}%`;

        //Eliminar objeto del array
        eachItem.node.remove();
        this.itemsArr.splice(i, 1);

        //Audio
        this.audioFail.play();
        console.log(itemHits, this.itemsArr);

        //Finalización juego si puntuación baja de 0
        if (itemHits < 0) {
          this.gameOver();
        }
      }
    });
  };
  obstaculoColision = () => {
    //Si el café choca con un obstaculo baja puntuación

    this.obstaculosArr.forEach((eachObstaculo, i) => {
      //Cambio de la imagen obstáculos cada 600 frames
      if (this.frames > 600 && this.obstaculosArr[i].imgA === true) {
        this.obstaculosArr[i].node.src = "./images/azucar.png";
      }

      if (this.frames > 1200 && this.obstaculosArr[i].imgA === false) {
        this.obstaculosArr[i].node.src = "./images/leche.png";
      }

      if (this.frames > 1800 && this.obstaculosArr[i].imgA === true) {
        this.obstaculosArr[i].node.src = "./images/gotas.png";
      }
      if (this.frames > 2400 && this.obstaculosArr[i].imgA === false) {
        this.obstaculosArr[i].node.src = "./images/azucar.png";
      }

      if (this.frames > 3000 && this.obstaculosArr[i].imgA === true) {
        this.obstaculosArr[i].node.src = "./images/leche.png";
      }

      if (this.frames > 3600 && this.obstaculosArr[i].imgA === false) {
        this.obstaculosArr[i].node.src = "./images/gotas.png";
      }

      //Declarar las colisiones
      if (
        this.cafe.x < eachObstaculo.x + eachObstaculo.w &&
        this.cafe.x + this.cafe.w > eachObstaculo.x &&
        this.cafe.y < eachObstaculo.y + eachObstaculo.h &&
        this.cafe.y + this.cafe.h > eachObstaculo.y
      ) {
        //Has cogido el erróneo!
        itemHits--;
        let porcentaje = itemHits * 10;

        barraProgreso.innerText = `${porcentaje}%`;
        // console.log(eachObstaculo)

        this.obstaculosArr[i].node.remove();
        this.obstaculosArr.splice(i, 1); //quitar el elemento del array, intentar hacerlo con .slice(i,1)

        //Reproducir sonido
        this.audioFail.play();

        if (itemHits < 0) {
          this.gameOver();
        }
      }
    });
  };

  itemsFalls = () => {
    //Aparción de los Items, a los 60 frames de iniciar y cada 247 frames
    // - Se escogieron estas cifras junto con los obstáculos para evitar salidas simultáneas.

    if (this.frames === 60 || this.frames % 247 === 0) {
      let randomPositionX = Math.floor(Math.random() * 1100);

      let newItem = new Item(randomPositionX, this.actualLevel);

      //Bloqueo colisiones: Pendiente para un futuro
      // this.obstaculosArr.forEach((eachObstaculo) => {
      //  if (
      //    this.newItem.x < eachObstaculo.x + eachObstaculo.w &&
      //    this.newItem.x + this.newItem.w > eachObstaculo.x &&
      //    this.newItem.y < eachObstaculo.y + eachObstaculo.h &&
      //    this.newItem.y + this.eachObstaculo.h > eachObstaculo.y
      //    )}

      this.itemsArr.push(newItem);
    }
  };

  obstaculosFalls = () => {
    //2 tipos de obstáculos, cada uno aparece e diferente frecuencia
    let newObstaculoA;
    let newObstaculoB;

    if (this.frames % 340 === 0) {
      let randomPositionA = Math.floor(Math.random() * 1100);

      newObstaculoA = new Obstaculo(randomPositionA, true, this.actualLevel);
      this.obstaculosArr.push(newObstaculoA);
    }
    if (this.frames % 453 === 0) {
      let randomPositionB = Math.floor(Math.random() * 1100);

      newObstaculoB = new Obstaculo(randomPositionB, false, this.actualLevel);
      this.obstaculosArr.push(newObstaculoB);
    }
  };

  itemsDelete = () => {
    //Eliminar los items/obstáculos una vez fuera del gameBox

    if (this.itemsArr.length !== 0 && this.itemsArr[0].y > 700) {
      this.itemsArr[0].node.remove(); // quitar el elemento del DOM (la vista)
      this.itemsArr.shift(); //quitar el elemento del array
    }

    if (this.obstaculosArr.length !== 0 && this.obstaculosArr[0].y > 700) {
      this.obstaculosArr[0].node.remove(); // quitar el elemento del DOM (la vista)
      this.obstaculosArr.shift(); //quitar el elemento del array
    }
  };

  gameLoop = () => {
    this.frames++;

    this.changeItemIcon();
    this.cogerItem();
    this.subirScore();
    this.itemsFalls();
    this.obstaculosFalls();
    this.itemsDelete();
    this.perderItem();
    this.obstaculoColision();

    this.cafe.volverSalto();

    if (this.isGameOn === true) {
      this.itemsArr.forEach((eachItem) => {
        eachItem.gravityEffect();
      });

      if (this.isGameOn === true) {
        this.obstaculosArr.forEach((eachObstaculo) => {
          eachObstaculo.gravityEffect();
        });

        //Regresión
        requestAnimationFrame(this.gameLoop);
      }
    }
  };
}
