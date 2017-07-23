function create2DArray(cols, rows){
    var arr = new Array(cols);
    for(var i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

// function use2DArray(func){
//     for (var i = 0; i < cols; i++) {
//         for (var j = 0; j < rows; j++) {
//             func(i, j);
//         }
//     }
// }

var cols;
var rows;
var w = 30;
var totalMines = 10;

function setup() {
    createCanvas(401, 401);
    cols = floor(width / w);
    rows = floor(width / w);
    grid = create2DArray(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    //choose random cells to be mines
    var counter = totalMines;
    while (counter > 0) {
        var i = floor(random(cols));
        var j = floor(random(rows));
        if (!grid[i][j].mine) {
            grid[i][j].mine = true;
            counter = counter-1;
        }
    }
}


function mousePressed(){
    //check if mouse press is outside of the canvas
    if(mouseX < (width - (width - w*cols)) && mouseX > 0 && mouseY < (height - (height - w*rows)) && mouseY > 0){
        //check if the cell has already been pressed
        var clickedCell = grid[floor(mouseX / w)][floor(mouseY / w)];
        if(!clickedCell.revealed){
            clickedCell.reveal();
        }
    }
}


function draw() {
    background(255);
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].show();
        }
    }
}
