class Ghost {
    type;
    mode;
    x;
    y;
    rx;
    ry;
    constructor(type) {
        this.type = type
        this.mode = 0
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
        this.target = [0, 0]
        this.last = [this.x, this.y]
    }

    getTarget() {
        if (this.type == 0) {
            if (this.mode == 0) {
                this.target = [pacman.x, pacman.y]
            }else if (this.mode == 1) {
                this.target = [29, 0]
            }
        }else if (this.type == 1) {
            if (this.mode == 0) {
                this.target = [pinky.target[0] - blinky.x * 2, pinky.target[1] - blinky.y]
            }else if (this.mode == 1) {
                this.target = [29, 32]
            }
        }else if (this.type == 2) {
            if (this.mode == 0) {
                this.target = [pacman.x + 2 * pacman.dx, pacman.y + 2 * pacman.dy]
            }else if (this.mode == 1) {
                this.target = [0, 0]
            }
        }else if (this.type == 3) {
            if (this.mode == 0) {
                if (Math.abs(pacman.x - this.x) < 8 || Math.abs(pacman.y - this.y) < 8) {
                    this.target = [0, 32]
                } else {
                    this.target = [pacman.x, pacman.y]
                }
            }else if (this.mode == 1) {
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

        if (this.x == pacman.x && this.y == pacman.y) {
            if (this.mode == 0) {
                game_over = true;
            }else {
                //ghost gets eaten
            }
            
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

        if (this.type == 0) {
            // ctx.beginPath();
            // ctx.rect(16 * (this.x - 1), 16 * (this.y - 1), 16, 16);
            // ctx.strokeStyle = "#fa2402";
            // ctx.lineWidth = 4
            // ctx.stroke();
            // ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#fa2402";
            ctx.fill();
            ctx.closePath(); 
        } else if (this.type == 1) {
            // ctx.beginPath();
            // ctx.rect(16 * (this.x - 1), 16 * (this.y - 1), 16, 16);
            // ctx.strokeStyle = "#02dde1";
            // ctx.lineWidth = 4
            // ctx.stroke();
            // ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#02dde1";
            ctx.fill();
            ctx.closePath(); 
        } else if (this.type == 2) {ctx.beginPath();
            // ctx.rect(16 * (this.x - 1), 16 * (this.y - 1), 16, 16);
            // ctx.strokeStyle = "#fdb3b0";
            // ctx.lineWidth = 4
            // ctx.stroke();
            // ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#fdb3b0";
            ctx.fill();
            ctx.closePath(); 
        } else if (this.type == 3) {
            // ctx.beginPath();
            // ctx.rect(16 * (this.x- 1), 16 * (this.y- 1), 16, 16);
            // ctx.strokeStyle = "#f8a201";
            // ctx.lineWidth = 4
            // ctx.stroke();
            // ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#f8a201";
            ctx.fill();
            ctx.closePath(); 
        }
        
    }
}