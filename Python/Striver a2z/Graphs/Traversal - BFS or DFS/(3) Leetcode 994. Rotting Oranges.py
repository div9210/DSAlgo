class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # Look for an rotten orange
        # and start bfs
        m, n = len(grid), len(grid[0])
        minMinutes = 0
        q = deque()

        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 2:
                    q.append((i, j, 0))

        while q:
            # pick the rotten orange coordinates
            r, c, minutes = q.popleft()
            minMinutes = max(minMinutes, minutes)
            # left
            if isValid(r - 1, c) and grid[r - 1][c] == 1:
                grid[r - 1][c] = 2
                q.append((r - 1, c, minutes + 1))

            # right
            if isValid(r + 1, c) and grid[r + 1][c] == 1:
                grid[r + 1][c] = 2
                q.append((r + 1, c, minutes + 1))

            # up
            if isValid(r, c - 1) and grid[r][c - 1] == 1:
                grid[r][c - 1] = 2
                q.append((r, c - 1, minutes + 1))

            # down
            if isValid(r, c + 1) and grid[r][c + 1] == 1:
                grid[r][c + 1] = 2
                q.append((r, c + 1, minutes + 1))

        
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    return -1

        return minMinutes

# Time Complexity: O(M*N) -> We are traversing the grid once
# Space Complexity: O(M*N) -> In worst case, all oranges are rotten and we are adding all oranges to the queue. 
# So, space complexity is O(M*N) in worst case.