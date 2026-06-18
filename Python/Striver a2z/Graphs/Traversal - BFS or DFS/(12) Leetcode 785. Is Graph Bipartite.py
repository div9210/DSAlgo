class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n = len(graph)
        nodeColor = [-1] * n
        def bfs(node, color):
            q = deque()
            q.append(node)
            nodeColor[node] = color

            while q:
                n = q.popleft()
                c = nodeColor[n]

                for nbr in graph[n]:
                    if nodeColor[nbr] == -1:
                        q.append(nbr)
                        diffColor = 1 if c == 0 else 0
                        nodeColor[nbr] = diffColor
                    else:
                        # nbr is already colored
                        if nodeColor[nbr] == c: return False
            
            return True

        def dfs(node, color):
            # Color the node
            nodeColor[node] = color

            # Visit all the nbrs
            for nbr in graph[node]:
                if nodeColor[nbr] == -1:
                    # Color it with different color
                    diffColor = 0 if color == 1 else 1
                    # Call DFS
                    # Immediately stop if future returns false
                    futureCall = dfs(nbr, diffColor)
                    if not futureCall: return False
                
                else:
                    # It is already colored
                    # Check if the nbr node is colored 
                    # with same color
                    if nodeColor[nbr] == color: return False
            
            return True

        isGraphBipartite = True
        for node in range(n):
            if nodeColor[node] == -1:
                # Not colored yet
                isGraphBipartite = isGraphBipartite and bfs(node, 0)
            
        
        return isGraphBipartite

# Time Complexity: O(V + E) -> We are traversing all the vertices and edges once in worst case.

# Space Complexity: O(V) -> We are using a nodeColor array to store the color
# of each node and recursive stack space can go upto O(V) in worst case. So, overall space complexity is O(V).