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
        console.log(this.type)
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
        this.move = [0, 0, 0, 0]
        this.target = [0, 0]
    }

    test() {
        let x = Math.trunc(Math.random() * 28) + 2
        let y = Math.trunc(Math.random() * 29) + 2
        while (true) {
            if (grid.nodes[y][x].walkable) {
                break
            } else {
                x = Math.trunc(Math.random() * 28) + 2
                y = Math.trunc(Math.random() * 29) + 2
            }
        }
        result[this.type] = movement(aStar(this.x, this.y, x, y))
    }

    pathfind() {
        result[this.type] = movement(aStar(this.x, this.y, this.target[0], this.target[1]))
    }

    update() {
        if (result[this.type].length > 0 && result[this.type][result[this.type].length - 1].length == 2) {
            this.target = result[this.type].pop()
            this.move = result[this.type].pop()
        } else if (this.x == this.move[2] && this.y == this.move[3]) {
            this.move = result[this.type].pop()
            grid.block(this.x, this.y, this.type)
        }

        if (this.x == this.target[0] && this.y == this.target[1]) {
            this.move = [0, 0, 0, 0]
            this.test()
            return
        } else if (Math.abs(this.move[0]) > 1) {
            this.rx += this.move[0]
        } else {
            this.rx += this.move[0] * timePassed * 4
            this.ry += this.move[1] * timePassed * 4
        }

        

        if (this.move[0] == 0) {
            this.rx = Math.round(this.rx)
        }
        if (this.move[1] == 0) {
            this.ry = Math.round(this.ry)
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


    }
       

    draw() {

        if (this.type == 0) {
            ctx.beginPath();
            ctx.rect(16 * (this.target[0] - 1), 16 * (this.target[1] - 1), 16, 16);
            ctx.strokeStyle = "#fa2402";
            ctx.lineWidth = 4
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#fa2402";
            ctx.fill();
            ctx.closePath(); 
        } else if (this.type == 1) {
            ctx.beginPath();
            ctx.rect(16 * (this.target[0] - 1), 16 * (this.target[1] - 1), 16, 16);
            ctx.strokeStyle = "#02dde1";
            ctx.lineWidth = 4
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#02dde1";
            ctx.fill();
            ctx.closePath(); 
        } else if (this.type == 2) {ctx.beginPath();
            ctx.rect(16 * (this.target[0] - 1), 16 * (this.target[1] - 1), 16, 16);
            ctx.strokeStyle = "#fdb3b0";
            ctx.lineWidth = 4
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#fdb3b0";
            ctx.fill();
            ctx.closePath(); 
        } else if (this.type == 3) {
            ctx.beginPath();
            ctx.rect(16 * (this.target[0] - 1), 16 * (this.target[1] - 1), 16, 16);
            ctx.strokeStyle = "#f8a201";
            ctx.lineWidth = 4
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
            ctx.fillStyle = "#f8a201";
            ctx.fill();
            ctx.closePath(); 
        }
        
    }
}