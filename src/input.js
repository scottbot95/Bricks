export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        case 27:
          game.togglePause();
        case 32:
          game.start();
      }
    });

    document.addEventListener("keyup", function(event) {
      switch (event.keyCode) {
        case 37:
          if (paddle.currentSpeed < 0) {
            paddle.moveStop();
            break;
          }
        case 39:
          if (paddle.currentSpeed > 0) {
            paddle.moveStop();
            break;
          }
      }
    });
  }
}
