class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m, n = len(mat), len(mat[0])

        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n

        # Check later why we are not using visited in this problem
        # visited = [[False for _ in range(n)] for _ in range(m)]

        distance = [[0 for _ in range(n)] for _ in range(m)]
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        # Reverse Engineer : Instead of finding nearest cell having zero
        # We will start from zero and mark each one's distance from it
        virusQueue = deque()
        for i in range(m):
            for j in range(n):
                if mat[i][j] != 0:
                    distance[i][j] = float('inf') # Infinity
                else:
                    virusQueue.append((i, j))
        
        while virusQueue:
            x, y = virusQueue.popleft()

            # Visit all neighbors in all dirs
            for dx, dy in dirs:
                newx = x + dx
                newy = y + dy
                d = 1 + distance[x][y]

                # NOTE : Even if it is visited
                # We can have a better distance for it
                # Thus even if visited, if we do have a better smaller
                # distance of the nbr, we will skip the use of visited
                if isValid(newx, newy) and mat[newx][newy] == 1 and d < distance[newx][newy]:
                    # Update it
                    distance[newx][newy] = d
                    # and put it in queue
                    virusQueue.append((newx, newy))
        
        return distance

# Time Complexity: O(N*M) -> We are traversing the grid once and each cell is put in queue at max once.
# Space Complexity: O(N*M) -> Distance matrix takes O(N*M) space and queue can also take O(N*M) space in worst case when all cells are 1 except one cell which is 0. So, overall space complexity is O(N*M).