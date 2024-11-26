class Cell {
    constructor(x, y, type, cellColour, cellSize) {
        this.x = x
        this.y = y
        this.type = type
        this.cellColour = cellColour
        this.cellSize = cellSize
        this.visible = false
        this.city = false
        this.owned = -1

    }
    draw() {
        if (this.type == 4 || this.type == 5 || this.type == 6 || (this.type == 7 && this.owned != -1) || (this.type == 8 && this.owned != -1) || (this.type == 9 && this.owned != -1)) {
            m.reveal(this.y, this.x)
        }
        if (this.visible == 0) {
            image(fog, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 0) {
            image(sea, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 1) {
            image(grassland, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 3) {
            image(city, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 4) {
            image(fishing, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 5) {
            image(farm1, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 6) {
            image(farm3, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 7) {
            image(forest, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 8) {
            image(mountain, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }
        else if (this.type == 9) {
            image(farm2, this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
        }

    }
}

// draw() {
//     if (this.type == 4 || this.type == 5 || this.type == 6) {
//         m.reveal(this.y, this.x)
//     }
//     if (this.visible == true) {
//         fill(this.cellColour[this.type]);
//     }
//     else {
//         fill(this.cellColour[2]);
//     }
//     image(this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
// }
