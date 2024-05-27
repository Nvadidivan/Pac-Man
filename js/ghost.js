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
        this.x = 3
        this.y = 14
        this.rx = this.x
        this.ry = this.y
        this.move = [0, 0, 0, 0]
        this.target = [0, 0]
    }

    pathfind() {
        if (this.type == 0) {
            if (nb <= 4) {
                nb++
                return [this.x, this.y, 22, 3]
            } else {
                return [this.x, this.y, 7, 20]
            }
            
        }
    }

    update() {
        if (result[this.type][result[this.type].length - 1].length == 2) {
            this.target = result[this.type].pop()
            this.move = result[this.type].pop()
        } else if (this.x == this.move[2] && this.y == this.move[3]) {
            this.move = result[this.type].pop()
        }
        if (Math.abs(this.move[0]) > 1) {
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
        ctx.beginPath();
        ctx.rect(16 * (this.rx - 1), 16 * this.ry, 16, 16);
        ctx.fillStyle = "#00FF00";
        ctx.fill();
        ctx.closePath();

        /*for(let i = 0; i < result[this.type].length ; i++) {
            ctx.beginPath();
            ctx.rect(16 * result[this.type][i][0], 16 * result[this.type][i][1], 16, 16);
            ctx.fillStyle = "#00FF00";
            ctx.fill();
            ctx.closePath();
        } //to see the full path */
    }
}