let matrix = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 2, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 2, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 2, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2, 3, 3],
    [3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3],
    [3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
]

class Node {
    constructor(x, y, walkable, isWall, hasCoin, hasBigCoin) {
        this.x = x
        this.y = y
        this.walkable = walkable
        this.isWall = isWall
        this.hasCoin = hasCoin
        this.hasBigCoin = hasBigCoin
        this.g;
        this.f;
        this.wall;

        if (y == 13 && (x == 14 || x == 15)) {
            this.walkable = false
        }
    }
}

class Grid  {
    constructor() {
        this.width = 30
        this.height = 33
        this.nodes = this._buildNodes()
        this.gameOver = false

        this.blocked = [[this.nodes[0][0]], [this.nodes[0][0]], [this.nodes[0][0]], [this.nodes[0][0]], [this.nodes[0][0]]]

        for (let i = 1; i < 32; i++) {
            for (let j = 1; j < 29; j++) {
                if(this.nodes[i][j].isWall) {
                    this.nodes[i][j].wall = this.wall(j, i)
                }
            }
        }
    }

    _buildNodes() {
        let nodes = new Array(33)

        for (let i = 0; i < 33; i++) {
            nodes[i] = new Array(30)
            for (let j = 0; j < 30; j++) {
                let walkable = true
                let hasCoin = false
                let hasBigCoin = false
                if (matrix[i][j] == 3) {
                    walkable = false
                }else if (matrix[i][j] == 1) {
                    hasCoin = true
                }else if (matrix[i][j] == 2){ 
                    hasBigCoin = true
                }

                nodes[i][j] = new Node(j, i, walkable, !walkable, hasCoin, hasBigCoin)
            }
        }
        return nodes
    }

    getNodeAt(x, y) {
        return this.nodes[y][x];
    }

    isWalkableAt(x, y) {
        return this.isInside(x, y) && this.nodes[y][x].walkable;
    }

    isInside(x, y) {
        return (x >= 0 && x < this.width) && (y >= 0 && y < this.height);
    }

    getNeighbors(node) {
        let x = node.x,
            y = node.y,
            neighbors = [],
            s0 = false,
            s1 = false,
            s2 = false,
            s3 = false,
            nodes = this.nodes;
        // ↑
        if (this.isWalkableAt(x, y - 1)) {
            neighbors.push(nodes[y - 1][x]);
        }
        // →
        if (this.isWalkableAt(x + 1, y)) {
            neighbors.push(nodes[y][x + 1]);
        }
        // ↓
        if (this.isWalkableAt(x, y + 1)) {
            neighbors.push(nodes[y + 1][x]);
        }
        // ←
        if (this.isWalkableAt(x - 1, y)) {
            neighbors.push(nodes[y][x - 1]);
        }

        if (x == 0 && y == 15) {
            neighbors.push(nodes[15][29]);
        } else if (x == 29 && y == 15) {
            neighbors.push(nodes[15][0]);
        }
        return neighbors;
    }

    draw() {
        for(let i = 1; i < 32; i++) {
            for (let j = 1; j < 29; j++) {
                if (this.nodes[i][j].isWall) {  
                    for(let m = 0; m < 2; m++) {
                        for (let n = 0; n < 2; n++) {
                            let tempContour = this.nodes[i][j].wall[n][m]

                            if (tempContour[2] == 1) {
                                ctx.beginPath()
                                ctx.strokeStyle = "#0000ff"
                                if(tempContour[0] == 0 && tempContour[1] == 0) {
                                    if (i == 16 && (j == 1 && m == 0) || (j == 28 && m == 1)) {
                                    } else {
                                        ctx.moveTo((16 * (j - 1)) + (8 * m), (16 * (i - 1)) + (8 * n) + 6)
                                        ctx.lineTo((16 * (j - 0.5)) + (8 * m), (16 * (i - 1)) + (8 * n) + 6)
                                    }
                                } else if (tempContour[0] == 1 && tempContour[1] == 1) {
                                    if (i == 14 && (j == 1 && m == 0) || (j == 28 && m == 1)) { 
                                    } else {
                                        ctx.moveTo((16 * (j - 1)) + (8 * m), (16 * (i - 1)) + (8 * n) + 2)
                                        ctx.lineTo((16 * (j - 0.5)) + (8 * m), (16 * (i - 1)) + (8 * n) + 2)
                                    }
                                } else if (tempContour[0] == 1 && tempContour[1] == 0) {
                                    ctx.moveTo((16 * (j - 1)) + (8 * m) + 6, (16 * (i - 1)) + (8 * n))
                                    ctx.lineTo((16 * (j - 1)) + (8 * m) + 6, (16 * (i - 0.5)) + (8 * n))
                                } else if (tempContour[0] == 0 && tempContour[1] == 1) {
                                    ctx.moveTo((16 * (j - 1)) + (8 * m) + 2, (16 * (i - 1)) + (8 * n))
                                    ctx.lineTo((16 * (j - 1)) + (8 * m) + 2, (16 * (i - 0.5)) + (8 * n))
                                    
                                }
                                
                                ctx.lineWidth = 4
                                ctx.closePath()
                                ctx.stroke()
                            } else if (tempContour[2] == 2) {
                                ctx.beginPath()
                                ctx.arc((16 * (j - 1)) + (8 * m) + (8 * tempContour[3]), (16 * (i - 1)) + (8 * n) + (8 * tempContour[4]), 6, tempContour[0]*Math.PI, tempContour[1]*Math.PI)
                                ctx.strokeStyle = "#0000ff"
                                ctx.lineWidth = 4
                                ctx.stroke()
                            }
                            
                        }
                    }
                }else if (this.nodes[i][j].hasCoin) {
                    ctx.fillStyle = "#FFFFFF"
                    ctx.fillRect(16 * (j - 1) + 7, 16 * (i - 1) + 7, 2, 2)
                }else if (this.nodes[i][j].hasBigCoin) {
                    ctx.fillStyle = "#FFFFFF"
                    ctx.fillRect(16 * (j - 1) + 5, 16 * (i - 1) + 5, 6, 6)
                }else {
                    this.gameOver = true;
                }
                
            }
        }
    }

    wall(x, y) {
        let wall = [
            [false, false],
            [false, false]
        ]

        if (!this.nodes[y-1][x-1].isWall) {   
            wall[0][0] = true
        } else if (!this.nodes[y][x-1].isWall || !this.nodes[y-1][x].isWall) {
            wall[0][0] = true
        }
        if (!this.nodes[y-1][x+1].isWall) {
            wall[0][1] = true
        } else if (!this.nodes[y-1][x].isWall || !this.nodes[y][x+1].isWall) {
            wall[0][1] = true
        }
        if (!this.nodes[y+1][x-1].isWall) {
            wall[1][0] = true
        } else if (!this.nodes[y+1][x].isWall || !this.nodes[y][x-1].isWall) {
            wall[1][0] = true
        }
        if(!this.nodes[y+1][x+1].isWall) {
            wall[1][1] = true
        } else if (!this.nodes[y][x+1].isWall || !this.nodes[y+1][x].isWall) {
            wall[1][1] = true
        }
        return this.contour(wall)
    }

    contour(wall) {
        
        let contour = [ //0 is nothing, 1 is rect, 2 is arc
            [[0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0]]
            ]
        if (wall[0][0] && wall[0][1] && wall[1][0] && wall[1][1]) {
        } else if(wall[0][0]) {
            if (wall[0][1]) {
                if (wall[1][0] && !wall[1][1]) {
                    contour[0][0] = [1, -0.5, 2, 1.45, 1.45]
                    contour[0][1] = [0, 0, 1]
                    contour[1][0] = [1, 0, 1]
                    
                } else if (wall[1][1] && !wall[1][0]) {
                    contour[0][0] = [0, 0, 1]
                    contour[0][1] = [-0.5, 0, 2, -0.45, 1.45]
                    contour[1][1] = [0, 1, 1]
                    
                } else if (!wall[1][1] && !wall[1][0]) {
                    contour[0][0] = [0, 0, 1]
                    contour[0][1] = [0, 0, 1]
                    
                }
            } else if (wall[1][0]) {
                if (wall[1][1] && !wall[0][1]) {
                    contour[0][0] = [1, 0, 1]
                    contour[1][0] = [0.5, 1, 2, 1.45, -0.45]
                    contour[1][1] = [1, 1, 1]
                    
                } else if (!wall[1][1] && !wall[0][1]) {
                    contour[0][0] = [1, 0, 1]
                    contour[1][0] = [1, 0, 1]
                    
                }
            } else {
                contour[0][0] = [0, 0.5, 2, 0, 0]
                
            }
        } else if (wall[1][1]) {
            if (wall[0][1]) {
                if (wall[1][0] && !wall[0][0]) {
                    contour[1][1] = [0, 0.5, 2, -0.45, -0.45]
                    contour[0][1] = [0, 1, 1]
                    contour[1][0] = [1, 1, 1]
                    
                } else if (!wall[1][0] && !wall[0][0]) {
                    contour[0][1] = [0, 1, 1]
                    contour[1][1] = [0, 1, 1]
                        
                }
            } else if (wall[1][0]) {
                contour[1][1] = [1, 1, 1]
                contour[1][0] = [1, 1, 1]
                
            } else {
                contour[1][1] = [1, -0.5, 2, 1, 1]
                
            }
        } else if (wall[0][1]) {
            contour[0][1] = [0.5, 1, 2, 1, 0]
            
        } else if (wall[1][0]) {
            contour[1][0] = [-0.5, 0, 2, 0, 1]
            
        }
        return contour
    }

    block(x, y, type) {


        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (!this.blocked[type].isWall) {
                    this.blocked[type].walkable = true
                }
            }
        }

        this.blocked[type] = this.nodes[y][x]

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                this.nodes[y + j][x + i].walkable = false
            }
        }
    }

    // checkGameOver() {
    //     if (this.gameOver == true) {
    //         ctx.font = "36px Ariel"
    //         ctx.fillStyle = "#FFFFFF";
    //         ctx.fillText("GameOver", 150, 150);
    //     }
    // }
}