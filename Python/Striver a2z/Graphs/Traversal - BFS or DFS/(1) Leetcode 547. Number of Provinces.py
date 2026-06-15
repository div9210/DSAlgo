class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        isVisited = [False] * n
        provinces = 0

        
        def dfs(node: int):
            # Mark node as visited
            isVisited[node] = True

            # Check all neighbors -> if connection exists and
            # nbrNode is not already visited
            for nbrNode in range(0, len(isConnected)):
                if(isConnected[node][nbrNode] and not isVisited[nbrNode]):
                    dfs(nbrNode)

        for node in range(0, len(isVisited)):
            if not isVisited[node]:
                dfs(node)
                provinces += 1
        
        return provinces

# Time Complexity: O(N^2) -> We are traversing the adjacency matrix once
# Space Complexity: O(N) -> isVisited array of size N and recursive stack space of