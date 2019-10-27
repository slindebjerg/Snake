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