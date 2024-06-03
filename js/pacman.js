class PacMan {
    constructor() {
        this.x = 15
        this.y = 24
        this.dx = 0
        this.dy = 0
    }

    move(e){
        if (e.key == "w") {
            this.dy = -1;
            this.dx = 0;
        } 
        if (e.key == "a") {
            this.dx = -1;
            this.dy = 0;
        }
        if (e.key == "s") {
            this.dy = 1;
            this.dx = 0;
        }
        if (e.key == "d") {
            this.dx = 1;
            this.dy = 0;
        } 
    }

    update(){
        if (!grid.nodes[this.y + this.dy][this.x + this.dx].isWall) {
            this.x += this.dx;
            this.y += this.dy;
        }

        if (this.x === 0) {
            this.x = 29;
        }else if (this.x === 29) {
            this.x = 0;
        }

        ctx.beginPath();
        ctx.rect(16 * (this.x - 1), 16 * (this.y - 1), 16, 16);
        ctx.fillStyle = "#FFFF00";
        ctx.fill();
        ctx.closePath();
    }

//     update() {

//         //portal
//         if (this.dx == -1 && this.x == 0) {
//             this.x = 29
//         } else if (this.dx == 1 && this.x == 29) {
//             this.x = 0
//         }
        
//         // console.log(this.x, this.dx, this.y, this.dy)
//         if (!grid.nodes[this.x + this.dx][this.y + this.dy].isWall) {
//             ctx.beginPath();
//             ctx.rect(16 * (this.x + this.dx/2 - 1), 16 * (this.y + this.dy/2 - 1), 16, 16);
//             ctx.fillStyle = "#FFFF00";
//             ctx.fill();
//             ctx.closePath();
//         } else {
//             this.dx = 0;
//             this.dy = 0;
//         }

//         // if (this.dy == -1 && !grid.nodes[this.y - 1][this.x].isWall || this.dy == 1 && !grid.nodes[this.y + 1][this.x].isWall) {
//         //     this.dy = this.dy
//         //     this.dx = this.dx
//         // } else if (this.dx == -1 && !grid.nodes[this.y][this.x - 1].isWall) {
//         //     this.dy = this.dy
//         //     this.dx = this.dx
//         // } else if (this.dy == 1 && !grid.nodes[this.y + 1][this.x].isWall) {
//         //     this.dy = this.dy
//         //     this.dx = this.dx
//         // } else if (this.dx == 1 && !grid.nodes[this.y][this.x + 1].isWall) {
//         //     this.dy = this.dy
//         //     this.dx = this.dx
//         // }

//         // this.x += this.dx * timePassed * 5
//         // this.y += this.dy * timePassed * 5


//         // if (this.dx == 0) {
//         //     this.x = this.x
//         // }else if (this.dy == 0) {
//         //     this.y = this.y
//         // }

//         // if (this.dx > 0) {
//         //     this.x = Math.floor(this.x)
//         //     if (grid.nodes[this.y][this.x + 1].isWall) {
//         //         this.dx = 0
//         //     }
//         // } else if (this.dx < 0) {
//         //     this.x = Math.ceil(this.x)
//         //     if (grid.nodes[this.y][this.x - 1].isWall) {
//         //         this.dx = 0
//         //     }
//         // } else if (this.dy > 0) {
//         //     this.y = Math.floor(this.y)
//         //     if (grid.nodes[this.y + 1][this.x].isWall) {
//         //         this.dy = 0
//         //     }
//         // } else if (this.dy < 0) {
//         //     this.y = Math.ceil(this.y)
//         //     if (grid.nodes[this.y - 1][this.x].isWall) {
//         //         this.dy = 0
//         //     }
//         // }
//     }


}