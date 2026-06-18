class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n

        # Reverse engineer : Instead of finding the 1s which can reach edge
        # We will find 1s which are at boundary and will try to eliminate those 1s which are in direct contact
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        def dfs(x, y):
            # Turn it to water or anything else (eliminated)
            # If it is at edge of neighbor of edge i.e not an enclave
            grid[x][y] = 2 # Eliminated cell

            # Visit all of the neighbors
            for dx, dy in dirs:
                newx = x + dx
                newy = y + dy
                if isValid(newx, newy) and grid[newx][newy] == 1:
                    dfs(newx, newy)
        
        def bfs(x, y):
            q = deque()
            q.append((x, y))
            grid[x][y] = 2

            while q:
                i, j = q.popleft()

                for dx, dy in dirs:
                    newx = i + dx
                    newy = j + dy
                    if isValid(newx, newy) and grid[newx][newy] == 1:
                        q.append((newx, newy))
                        grid[newx][newy] = 2
        
        # Instead of checking all of the grid
        # Let's try to find 1 at the edges
        # L --> R
        for i in range(m):
            if grid[i][0] == 1:
                bfs(i, 0)

            if grid[i][n-1] == 1:
                bfs(i, n-1)
        
        # U --> D
        for j in range(n):
            if grid[0][j] == 1:
                bfs(0, j)
            
            if grid[m-1][j] == 1:
                bfs(m-1, j)

        # Count the ones which are not eliminated
        enclaves = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    enclaves += 1
        
        return enclaves

# Time Complexity: O(N*M) -> We are traversing the grid once and each cell is put in queue at max once.
# Space Complexity: O(N*M) -> In worst case when all cells are '1', we are putting all cells in queue and also recursive stack space can also go to O(N*M) in worst case. So, overall space complexity is O(N*M).