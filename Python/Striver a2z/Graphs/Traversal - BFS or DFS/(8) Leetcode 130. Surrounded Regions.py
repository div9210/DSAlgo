class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m, n = len(board), len(board[0])
        # Since we are marking the traversed node as "S" (safe)
        # visited is not needed, because you only travel if found 'O'
        # visited = [[False for _ in range(n)] for _ in range(m)]
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        def isEdge(x, y):
            return x == 0 or x == m - 1 or y == 0 or y == n - 1

        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n

        def BFS(row, col):
            q = deque()
            q.append((row, col))
            board[row][col] = 'S'

            while q:
                x, y = q.popleft()

                for dx, dy in dirs:
                    newx = x + dx
                    newy = y + dy

                    if isValid(newx, newy) and board[newx][newy] == 'O':
                        # Visit it and mark it Safe
                        q.append((newx, newy))
                        board[newx][newy] = 'S'
        
        def DFS(x, y):
            board[x][y] = 'S'
            
            for dx, dy in dirs:
                newx = x + dx
                newy = y + dy

                if isValid(newx, newy) and board[newx][newy] == 'O':
                    # Visit it and mark it Safe
                    DFS(newx, newy)
        

        for i in range(m):
            for j in range(n):
                if board[i][j] == 'O' and isEdge(i, j):
                    DFS(i, j)
        
        for i in range(m):
            for j in range(n):
                if board[i][j] == 'S':
                    board[i][j] = 'O'
                else:
                    board[i][j] = 'X'
        

# Time Complexity: O(N*M) -> We are traversing the grid once and each cell is put in queue at max once.
# Space Complexity: O(N*M) -> In worst case when all cells are 'O', we are putting all cells in queue and also recursive stack space can also go to O(N*M) in worst case. So, overall space complexity is O(N*M).
