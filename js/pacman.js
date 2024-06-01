class PacMan {
    x;
    y;
    rx;
    ry;
    constructor() {
        this.x = 15
        this.y = 24
        this.rx = 14.5
        this.ry = 24
        this.dx = 0
        this.dy = 0
        this.tx = 0
        this.ty = 0
    }
    move(e){
        if (e.key == "w") {
            this.ty = -1;
            this.tx = 0;
        }else if (e.key == "a") {
            this.tx = -1;
            this.ty = 0;                
        }else if (e.key == "s") {
            this.ty = 1;
            this.tx = 0;
        }else if (e.key == "d") {
            this.tx = 1;
            this.ty = 0
        }
    }
    
    check_colllision(){
        
    }

    update() {

        if (this.dx == -1 && this.x == 0) {
            this.rx = 29
        } else if (this.dx == 1 && this.x == 29) {
            this.rx = 0
        } else {
            if (this.ty == -1 && !grid.nodes[this.y - 1][this.x].isWall) {
                this.dy = this.ty
                this.dx = this.tx
            } else if (this.tx == -1 && !grid.nodes[this.y][this.x - 1].isWall) {
                this.dy = this.ty
                this.dx = this.tx
            } else if (this.ty == 1 && !grid.nodes[this.y + 1][this.x].isWall) {
                this.dy = this.ty
                this.dx = this.tx
            } else if (this.tx == 1 && !grid.nodes[this.y][this.x + 1].isWall) {
                this.dy = this.ty
                this.dx = this.tx
            }

            this.rx += this.dx * timePassed * 5
            this.ry += this.dy * timePassed * 5
        }


        if (this.dx == 0) {
            this.rx = this.x
        }
        if (this.dy == 0) {
            this.ry = this.y
        }

        if (this.dx > 0) {
            this.x = Math.floor(this.rx)
            if (grid.nodes[this.y][this.x + 1].isWall) {
                this.dx = 0
            }
        } else if (this.dx < 0) {
            this.x = Math.ceil(this.rx)
            if (grid.nodes[this.y][this.x - 1].isWall) {
                this.dx = 0
            }
        } else if (this.dy > 0) {
            this.y = Math.floor(this.ry)
            if (grid.nodes[this.y + 1][this.x].isWall) {
                this.dy = 0
            }
        } else if (this.dy < 0) {
            this.y = Math.ceil(this.ry)
            if (grid.nodes[this.y - 1][this.x].isWall) {
                this.dy = 0
            }
        }
    }

    draw(){
        /*ctx.beginPath();
        ctx.rect(16 * (this.x - 1), 16 * (this.y - 1), 16, 16);
        ctx.strokeStyle = "#ffff00";
        ctx.lineWidth = 4
        ctx.stroke();
        ctx.closePath();*/

        ctx.beginPath();
        ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
        ctx.fillStyle = "#FFFF00";
        ctx.fill();
        ctx.closePath();
    }
}