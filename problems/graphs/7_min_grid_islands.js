function minIslandSize(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set();
    let min = Infinity;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
                const size = dfs(r, c);
                if (size < min) {
                    min = size;
                }
            }
        }
    }

    function dfs(r, c) {
        const pos = r + "," + c;
        let size = 1;

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            visited.has(pos) ||
            grid[r][c] === "W"
        ) {
            return 0;
        }

        visited.add(pos);

        size = size + dfs(r - 1, c); // top
        size = size + dfs(r + 1, c); // bottom
        size = size + dfs(r, c - 1); // left
        size = size + dfs(r, c + 1); // right

        return size;
    }

    return min;
}

const grid = [
    ["L", "W", "W", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["W", "W", "L", "W", "L"],
    ["L", "L", "W", "L", "L"],
    ["L", "W", "L", "W", "W"],
];

console.log(minIslandSize(grid)); // 1
