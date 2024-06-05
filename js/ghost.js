class Ghost {
    type;
    mode;
    x;
    y;
    rx;
    ry;
    move;
    constructor(type, mode) {
        this.type = type
        this.mode = mode
        if (this.type == 0) {
            this.x = 3
            this.y = 15
        } else if (this.type == 1) {
            this.x = 22
            this.y = 14
        } else if (this.type == 2) {
            this.x = 8
            this.y = 2
        } else if (this.type == 3) {
            this.x = 16
            this.y = 30
        }
        this.rx = this.x
        this.ry = this.y
        this.dx = 0
        this.dy = 0
        this.move = [0, 0, 0, 0]
        this.target = [0, 0]
        this.last = [this.x, this.y]
    }

    getTarget() {
        if (this.type == 0) {
            if (this.mode == "chase") {
                this.target = [pacman.x, pacman.y]
            }else if (this.mode == "scatter") {
                this.target = [29, 0]
            }
        }else if (this.type == 2) {
            if (this.mode == "chase") {
                this.target = [pinky.target[0] - blinky.x * 2, pinky.target[1] - blinky.y]
            }else if (this.mode == "scatter") {
                this.target = [29, 32]
            }
        }else if (this.type == 1) {
            if (this.mode == "chase") {
                this.target = [pacman.x + 2 * pacman.dx, pacman.y + 2 * pacman.dy]
            }else if (this.mode == "scatter") {
                this.target = [0, 0]
            }
        }else if (this.type == 3) {
            if (this.mode == "chase") {
                if (Math.abs(pacman.x - clyde.x) < 8 || Math.abs(pacman.y - clyde.y) < 8) {
                    this.target = [0, 32]
                }else {
                    this.target = [pacman.x, pacman.y]
                }
            }else if (this.mode == "scatter") {
                this.target = [0, 32]
            }
        }
    }

    pathfind() {
        let neighbors = grid.getNeighbors(grid.nodes[this.y][this.x])
        if(neighbors.length > 2) {  
            for (let i = 0; i < neighbors.length; i++) {
                let dx = neighbors[i].x - this.x
                let dy = neighbors[i].y - this.y
                if (neighbors[i].x == this.last[0] && neighbors[i].y == this.last[1]) {
                    neighbors[i] = Infinity
                } else {
                    let x = Math.abs(this.target[0] - neighbors[i].x)
                    let y = Math.abs(this.target[1] - neighbors[i].y)
                    let dist = x + y
                    neighbors[i] = [dist, dx, dy]
                }
            }
            neighbors.sort()
            this.dx = neighbors[0][1]
            this.dy = neighbors[0][2]
        } else {
            for (let i = 0; i < neighbors.length; i++) {
                let dx = neighbors[i].x - this.x
                let dy = neighbors[i].y - this.y
                if (neighbors[i].x == this.last[0] && neighbors[i].y == this.last[1]) {
                    neighbors[i] = Infinity
                } else {
                    neighbors[i] = [0, dx, dy]
                }
            }
            neighbors.sort()
            this.dx = neighbors[0][1]
            this.dy = neighbors[0][2]
        }
    }

    update() {
        this.getTarget()
        this.pathfind()

        if (this.dx == 29) {
            this.rx = 29
        } else if (this.dx == -29) {
            this.rx = 0
        } else {
            this.rx += this.dx * timePassed * 4
            this.ry += this.dy * timePassed * 4
        }

        if (this.dx == 0) {
            this.rx = this.x
        }
        if (this.dy == 0) {
            this.ry = this.y
        }
        let x = this.x
        let y = this.y
        if (this.dx > 0) {
            this.x = Math.floor(this.rx)
        } else if (this.dx < 0) {
            this.x = Math.ceil(this.rx)
        } else if (this.dy > 0) {
            this.y = Math.floor(this.ry)
        } else if (this.dy < 0) {
            this.y = Math.ceil(this.ry)
        }

        if (this.x != x || this.y != y) {
            this.last = [x, y]
        }
    }


    /*update_old() {
        if (result[this.type].length > 0 && result[this.type][result[this.type].length - 1].length == 2) {
            this.target = result[this.type].pop()
            this.move = result[this.type].pop()
        } else if (this.x == this.move[2] && this.y == this.move[3]) {
            this.move = result[this.type].pop()
            grid.block(this.x, this.y, this.type)
        }

        if (this.x == this.target[0] && this.y == this.target[1]) {
            this.move = [0, 0, 0, 0]
            console.log(e)
        } else if (Math.abs(this.move[0]) > 1) {
            this.rx += this.move[0]
        } else {
            this.rx += this.move[0] * timePassed * 4
            this.ry += this.move[1] * timePassed * 4
        }


        if (this.move[0] > 1) {
            this.x = 29
        } else if (this.move[0] < -1) {
            this.x = 0
        } else if (this.move[0] > 0) {
            this.x = Math.floor(this.rx)
        } else if (this.move[0] < 0) {
            this.x = Math.ceil(this.rx)
        } else if (this.move[1] > 0) {
            this.y = Math.floor(this.ry)
        } else if (this.move[1] < 0) {
            this.y = Math.ceil(this.ry)
        }
        if (this.move[0] == 0) {
            this.rx = this.x
        }
        if (this.move[1] == 0) {
            this.ry = this.y
        }
    }*/
       
    draw() {
        let img = new Image()
        img.src = "./assets/assets.png"
        if (this.dx == 0 && this.dy == 0) {
        } else {
            ctx.drawImage(img, 2 + (16 * (animation + 2 * ((Math.floor((this.dx * -1 + 2) / (Math.abs(this.dx) + 1 ))) + (Math.floor((this.dy + 2) * (Math.abs(this.dy) / 2)))))), (16) * (this.type + 4), 16, 16, 16 * (this.rx - 1) - 2, 16 * (this.ry - 1) - 2, 20, 20)
        }
    }
}