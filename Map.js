class Map {
    constructor(mapSize, cellSize) {
        this.mapSize = mapSize
        this.cellSize = cellSize
        this.cellColour = ["blue", "lime", "black", "black", "turquoise", "yellow", "green", "darkgreen", "grey"];
        this.cells = []
        this.Map = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 7, 7, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 7, 8, 8, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 8, 7, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 7, 7, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 7, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 8, 8, 8, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 8, 8, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 7, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 7, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 1, 1, 7, 7, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 7, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 7, 0, 0, 1, 7, 0, 0, 0, 0, 1, 1, 1, 8, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 8, 8, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 7, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 1, 7, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 8, 8, 8, 8, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 1, 1, 1, 1, 8, 8, 0, 0, 8, 8, 8, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 8, 8, 8, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 8, 8, 8, 8, 8, 8, 1, 1, 7, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 8, 8, 8, 8, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 8, 1, 7, 7, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 8, 8, 8, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 7, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 1, 1, 1, 8, 1, 1, 7, 1, 1, 1, 0, 0],
            [0, 0, 7, 7, 7, 8, 7, 7, 1, 7, 1, 7, 1, 1, 1, 7, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 0, 0, 1, 7, 7, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 7, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 0, 0, 7, 7, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 7, 7, 8, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 7, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 7, 7, 7, 7, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 7, 7, 1, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 7, 7, 7, 1, 1, 1, 1, 1, 1, 0, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 7, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 8, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 8, 8, 8, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 8, 1, 1, 1, 1, 0, 0, 1, 1, 1, 7, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 7, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 7, 1, 1, 7, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 7, 7, 0, 7, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 7, 7, 7, 0, 7, 7, 7, 1, 1, 0, 0, 1, 0, 0, 1, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 7, 1, 1, 1, 7, 7, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 7, 7, 0, 0, 7, 1, 7, 1, 1, 0, 8, 8, 8, 1, 1, 0, 0, 8, 8, 0, 0, 0],
            [0, 0, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 7, 7, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 7, 0, 7, 7, 7, 1, 7, 0, 7, 0, 0, 1, 8, 8, 1, 0, 0, 8, 8, 8, 0, 0, 0],
            [0, 0, 1, 1, 7, 7, 1, 1, 1, 7, 1, 1, 7, 7, 1, 1, 0, 0, 0, 0, 0, 1, 8, 8, 1, 7, 7, 7, 7, 1, 7, 7, 0, 7, 7, 7, 0, 1, 1, 8, 8, 1, 0, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 1, 0, 0, 0, 0, 1, 1, 8, 7, 7, 7, 7, 7, 0, 7, 7, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 8, 8, 8, 8, 0, 0, 0],
            [0, 0, 0, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 7, 7, 0, 7, 1, 0, 7, 7, 1, 0, 0, 1, 1, 1, 1, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0],
            [0, 0, 1, 7, 7, 0, 1, 7, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 0, 0, 0, 1, 1, 7, 7, 7, 7, 7, 7, 0, 1, 7, 7, 7, 7, 1, 1, 1, 1, 1, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 8, 1, 1, 1, 0, 0, 0, 1, 7, 7, 1, 0, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 8, 8, 8, 8, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 8, 8, 1, 0, 1, 0, 0, 0, 0, 7, 1, 7, 7, 0, 7, 7, 1, 7, 7, 1, 7, 1, 1, 1, 1, 1, 8, 8, 8, 8, 8, 8, 8, 0, 0],
            [0, 0, 0, 0, 1, 1, 7, 7, 1, 1, 1, 0, 0, 0, 1, 1, 8, 8, 1, 0, 0, 0, 0, 7, 7, 0, 7, 7, 1, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 1, 7, 7, 7, 7, 7, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }
    initiateMap() {
        for (let y = 0; y < this.mapSize; y++) {
            for (let x = 0; x < this.mapSize; x++) {
                this.cells.push(new Cell(x, y, this.Map[y][x], this.cellColour, this.cellSize))
            }
        }
    }
    draw() {
        for (let cell of this.cells) {
            cell.draw()
        }
    }
    checkTarget(dx, dy, PlayerX, PlayerY) {
        if (this.Map[PlayerY + dy][PlayerX + dx] != 0 && this.Map[PlayerY + dy][PlayerX + dx] != 4 && this.Map[PlayerY + dy][PlayerX + dx] != 8) {
            if (this.Map[(PlayerY + dy)][(PlayerX + dx)] == 7) {
                this.cells[(PlayerY + dy) * this.mapSize + (PlayerX + dx)].visible = true
                this.cells[((PlayerY + dy) + 1) * this.mapSize + (PlayerX + dx)].visible = false
                this.cells[((PlayerY + dy) - 1) * this.mapSize + (PlayerX + dx)].visible = false
                this.cells[(PlayerY + dy) * this.mapSize + ((PlayerX + dx) + 1)].visible = false
                this.cells[((PlayerY + dy) + 1) * this.mapSize + ((PlayerX + dx) + 1)].visible = false
                this.cells[((PlayerY + dy) - 1) * this.mapSize + ((PlayerX + dx) + 1)].visible = false
                this.cells[(PlayerY + dy) * this.mapSize + ((PlayerX + dx) - 1)].visible = false
                this.cells[((PlayerY + dy) + 1) * this.mapSize + ((PlayerX + dx) - 1)].visible = false
                this.cells[((PlayerY + dy) - 1) * this.mapSize + ((PlayerX + dx) - 1)].visible = false
                if (dx == 1) {
                    this.cells[((PlayerY + dy) + 1) * this.mapSize + ((PlayerX + dx) - 2)].visible = false
                    this.cells[(PlayerY + dy) * this.mapSize + ((PlayerX + dx) - 2)].visible = false
                    this.cells[((PlayerY + dy) - 1) * this.mapSize + ((PlayerX + dx) - 2)].visible = false
                }
                if (dx == -1) {
                    this.cells[((PlayerY + dy) + 1) * this.mapSize + ((PlayerX + dx) + 2)].visible = false
                    this.cells[(PlayerY + dy) * this.mapSize + ((PlayerX + dx) + 2)].visible = false
                    this.cells[((PlayerY + dy) - 1) * this.mapSize + ((PlayerX + dx) + 2)].visible = false
                }
                if (dy == 1) {
                    this.cells[(PlayerY + dy - 2) * this.mapSize + ((PlayerX + dx) + 1)].visible = false
                    this.cells[(PlayerY + dy - 2) * this.mapSize + (PlayerX + dx)].visible = false
                    this.cells[(PlayerY + dy - 2) * this.mapSize + ((PlayerX + dx) - 1)].visible = false
                }
                if (dy == -1) {
                    this.cells[(PlayerY + dy + 2) * this.mapSize + ((PlayerX + dx) + 1)].visible = false
                    this.cells[(PlayerY + dy + 2) * this.mapSize + (PlayerX + dx)].visible = false
                    this.cells[(PlayerY + dy + 2) * this.mapSize + ((PlayerX + dx) - 1)].visible = false
                }
            } else {
                this.reveal(PlayerY + dy, PlayerX + dx, dy, dx)
            }
            return true
        }
    }
    reveal(y, x, dy, dx) {
        this.cells[y * this.mapSize + x].visible = true
        this.cells[(y + 1) * this.mapSize + x].visible = true
        this.cells[(y - 1) * this.mapSize + x].visible = true
        this.cells[y * this.mapSize + (x + 1)].visible = true
        this.cells[(y + 1) * this.mapSize + (x + 1)].visible = true
        this.cells[(y - 1) * this.mapSize + (x + 1)].visible = true
        this.cells[y * this.mapSize + (x - 1)].visible = true
        this.cells[(y + 1) * this.mapSize + (x - 1)].visible = true
        this.cells[(y - 1) * this.mapSize + (x - 1)].visible = true
        if (dx == 1) {
            this.cells[(y + 1) * this.mapSize + (x - 2)].visible = false
            this.cells[y * this.mapSize + (x - 2)].visible = false
            this.cells[(y - 1) * this.mapSize + (x - 2)].visible = false
        }
        if (dx == -1) {
            this.cells[(y + 1) * this.mapSize + (x + 2)].visible = false
            this.cells[y * this.mapSize + (x + 2)].visible = false
            this.cells[(y - 1) * this.mapSize + (x + 2)].visible = false
        }
        if (dy == 1) {
            this.cells[(y - 2) * this.mapSize + (x + 1)].visible = false
            this.cells[(y - 2) * this.mapSize + x].visible = false
            this.cells[(y - 2) * this.mapSize + (x - 1)].visible = false
        }
        if (dy == -1) {
            this.cells[(y + 2) * this.mapSize + (x + 1)].visible = false
            this.cells[(y + 2) * this.mapSize + x].visible = false
            this.cells[(y + 2) * this.mapSize + (x - 1)].visible = false
        }
    }
    currentCellCheck(PlayerX, PlayerY) {
        if (this.cells[(PlayerY * this.mapSize) + PlayerX].city == false) {
            this.cells[(PlayerY * this.mapSize) + PlayerX].city = true
            this.cells[(PlayerY * this.mapSize) + PlayerX].type = 3
            if (this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type == 0 || this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type == 4) {
                this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type = 4
            } else if (this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].city == true || this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type == 6 || this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type == 7 || this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type == 8) {

            } else {
                this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].type = 5
            }
            if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type == 0 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type == 4) {
                this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type = 4
            } else if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].city == true || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type == 7 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type == 7 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type == 8) {

            } else {
                this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].type = 5
            }
            if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type == 0 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type == 4) {
                this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type = 4
            } else if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].city == true || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type == 6 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type == 7 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type == 8) {

            } else {
                this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].type = 5
            }
            if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type == 0 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type == 4) {
                this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type = 4
            } else if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].city == true || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type == 6 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type == 7 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type == 8) {

            } else {
                this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].type = 5
            }
            if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type == 0 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type == 4) {
                this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type = 4
            } else if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].city == true || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type == 6 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type == 7 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type == 8) {

            } else {
                this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].type = 5
            }
            if (this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type == 0 || this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type == 4) {
                this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type = 4
            } else if (this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].city == true || this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type == 6 || this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type == 7 || this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type == 8) {

            } else {
                this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].type = 5
            }
            if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type == 0 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type == 4) {
                this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type = 4
            } else if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].city == true || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type == 6 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type == 7 || this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type == 8) {

            } else {
                this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].type = 5
            }
            if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type == 0 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type == 4) {
                this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type = 4
            } else if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].city == true || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type == 6 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type == 7 || this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type == 8) {

            } else {
                this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].type = 5
            }
            return true
        }
    }
    cellOwnership(PlayerX, PlayerY) {
        if (this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].owned == -1 && this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].city == false) {
            this.cells[(PlayerY * this.mapSize) + (PlayerX + 1)].owned = cities.length
        }
        if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].owned == -1 && this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].city == false) {
            this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX + 1)].owned = cities.length
        }
        if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].owned == -1 && this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].city == false) {
            this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX + 1)].owned = cities.length
        }
        if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].owned == -1 && this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].city == false) {
            this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX)].owned = cities.length
        }
        if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].owned == -1 && this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].city == false) {
            this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX)].owned = cities.length
        }
        if (this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].owned == -1 && this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].city == false) {
            this.cells[(PlayerY * this.mapSize) + (PlayerX - 1)].owned = cities.length
        }
        if (this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].owned == -1 && this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].city == false) {
            this.cells[((PlayerY + 1) * this.mapSize) + (PlayerX - 1)].owned = cities.length
        }
        if (this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].owned == -1 && this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].city == false) {
            this.cells[((PlayerY - 1) * this.mapSize) + (PlayerX - 1)].owned = cities.length
        }
    }
    get cellArray() {
        return this.cells
    }
}
//problem, fix how the yellow can replace green when placing another city,
//nvm dont fix this jsut dont place cities next to each other.
