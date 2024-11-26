class Player {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.frame = 0
        this.maxFrame = 8
        this.direction = 0
        this.turn = false
    }

    draw() {
        image(player, this.x * cellSize, this.y * cellSize, cellSize, cellSize, this.frame * 64, (this.direction + 8) * 64, 64, 64)
    }

    get xValue() {
        return this.x
    }
    get yValue() {
        return this.y
    }

    left() {
        this.direction = 1
        this.frame = ++this.frame % this.maxFrame
        this.x = this.x - 1
    }
    up() {
        this.direction = 0
        this.frame = ++this.frame % this.maxFrame
        this.y = this.y - 1
    }
    right() {
        this.direction = -1
        this.frame = ++this.frame % this.maxFrame
        this.x = this.x + 1
    }
    down() {
        this.direction = 2
        this.frame = ++this.frame % this.maxFrame
        this.y = this.y + 1
    }
    settle() {
        cities.push(new City(this.x, this.y, cities.length))
    }
}
