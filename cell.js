function Cell(i, j, w) {
    this.revealed = false;
    this.mine = false;

    this.i = i; //positon of cell on x axis (column)
    this.j = j; //position of cell on y axis (row)
    this.x = i * w; //x position
    this.y = j * w; //y position
    this.w = w; //width of cell
}

Cell.prototype.show = function(){
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if(this.revealed){
        fill(155);
        rect(this.x, this.y, this.w, this.w);
    }
    if(this.mine){
        fill(100);
        ellipse(this.x + this.w/2, this.y + this.w/2,this.w/2);

    }
}

Cell.prototype.reveal = function(){
    this.revealed = true;
    console.log("here");
}
