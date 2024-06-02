/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
    // Form an adjList 
    let adjList = {};
    for (let [pre, c] of relations) {
        if (!adjList[pre]) adjList[pre] = [];
        adjList[pre].push(c);
    }

    // Form an indegreeMap for topological sorting (KAHN's Algorithm)
    let indegreeMap = {};
    for (let key in adjList) {
        for (let nbr of adjList[key]) {
            if (!indegreeMap[nbr]) indegreeMap[nbr] = 0;
            indegreeMap[nbr]++;
        }
    }

    // Check for all of the independent nodes /orphan nodes
    let iNodesQ = [];
    for (let i = 1; i <= n; i++) {
        if (!indegreeMap[i]) iNodesQ.push([i, 1]); // [node, time]
    }

    let levelMap = {};
    while (iNodesQ.length > 0) {
        let front = iNodesQ.shift();
        let [node, level] = front;


        if (levelMap[level] == undefined) levelMap[level] = 0;
        levelMap[level] = Math.max(levelMap[level], time[node - 1]); // index is one less

        if (adjList[node]) {
            for (let child of adjList[node]) {
                indegreeMap[child]--;
                if (indegreeMap[child] == 0) {
                    iNodesQ.push([child, level + 1]);
                }
            }
        }
    }

    console.log(levelMap);
};

let n = 3, relations = [[1, 3], [2, 3]], time = [3, 2, 5];

console.log(minimumTime(n, relations, time));