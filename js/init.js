let blinky;
let inky;
let pinky;
let clyde;
let ghosts = []
let pacman;
let grid;
let canvas;
let context;
let nb = 0
function init() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    canvas.width = "448"
    canvas.height = "496"

    ctx.imageSmoothingEnabled = false

    window.addEventListener("keydown", (e) => {
        pacman.move(e)
    })
    

    grid = new Grid()

    blinky = new Ghost(0, "chase")
    ghosts.push(blinky)
    pinky = new Ghost(1, "chase")
    ghosts.push(pinky)
    inky = new Ghost(2, "chase")
    ghosts.push(inky)
    clyde = new Ghost(3, "chase")
    ghosts.push(clyde)

    pacman = new PacMan()
    

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    grid.draw()

    

    window.requestAnimationFrame(main)
}

window.onload = init