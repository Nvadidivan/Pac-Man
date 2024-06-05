let lastTime = 0
let timePassed;
let loop = 0
let animation = 0
let animateTime = 0
let timer = 0
function main(time) {
    timePassed = (time - lastTime) / 1000
    lastTime = time
    timePassed = Math.min(timePassed, 0.01)

    if (!game_over) {
        window.requestAnimationFrame(main)
    }
    
    if (animateTime < 0.05) {
        animateTime += timePassed
    } else {
        animateTime = 0
        animation = (animation - 1)**2
    }
  
    if (blinky.mode == 1 || pinky.mode == 1 || inky.mode == 1 || clyde.mode == 1) {
        timer += timePassed

        if (timer >= 10) {
            for (let i = 0; i < ghosts.length; i++) {
                ghosts[i].mode = 0
            }
            timer = 0
        }
    }
  
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].update()
    }
    pacman.update()

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    grid.draw()
  
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].draw()
    }

    ctx.beginPath()
    ctx.fillStyle = "#0000ff"
    ctx.fillRect(10.5 * 16, 12.5 * 16, 7 * 16, 4 * 16)

    pacman.draw()
}