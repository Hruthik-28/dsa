function grisIslandCount(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set();
    let count = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
                count++;
                dfs(r, c);
            }
        }
    }

    function dfs(r, c) {
        const pos = r + "," + c;

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            visited.has(pos) ||
            grid[r][c] === "W"
        ) {
            return;
        }

        visited.add(pos);

        dfs(r - 1, c); // top
        dfs(r + 1, c); // bottom
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    }

    return count;
}

const grid = [
    ["L", "W", "W", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["W", "W", "L", "W", "L"],
    ["L", "L", "W", "L", "L"],
    ["L", "W", "L", "W", "W"],
];

console.log(grisIslandCount(grid)); // 6
