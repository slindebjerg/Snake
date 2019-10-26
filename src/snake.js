class Snake {
  constructor() {
    this.body = [
      {x: 150, y: 150},
      {x: 140, y: 150},
      {x: 130, y: 150},
      {x: 120, y: 150},
      {x: 110, y: 150},
    ],
    this.color = 'lightgreen',
    this.border_color = 'darkgreen'
  }
  
  move(dX, dY, eats=false) {
    const newHead = {x: this.body[0].x + dX, y: this.body[0].y + dY};
    this.body.unshift(newHead);
    
    if(eats===false){
      this.body.pop()
    }
  }
}