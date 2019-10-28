function runGame() {
  // If the game ended return early to stop game
  if (game.didGameEnd()) return;
  
  setTimeout(function onTick() {
    game.state.changingDirection = false;
    game.clearCanvas();
    game.drawFood();
    game.advanceSnake();
    game.drawSnake();

    runGame();
  }, game.setup.game_speed)
}

function restartGame() {
  game.restartGame()
  runGame()
}

// Get the canvas element
const gameCanvas = document.getElementById("gameCanvas");

// Initialize game object
const game = new Game();

// Start game
runGame();

// Create the first food location
game.createFood();

// Call changeDirection whenever a key is pressed
document.addEventListener("keydown", function(){game.changeDirection(game.state)});

// Connect model and controller
document.getElementById('restart').addEventListener('click', restartGame)
