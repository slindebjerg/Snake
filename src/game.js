class Game{
  constructor() {
    this.snake = new Snake;
    this.score_comment = new ScoreComment;
    this.ctx = gameCanvas.getContext("2d");
    
    this.setup = {
      game_speed: 100,
      canvas_border_color: 'black',
      canvas_background_color: 'white',
      food_color: 'red',
      food_border_color: 'darkred',
    }

    this.state = {
      changingDirection: false,
      score: 0,
      foodX: 0,
      foodY: 0,
      dX: 10,
      dY: 0,
    }
  }

  restartGame() {
    this.snake.body = [
      {x: 150, y: 150},
      {x: 140, y: 150},
      {x: 130, y: 150},
      {x: 120, y: 150},
      {x: 110, y: 150},
    ]

    this.state = {
      changingDirection: false,
      score: 0,
      foodX: this.randomTen(0, gameCanvas.width - 10),
      foodY: this.randomTen(0, gameCanvas.width - 10),
      dX: 10,
      dY: 0,
    }

    document.getElementById('score').innerHTML = this.state.score;
  }

  clearCanvas() {
    /**
     * Change the background colour of the canvas to CANVAS_BACKGROUND_COLOUR and
     * draw a border around it
     */
    //  Select the colour to fill the drawing
    this.ctx.fillStyle = this.setup.canvas_background_color;
    //  Select the colour for the border of the canvas
    this.ctx.strokestyle = this.setup.canvas_border_color;
    // Draw a "filled" rectangle to cover the entire canvas
    this.ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    // Draw a "border" around the entire canvas
    this.ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
  }

  drawFood() {
    this.ctx.fillStyle = this.setup.food_color;
    this.ctx.strokestyle = this.setup.food_border_color;
    this.ctx.fillRect(this.state.foodX, this.state.foodY, 10, 10);
    this.ctx.strokeRect(this.state.foodX, this.state.foodY, 10, 10);
  }

  advanceSnake() {  
    /**
     * Advances the snake by changing the x-coordinates of its parts
     * according to the horizontal velocity and the y-coordinates of its parts
     * according to the vertical velocity
     */
    if (this.didEatFood(this.snake.body[0].x, this.snake.body[0].y)) {
      this.snake.move(this.state.dX, this.state.dY, true);
      this.increaseScore();
      this.createFood();
    } else {
      this.snake.move(this.state.dX, this.state.dY);
    }
  }

  increaseScore() {
    this.state.score += 10;
    document.getElementById('score').innerHTML = this.state.score;
    this.score_comment.updateComment(this.state.score);
  }

  didEatFood(snakeHeadX, snakeHeadY) {
    return snakeHeadX === this.state.foodX && snakeHeadY === this.state.foodY;
  }

  // didGameEnd() {
  // /**
  //  * Returns true if the head of the snake touched another part of the game
  //  * or any of the walls
  //  */
  // }

  randomTen(min, max) {
    /**
     * Generates a random number that is a multiple of 10 given a minumum
     * and a maximum number
     * @param { number } min - The minimum number the random number can be
     * @param { number } max - The maximum number the random number can be
     */
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
  }
  
  createFood() {
    /**
    * Creates random set of coordinates for the snake food.
    */
    // Generate a random number the food x-coordinate
    this.state.foodX = this.randomTen(0, gameCanvas.width - 10);
    // Generate a random number for the food y-coordinate
    this.state.foodY = this.randomTen(0, gameCanvas.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    this.snake.body.forEach((part) => {
      const foodIsoNsnake = part.x == this.state.foodX && 
                            part.y == this.state.foodY;
      if (foodIsoNsnake) this.createFood();
    });
  }

  drawSnake() {
    this.snake.draw(this.ctx);
  }

  changeDirection(state) {
    /**
     * Changes the vertical and horizontal velocity of the snake according to the
     * key that was pressed.
     * The direction cannot be switched to the opposite direction, to prevent the snake
     * from reversing
     * For example if the the direction is 'right' it cannot become 'left'
    */
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    /**
     * Prevent the snake from reversing
     * Example scenario:
     * Snake is moving to the right. User presses down and immediately left
     * and the snake immediately changes direction without taking a step down first
     */
    if (state.changingDirection) return;
    state.changingDirection = true;
    const keyPressed = event.keyCode;
    const goingUp = state.dY === -10;
    const goingDown = state.dY === 10;
    const goingRight = state.dX === 10;
    const goingLeft = state.dX === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
      state.dX = -10;
      state.dY = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
      state.dX = 0;
      state.dY = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
      state.dX = 10;
      state.dY = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
      state.dX = 0;
      state.dY = 10;
    }
  }
}
