let lastTime = 0
let timePassed;
let loop = 0
function main(time) {
    timePassed = (time - lastTime) / 1000
    lastTime = time
    timePassed = Math.min(timePassed, 0.1)

    window.requestAnimationFrame(main)
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    grid.draw()
  
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].draw()
        ghosts[i].update()
    }
  
    pacman.draw()
    pacman.update()
}