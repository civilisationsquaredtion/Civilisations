const mapSize = 50;
let cityIteration = 0
let thisTurn = true
let choiceMade = false
let player
let sea, city, farm1, farm2, fishing, fog, forest, grassland, mountain
let buttons = []
let menuButtons = []
let gameButtons = []
let gameMode = "menu"


function preload() {
  player = loadImage("Warrior.png");
  sea = loadImage("Sea.png")
  city = loadImage("City.png")
  farm1 = loadImage("Farm1.png")
  farm2 = loadImage("Farm2.png")
  farm3 = loadImage("Farm3.png")
  fishing = loadImage("Fishing.png")
  fog = loadImage("Fog.png")
  forest = loadImage("Forest.png")
  grassland = loadImage("Grassland.png")
  mountain = loadImage("mountain.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  menuButtons = [
    new Button("New Game", 300, 100, 200, 50, function () {
      gameMode = "play"
      buttons = gameButtons
    }),
    new Button("Quit", 300, 200, 200, 50, function () {
      gameMode = "menu"
    }),
  ]
  gameButtons = [
    new Button("Controls:", 850, 50, 100, 40, function () {
      gameMode = "play"
      buttons = gamebuttons
    }),
    new Button("B = Build City", 850, 100, 140, 40, function () {
      gameMode = "play"
      buttons = gamebuttons
    }),
    new Button("WASD = Movement", 850, 150, 190, 40, function () {
      gameMode = "play"
      buttons = gamebuttons
    }),
  ]
  buttons = menuButtons
  ellipseMode(CORNER)
  noStroke();
  players = []
  cities = [];
  cellSize = floor(min(width / mapSize, height / mapSize));
  m = new Map(mapSize, cellSize)
  m.initiateMap()
  p = new Player(2, 2)
  m.reveal(2, 2)
}

function mousePressed() {
  for (b of buttons) { b.clicked() }
}

function draw() {
  switch (gameMode) {
    case "menu":
      drawMenu()
      break
    case "play":
      drawGame()
      break
  }

}

function drawMenu() {
  background(50)
  for (let b of menuButtons) {
    b.render()
  }
}

function drawGame() {
  if (thisTurn == false && cityIteration <= cities.length) {
    if (keyIsDown(78)) {
      let selectedCity = cities[cityIteration]
      if (selectedCity) {
        if (selectedCity.changeProduction(m.cellArray) == true) {
          choiceMade = true
        }
        selectedCity.progressProduction(m.cellArray)
        cityIteration = cityIteration + 1
      } else if (cities.length == 0) {
        choiceMade = true
      }

      if (cityIteration == (cities.length) && choiceMade == true) {
        thisTurn = true
        cityIteration = 0
        choiceMade = false
      }
    }
  }
  m.draw()
  p.draw()
  for (let b of gameButtons) {
    b.render()
  }
}

function keyPressed(){
  if (thisTurn == true) {
    if (key === "w") {
      if (m.checkTarget(0, -1, p.xValue, p.yValue) == true) {
        p.up()
        thisTurn = false
      }
    }
    if (key === "a") {
      if (m.checkTarget(-1, 0, p.xValue, p.yValue) == true) {
        p.left()
        thisTurn = false
      }
    }
    if (key === "s") {
      if (m.checkTarget(0, 1, p.xValue, p.yValue) == true) {
        p.down()
        thisTurn = false
      }
    }
    if (key === "d") {
      if (m.checkTarget(1, 0, p.xValue, p.yValue) == true) {
        p.right()
        thisTurn = false
      }
    }
    if (key === "b") {
      if (m.currentCellCheck(p.xValue, p.yValue) == true) {
        m.cellOwnership(p.xValue, p.yValue)
        p.settle()
      }
    }
  }
}
