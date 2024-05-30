class PacMan {
    x;
    y;
    rx;
    ry;
    constructor() {
        this.x = 15
        this.y = 24
        this.rx = this.x
        this.ry = this.y
        this.dx = 0
        this.dy = 0
    }
    move(e){
        console.log(this.x, this.y, "DDDD")
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

        this.rx += this.dx * timePassed * 5
        this.ry += this.dy * timePassed * 5
        console.log(this.x, this.y)

        if (this.dx == 0) {
            this.rx = this.x
        }
        if (this.dy == 0) {
            this.ry = this.y
        }

        if (this.dx > 1) {
            this.x = 29
        } else if (this.dx < -1) {
            this.x = 0
        } else if (this.dx > 0) {
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
            if (grid.nodes[this.y + 1][this.x].isWallg) {
                this.dy = 0
            }
        } else if (this.dy < 0) {
            this.y = Math.ceil(this.ry)
            if (grid.nodes[this.y - 1][this.x].isWall) {
                this.dy = 0
            }
        }

        if (!grid.nodes[this.y][this.x].walkable) {
            console.log("wtf")
        }
    }

    draw(){
        ctx.beginPath();
        ctx.rect(16 * (this.rx - 1), 16 * (this.ry - 1), 16, 16);
        ctx.fillStyle = "#FFFF00";
        ctx.fill();
        ctx.closePath();
    }
}