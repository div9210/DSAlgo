class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m, n = len(isWater), len(isWater[0])
        height = [[0 for _ in range(n)] for _ in range(m)]
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n
        
        # Reverse Engineer : Instead of starting from land and search for water
        # Start from water and simultaneously like rotten oranges
        # Search for the land and update the height
        virusQ = deque()
        for i in range(m):
            for j in range(n):
                # If water
                if isWater[i][j] == 1:
                    virusQ.append((i, j))
                else:
                    height[i][j] = float('inf')
            
        while virusQ:
            x, y = virusQ.popleft()

            # visit all nbrs in all dirs
            for dx, dy in dirs:
                newx = x + dx
                newy = y + dy
                h = 1 + height[x][y]
                
                if isValid(newx, newy) and isWater[newx][newy] == 0 and h < height[newx][newy]:
                    # Update height and put in Q
                    height[newx][newy] = h
                    virusQ.append((newx, newy))

        return height 
        
# Time Complexity: O(N*M) -> We are traversing the grid once and each cell is put in queue at max once.
# Space Complexity: O(N*M) -> Height matrix takes O(N*M) space and queue can also take O(N*M) space in worst case when all cells are land except one cell which is water. So, overall space complexity is O(N*M).