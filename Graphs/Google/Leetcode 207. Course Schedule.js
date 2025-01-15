function canFinish(numCourses, prerequisites) {
    // So I am going to solve this by topological ordering
    // Topological ordering is done by two approaches
    // 1. DFS
    // 2. BFS (Kahn's Algorithm)
    // I will cover both here

    // In order to work with topological ordering
    // you have to have the adjList but we have the edges
    // So Forming the adjList
    let adjList = {}; // Unordered Map
    for (let edge of prerequisites) {
        let [course, pre] = edge;
        // We finish courses in a pre --> course fashion
        if (!adjList[pre]) adjList[pre] = [];
        adjList[pre].push(course);
    }

    // Now we have the adjList so we can solve it by DFS
    let visited = Array(numCourses).fill(false);
    let recursionStack = Array(numCourses).fill(false);
    let ordering = [];

    // Since we can have multiple individual components in a graph
    // We have to take every one into account individually
    for (let course = 0; course < numCourses; course++) {
        if (!visited[course]) {
            let isCycle = topological(course); // with the cycle check
            if (isCycle) return false;
        }
    }

    return ordering.length === numCourses;

    function topological(course) {
        // Mark the course as visited and add it in the recursion stack
        visited[course] = true;
        recursionStack[course] = true;

        // Visit all the unvisited neighbours in the adjList
        if (adjList[course]) {
            for (let nbr of adjList[course]) {
                if (!visited[nbr]) {
                    // Cycle not present here but can exists ahead
                    let checkFurther = topological(nbr);
                    if (checkFurther) return true;
                } else if (visited[nbr] && recursionStack[nbr]) {
                    return true; // Cycle present
                }
            }
        }

        // While backtracking
        ordering.push(course);
        // remove from recursionStack
        recursionStack[course] = false;
        return false; // Code successfully reached here that means no problems arrived
        // Hence no cycle
    }
}

function canFinish(numCourses, prerequisites) {
    let adjList = {}; // Unordered Map
    for (let edge of prerequisites) {
        let [course, pre] = edge;
        // We finish courses in a pre --> course fashion
        if (!adjList[pre]) adjList[pre] = [];
        adjList[pre].push(course);
    }

    let topologicalOrdering = topologicalBFS(numCourses, adjList);
    return topologicalOrdering.length == numCourses;

    // KAHN's Algorithm
    function topologicalBFS(nodes, adjList) {
        let indegreeMap = {}; // Unordered Map
        // Store values in indegreeMap
        for (let key in adjList) {
            for (let nbr of adjList[key]) {
                if (!indegreeMap[nbr]) indegreeMap[nbr] = 0;
                indegreeMap[nbr]++;
            }
        }

        // All the nodes that has 0 indegree can be called the most independent ones
        // Check for all the nodes and push in queue if it's independent i.e indegree 0\
        let independentNodesQueue = [];
        for (let node = 0; node < nodes; node++) {
            // Check for a indegree 0
            if (!indegreeMap[node]) {
                independentNodesQueue.push(node);
            }
        }

        // Now all of the independent nodes are in queue, so we can do BFS and store the ordering
        let ordering = [];
        while (independentNodesQueue.length > 0) {
            let front = independentNodesQueue.shift();
            ordering.push(front);

            // Since front is picked out from the queue
            // We can say front is dead
            // So for all the neighbours of this front
            // there will be 1 less indegree from here on since front died
            if (adjList[front]) {
                for (let nbr of adjList[front]) {
                    indegreeMap[nbr]--;

                    // If in this process, a node gets free of all of it's indegrees
                    // That means that node has become independent now
                    // If yes send that node in queue
                    if (indegreeMap[nbr] == 0) {
                        independentNodesQueue.push(nbr);
                    }
                }
            }
        }

        return ordering;
    }
}