from collections import deque
from typing import List

class Solution:
    def isCycle(self, V: int, adj: List[List[int]]) -> bool:
        visited = [0] * V
        # DFS
        def cycleDFS(node, parent):
            # Mark as visited
            visited[node] = 1
            
            # Check all of it's neighbors
            for nbr in adj[node]:
                if nbr != parent:
                    if visited[nbr] == 1:
                        return True
                    # If cycle exists later
                    cycleDetected = cycleDFS(nbr, node)
                    if cycleDetected:
                        return True
            
            return False

        # BFS
        def cycleBFS(startNode):
            q = deque()
            q.append((startNode, -1)) # (node, parent)
            visited[startNode] = 1
            while q:
                node, parent = q.popleft()
                # Visit all of the neighbors of node
                for nbr in adj[node]:
                    if nbr != parent:
                        # Check if nbr is already visited
                        if visited[nbr] == 1: return True
                        # Else visit it 
                        q.append((nbr, node))
                        visited[nbr] = 1
            
            return False
        
        # Check for all disconnected components
        for node in range(V):
            if(not visited[node] and cycleDFS(node, -1)):
                return True

        return False
        