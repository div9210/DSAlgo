class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n
        
        def bfs(i, j):
            q = deque()
            q.append((i, j))
            grid[i][j] = "0"

            while q:
                x, y = q.popleft()

                for dx, dy in dirs:
                    newx = x + dx
                    newy = y + dy

                    if isValid(newx, newy) and grid[newx][newy] == "1":
                        q.append((newx, newy))
                        grid[newx][newy] = "0"

                
        def dfs(x, y):
            # Mark visited to avoid re-calling
            # If calling on land cells, only
            # turning this cell to water cell also ensures no re-calling
            grid[x][y] = "0"

            for dx, dy in dirs:
                newx = x + dx
                newy = y + dy
                
                if isValid(newx, newy) and grid[newx][newy] == "1":
                    dfs(newx, newy)

        islands = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    dfs(i, j)
                    islands += 1
        
        return islands