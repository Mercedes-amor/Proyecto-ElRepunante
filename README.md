
# EL REPUNANTE

## [Play the Game!](https://mercedes-amor.github.io/Proyecto-ElRepunante/)

![Game Logo](./images/logo.png)


# Description

El Repunante quiere un café pero no para de cambiar de idea de lo que quiere ponerle. 
Coge los Items correctos según el momento (azúcar, leche o gotas de licor) para subir la barra de satisfacción hasta el 100%

No cojas los incorrectos ni dejes pasar los buenos o la barra bajará.

Si la barra baja del 0 GAME OVER.


# Main Functionalities

- Movimiento de caída automático de los items/obstáculos.
- Movimiento jugador: derecha/izquierda y salto con teclado.
- Colisión con Items sube Score.
- Colisión con obstáculos baja Score.
- Salida del GameBox de Items no colisionados baja Score.
- Llegar al 100% barra Score pasa al siguiente nivel, aumento velocidad.
- Barra Score baja del 0% GAME OVER.


# Backlog Functionalities

- Salida en posiciones aleatorias de los items/obstáculos.
- Cambio de imagen de los items/obstáculos cada cierto tiempo.

# Technologies used

- HTML
- CSS
- DOM Manipulation
- JS Classes
- Local Storage

# States

- Splash Screen.
- Game Screen.
- Game Over Screen.
- Level Complete Screen.

# Proyect Structure

## main.js

- audioOn()
- audioOff()
- startGame()
- nextLevel()
- AddEventListener()


## Game.js

- Game () {
    this.cafe;
    this.itemsArr;
    this.obstaculosArr;
    this.isGameOn;
    this.actualLevel;
    this.isMusicOn;
}
* musicOn();
* musicOff();
* levelComplete();
* gameOver();
* changeItemIcon();
* SubirScore();
* cogerItem();
* perderItem();
* obstaculosColision();
* itemsFall();
* obstaculosFall();
* itemsDelete();
* gameLoop();



## cafe.js 

- Cafe () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- positionUpdate()
- volverSalto()

## items.js 

- Item () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.gravitySpeed;
}
- gravityEffect()
- positionUpdate()

## obstaculos.js 

- Obstaculo () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.gravitySpeed;
}
- gravityEffect()
- positionUpdate()

# Extra Links 

## Deploy
[Link](https://mercedes-amor.github.io/Proyecto-ElRepunante/)