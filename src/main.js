function main() {
  // If the game ended return early to stop game
  if (game.didGameEnd()) return;
  setTimeout(function onTick() {
    game.state.changingDirection = false;
    game.clearCanvas();
    game.drawFood();
    game.advanceSnake();
    game.drawSnake();
    // Call game again
    main();
  }, game.setup.game_speed)
}

// Get the canvas element
const gameCanvas = document.getElementById("gameCanvas");

// Return a two dimensional drawing context
const ctx = gameCanvas.getContext("2d");

// Initialize game object
const game = new Game();

// Start game
main();

// Create the first food location
game.createFood();

// Call changeDirection whenever a key is pressed
document.addEventListener("keydown", function(){game.changeDirection(game.state)});
