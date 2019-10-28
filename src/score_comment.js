class ScoreComment {
  constructor() {
    this.comment = 'Let\'s get this started!';
    document.getElementById('score_comment').innerHTML = this.comment;
  }
  
  updateComment(score) {
    if(score > 0 && score < 50) {
      this.comment = 'Taking off'
    } else if (score >= 50 && score < 100) {
      this.comment = 'There\'s a long way to the top'
    } else {
      this.comment = 'That\'s a century!'
    }
    this.updateModel();
  }
  
  updateModel() {
    document.getElementById('score_comment').innerHTML = this.comment;
  }
}

// From didGameEnd() in game.js:
// for (let i = 4; i < this.snake.body.length; i++) {
//   if (this.snake.body[i].x === this.snake.body[0].x &&
//       this.snake.body[i].y === this.snake.body[0].y) {
//     return true
//   }
// }
// const hitLeftWall = this.snake.body[0].x < 0;
// const hitRightWall = this.snake.body[0].x > gameCanvas.width - 10;
// const hitTopWall = this.snake.body[0].y < 0;
// const hitBottomWall = this.snake.body[0].y > gameCanvas.height - 10;
// return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall