class Button {
    constructor(text, x, y, w, h, click) {
      this.x = x;
      this.y = y;
      this.text = text;
      this.width = w;
      this.height = h;
      this.click = click;
      this.enabled = true;
    }
  
    clicked() {
      if (this.enabled) {
        if (mouseX > this.x - this.width / 2 && mouseX < this.x + this.width / 2 && mouseY > this.y - this.height / 2 && mouseY < this.y + this.height / 2) {
          this.click();
        }
      }
    }
  
    render() {
      rectMode(CENTER);
      textAlign(CENTER, CENTER);
      fill(0);
      stroke(255);
      strokeWeight(2);
      rect(this.x, this.y, this.width, this.height);
      noStroke();
      fill(255);
      textSize(20);
      text(this.text, this.x, this.y);
    }
  }
