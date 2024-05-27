let lastTime = 0
let timePassed;

function main(time) {
    timePassed = (time - lastTime) / 1000
    lastTime = time
    timePassed = Math.min(timePassed, 0.1)

    window.requestAnimationFrame(main)
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    grid.draw()
    

    blinky.draw()

    blinky.update()
}