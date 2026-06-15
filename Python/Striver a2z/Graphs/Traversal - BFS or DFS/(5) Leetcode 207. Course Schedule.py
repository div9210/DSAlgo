class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Form an adj
        # Graph : pre-requisite -> course
        adj = [[] for x in range(numCourses)]
        visited = [False] * numCourses
        recursiveStack = [False] * numCourses

        for edge in prerequisites:
            pre, course = edge
            adj[pre].append(course)
        
        def cycleDFS(node):
            visited[node] = True
            recursiveStack[node] = True

            # Check all of it's neighbors
            for nbr in adj[node]:
                if not visited[nbr]:
                    cycleExistsLater = cycleDFS(nbr)
                    if cycleExistsLater: return True
                else:
                    # Check if it also exists in the current path
                    if recursiveStack[nbr]:
                        return True
            # Backtrack
            recursiveStack[node] = False
            return False

        # Check for all connected components
        for node in range(numCourses):
            if(not visited[node] and cycleDFS(node)):
                # Cannot finish, coz cycle exists
                return False

        return True
        
# Time Complexity: O(V + E) -> We are traversing all the vertices and edges once in worst case.
# Space Complexity: O(V + E) -> Adjacency list takes O(V + E) space and recursive stack space can go upto O(V) in worst case. So, overall space complexity is O(V + E).