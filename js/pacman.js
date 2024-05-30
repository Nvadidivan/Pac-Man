class PacMan {
    x;
    y;
    rx;
    ry;
    constructor() {
        this.x = 15
        this.y = 23
        this.rx = this.x
        this.ry = this.y
        this.dx = 0
        this.dy = 0
    }
    move(e){
        if (e.key == "w" && grid.nodes[this.y - 1][this.x].walkable) {
            this.dy = -1;
            this.dx = 0;
        }else if (e.key == "a" && grid.nodes[this.y][this.x - 1].walkable) {
            this.dx = -1;
            this.dy = 0;                
        }else if (e.key == "s" && grid.nodes[this.y + 1][this.x].walkable) {
            this.dy = 1;
            this.dx = 0;
        }else if (e.key == "d" && grid.nodes[this.y][this.x + 1].walkable) {
            this.dx = 1;
            this.dy = 0
        }
    }
    
    check_colllision(){
        
    }

    update() {

        this.rx += this.dx * timePassed
        this.ry += this.dy * timePassed


        if (this.dx == 0) {
            this.rx = Math.round(this.rx)
        }
        if (this.dy == 0) {
            this.ry = Math.round(this.ry)
        }

        if (this.x > 1) {
            this.x = 29
        } else if (this.x < -1) {
            this.x = 0
        } else if (this.x > 0) {
            this.x = Math.floor(this.rx)
        } else if (this.x < 0) {
            this.x = Math.ceil(this.rx)
        } else if (this.y > 0) {
            this.y = Math.floor(this.ry)
        } else if (this.y < 0) {
            this.y = Math.ceil(this.ry)
        }
    }

    draw(){
        ctx.beginPath();
        ctx.rect(16 * (this.rx - 1), 16 * this.ry, 16, 16);
        ctx.fillStyle = "#FFFF00";
        ctx.fill();
        ctx.closePath();
    }
}