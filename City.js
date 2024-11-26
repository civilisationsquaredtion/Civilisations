class City {
    constructor(x, y, cityNumber) {
        this.x = x
        this.y = y
        this.production = 1
        this.productionRequired = 400
        this.building = "farms"
        this.chooseProduction = 0
        this.cityNumber = cityNumber
    }
    changeProduction(cells) {
        this.building = "farms"
        if (this.productionRequired <= 0) {
            let growableCells = []
            let applicableCells = 0
            if (cells[(this.x + 2) + (mapSize * this.y)].owned == -1) {
                growableCells.push(cells[(this.x + 2) + (mapSize * this.y)])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x + 2) + (mapSize * (this.y + 1))].owned == -1) {
                growableCells.push(cells[(this.x + 2) + (mapSize * (this.y + 1))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x + 2) + (mapSize * (this.y + 2))].owned == -1) {
                growableCells.push(cells[(this.x + 2) + (mapSize * (this.y + 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x + 2) + (mapSize * (this.y - 1))].owned == -1) {
                growableCells.push(cells[(this.x + 2) + (mapSize * (this.y - 1))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x + 2) + (mapSize * (this.y - 2))].owned == -1) {
                growableCells.push(cells[(this.x + 2) + (mapSize * (this.y - 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 2) + (mapSize * (this.y))].owned == -1) {
                growableCells.push(cells[(this.x - 2) + (mapSize * (this.y))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 2) + (mapSize * (this.y + 1))].owned == -1) {
                growableCells.push(cells[(this.x - 2) + (mapSize * (this.y + 1))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 2) + (mapSize * (this.y + 2))].owned == -1) {
                growableCells.push(cells[(this.x - 2) + (mapSize * (this.y + 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 2) + (mapSize * (this.y - 1))].owned == -1) {
                growableCells.push(cells[(this.x - 2) + (mapSize * (this.y - 1))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 2) + (mapSize * (this.y - 2))].owned == -1) {
                growableCells.push(cells[(this.x - 2) + (mapSize * (this.y - 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 1) + (mapSize * (this.y + 2))].owned == -1) {
                growableCells.push(cells[(this.x - 1) + (mapSize * (this.y + 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x - 1) + (mapSize * (this.y - 2))].owned == -1) {
                growableCells.push(cells[(this.x - 1) + (mapSize * (this.y - 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x + 1) + (mapSize * (this.y - 2))].owned == -1) {
                growableCells.push(cells[(this.x + 1) + (mapSize * (this.y - 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x + 1) + (mapSize * (this.y + 2))].owned == -1) {
                growableCells.push(cells[(this.x + 1) + (mapSize * (this.y + 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x) + (mapSize * (this.y - 2))].owned == -1) {
                growableCells.push(cells[(this.x) + (mapSize * (this.y - 2))])
                applicableCells = applicableCells + 1
            }
            if (cells[(this.x) + (mapSize * (this.y + 2))].owned == -1) {
                growableCells.push(cells[(this.x) + (mapSize * (this.y + 2))])
                applicableCells = applicableCells + 1
            }
            let randomNumber = Math.floor(Math.random() * (applicableCells))
            if(applicableCells != 0){
                let chosenCell = growableCells[randomNumber]
                chosenCell.owned = this.cityNumber
                if (chosenCell.type == 1) {
                    chosenCell.type = 5
                }
                if (chosenCell.type == 0) {
                    chosenCell.type = 4
                }
            }
            for (let cell of cells) {
                if (cell.type == 6 && cell.owned == this.cityNumber) {
                    cell.type = 9
                }
                else if (cell.type == 9 && cell.owned == this.cityNumber) {
                    cell.type = 5
                }
            }

            this.productionRequired = 400

        }
        return true
    }
    // change applicable cells to applicable cells - 1 because it starts at one and the array starts at position 0.


    progressProduction(cells) {
        for (let cell of cells) {
            if (cell.type == 5 && cell.owned == cityIteration) {
                this.production = this.production + 2
            } else if (cell.type == 4 && cell.owned == cityIteration) {
                this.production = this.production + 1
            } else if (cell.type == 6 && cell.owned == cityIteration) {
                this.production = this.production + 5
            } else if (cell.type == 7 && cell.owned == cityIteration) {
                this.production = this.production + 3
            } else if (cell.type == 8 && cell.owned == cityIteration) {
                this.production = this.production - 1
            }
        }
        this.productionRequired = this.productionRequired - this.production
        if (this.productionRequired <= 0 && this.building == "farms") {
            for (let cell of cells) {
                if (cell.type == 5 && cell.owned == cityIteration) {
                    cell.type = 6
                }
            }
            this.changeProduction(cells)
        }
        this.production = 1
    }
}

