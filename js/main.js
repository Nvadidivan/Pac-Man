let lastTime = 0
let timePassed;
let loop = 0
let timer = 0
function main(time) {
    timePassed = (time - lastTime) / 1000
    lastTime = time
    timePassed = Math.min(timePassed, 0.1)

    window.requestAnimationFrame(main)
    
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
    pacman.draw()
}