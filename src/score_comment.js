class ScoreComment {
  constructor() {
    this.score = 0;
    this.comment = 'Let\'s get this started!';
    document.getElementById('score_comment').innerHTML = this.comment;
  }
  
  updateComment(score) {
    switch (score) {
      case 10:
        this.comment = 'Getting started'
        break;
      case 50:
        this.comment = 'There\'s a long way to the top'
        break;
      case 100:
        this.comment = 'That\'s a century!'
        break;
      default:
        break;
    }
    this.updateModel();
  }

  updateModel() {
    document.getElementById('score_comment').innerHTML = this.comment;
  }
}