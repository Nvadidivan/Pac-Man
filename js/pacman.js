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
        this.score = 0
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
    
    update() {

        if (this.dx == -1 && this.x == 0) {
            this.rx = 29
        } else if (this.dx == 1 && this.x == 29) {
            this.rx = 0
        } else {
            if (this.ty == -1 && grid.nodes[this.y - 1][this.x].walkable) {
                this.dy = this.ty
                this.dx = this.tx
            } else if (this.tx == -1 && grid.nodes[this.y][this.x - 1].walkable) {
                this.dy = this.ty
                this.dx = this.tx
            } else if (this.ty == 1 && grid.nodes[this.y + 1][this.x].walkable) {
                this.dy = this.ty
                this.dx = this.tx
            } else if (this.tx == 1 && grid.nodes[this.y][this.x + 1].walkable) {
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
            if (!grid.nodes[this.y][this.x + 1].walkable) {
                this.dx = 0
            }
        } else if (this.dx < 0) {
            this.x = Math.ceil(this.rx)
            if (!grid.nodes[this.y][this.x - 1].walkable) {
                this.dx = 0
            }
        } else if (this.dy > 0) {
            this.y = Math.floor(this.ry)
            if (!grid.nodes[this.y + 1][this.x].walkable) {
                this.dy = 0
            }
        } else if (this.dy < 0) {
            this.y = Math.ceil(this.ry)
            if (!grid.nodes[this.y - 1][this.x].walkable) {
                this.dy = 0
            }
        }

        if (grid.nodes[this.y][this.x].hasCoin) {
            grid.nodes[this.y][this.x].hasCoin = false;
            this.score += 10;
        }else if (grid.nodes[this.y][this.x].hasBigCoin) {
            grid.nodes[this.y][this.x].hasBigCoin = false;
            this.score += 50;
            for (let i = 0; i < ghosts.length; i++) {
                ghosts[i].mode = 1
            }
        }

    }

    draw(){
        ctx.font = "18px Ariel"
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(this.score, 10, 20);


        // let img = new Image()
        // img.src = "./assets/pacman.webp"
        // img.style.transform = "scaleX(1)" //flip both vertically and horizontally
        // ctx.translate(0, canvas.height);
        // ctx.scale(1, -1);
        // ctx.drawImage(img, 16 * (this.rx - 1) - 4, 16 * (this.ry - 1) - 4, 24, 24)
        console.log(((Math.floor((this.dx * -1 + 2) * Math.abs(this.dx / 2)))))
        let img = new Image()
        img.src = "./assets/assets.png"
        if (this.dx == 0 && this.dy == 0) {
            ctx.drawImage(img, 2 + (16 * 1), (16) * ((Math.floor((this.tx * -1 + 2) / (Math.abs(this.tx) + 1 ))) + (Math.floor((this.ty + 2) * (Math.abs(this.ty) / 2)))), 16, 16, 16 * (this.rx - 1) - 2, 16 * (this.ry - 1) - 2, 20, 20)
        } else {
            console.log(animation)
            ctx.drawImage(img, 2 + (16 * animation), (16) * ((Math.floor((this.dx * -1 + 2) / (Math.abs(this.dx) + 1 ))) + (Math.floor((this.dy + 2) * (Math.abs(this.dy) / 2)))), 16, 16, 16 * (this.rx - 1) - 2, 16 * (this.ry - 1) - 2, 20, 20)
        }        
       
    }
}