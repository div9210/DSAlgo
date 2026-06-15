class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        m, n = len(image), len(image[0])
        startColor = image[sr][sc]
        if startColor == color:
            return image

        # UP RIGHT DOWN LEFT
        dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        def isValid(x, y):
            return x >= 0 and x < m and y >= 0 and y < n

        def dfsFlood(x, y):
            # Color it
            image[x][y] = color

            # Visit neighbors under valid boundary
            for dx, dy in dirs:
                newx = x + dx
                newy = y + dy
                if isValid(newx, newy) and image[newx][newy] == startColor:
                    dfsFlood(newx, newy)

        dfsFlood(sr, sc)
        return image


# Time Complexity: O(N*M) -> We are traversing the grid once
# Space Complexity: O(N*M) -> Recursive stack space in worst case when all pixels are of the same color and we are coloring all pixels. 
# So, space complexity is O(N*M) in worst case.