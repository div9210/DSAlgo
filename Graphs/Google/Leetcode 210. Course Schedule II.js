/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // We can solve this problem by topological ordering
    // that can be done in 2 ways
    // 1. DFS
    // 2. BFS (KAHN's Algorithm)

    // Topological ordering needs an adjList here we have an edges array
    let adjList = {} // Unordered Map
    for (let edge of prerequisites) {
        let [course, pre] = edge;
        if (!adjList[pre]) adjList[pre] = [];
        adjList[pre].push(course);
    }

    let visited = new Array(numCourses).fill(false);
    let recursionStack = new Array(numCourses).fill(false);
    let ordering = [];

    // Check for all the individual components
    for (let course = 0; course < numCourses; course++) {
        if (!visited[course]) {
            let isCycle = topologicalDFS(course);
            if (isCycle) return [];
        }
    }

    return ordering.reverse();

    function topologicalDFS(course) {
        // Mark visited true and add course in recursionStack
        visited[course] = true;
        recursionStack[course] = true;

        // Visit all the unvisited neighbours
        if (adjList[course]) {
            for (let nbr of adjList[course]) {
                if (!visited[nbr]) {
                    // Check further for cycles
                    let checkFurther = topologicalDFS(nbr);
                    if (checkFurther) return true; // cycle present
                } else if (visited[nbr] && recursionStack[nbr]) {
                    return true;
                }
            }
        }

        // While backtracking
        // Add the course in ordering and remove it from recursionStack
        ordering.push(course);
        recursionStack[course] = false;
        return false; // No cycle present
    }
};

var findOrder = function (numCourses, prerequisites) {
    // Topological ordering needs an adjList here we have an edges array
    let adjList = {} // Unordered Map
    for (let edge of prerequisites) {
        let [course, pre] = edge;
        if (!adjList[pre]) adjList[pre] = [];
        adjList[pre].push(course);
    }

    let ordering = topologicalBFS(numCourses, adjList);
    if(ordering.length != numCourses) {
        return []
    }else {
        return ordering;
    }

    function topologicalBFS(nodes, adjList) {
        // KAHN's Algorithm
        let indegreeMap = {}; // Unordered Map
        // From using every key in adjList we will fill the indegreeMap
        for (let key in adjList) {
            for (let nbr of adjList[key]) {
                if (indegreeMap[nbr] == undefined) indegreeMap[nbr] = 0;
                indegreeMap[nbr]++;
            }
        }

        // All the nodes that have an indegree 0 can be called 
        // "the independent nodes", thus can be pushed to Independent Nodes Queue
        let iNodesQ = [];
        for (let node = 0; node < nodes; node++) {
            if (!indegreeMap[node]) {
                iNodesQ.push(node);
            }
        }

        // Now we have all the independent nodes in the queue
        // So let us start the BFS KAHN's Algorithm
        let ordering = [];
        while(iNodesQ.length > 0) {
            let front = iNodesQ.shift();
            // Since it is an independent node
            ordering.push(front);

            // Since front is plucked out from the iNodesQ
            // We can assume that the front node is dead
            // And all of it's neighbours / children will have 1 less indegree
            if(adjList[front]) {
                for(let nbr of adjList[front]) {
                    indegreeMap[nbr]--;

                    // If in this process any node becomes independent
                    // Then it should also be pushed into the iNodesQ
                    if(indegreeMap[nbr] == 0) {
                        iNodesQ.push(nbr);
                    }
                }
            }
        }

        return ordering;
    }
}


