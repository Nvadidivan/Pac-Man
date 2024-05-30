let result = [[], [], [], []] //arrays already identified because if not, draw() in ghost would break because they didnt exist

function movement(trail) {
    let displacement = []
    for(let i = 0; i < trail.length - 1; i++) {
        let x = trail[i][0] - trail[i+1][0]
        let y = trail[i][1] - trail[i+1][1]

        displacement.push([x, y, trail[i][0], trail[i][1]])
    }
    displacement.push([trail[0][0], trail[0][1]])
    return displacement
}
function aStar(startX, startY, endX, endY) {
    let openList = new Heap(function(nodeA, nodeB) {
        return nodeA.f - nodeB.f;
    }),
    startNode = grid.getNodeAt(startX, startY),
    endNode = grid.getNodeAt(endX, endY),
    heuristic = (x, endX, y, endY) => {
        let normal = abs(x - endX) + abs(y - endY)

        let special = ((28 - x) + (endX - 1)) + (endY - 15) + (15 - y) 
        return Math.min(normal, special)
    },
    weight = 14,
    abs = Math.abs, SQRT2 = Math.SQRT2,
    node, neighbors, neighbor, i, l, x, y, ng;

    for (let m = 0; m < grid.width; m++) {
        for (let n = 0; n < grid.height; n++) {
            cell = grid.nodes[n][m]
            cell.closed = false
            cell.opened = false
            cell.parent = undefined
            cell.g = 0
            cell.f = 0
            cell.h = 0
        }
    }
    openList.push(startNode)
    console.log(startNode)
    startNode.opened = true
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;
        // if reached the end position, construct the path and return it
        if (node.x == endNode.x && node.y == endNode.y) { //revert to node == endNode later
            let path = [[endNode.x, endNode.y]];
            while (node.parent) {
                node = node.parent
                path.push([node.x, node.y]);
            }
            return path
        }

        neighbors = grid.getNeighbors(node)

        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i]
            if (neighbor.closed) {
                continue;
            }
            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);
            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h || weight * heuristic(x, endX, y, endY);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    openList.push(neighbor);
                    neighbor.opened = true;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    openList.updateItem(neighbor);
                }
            }
        }
    }
    
}