export class Solution {
    /**
     * @param n: the number of courses
     * @param relations: the relationship between all courses
     * @return: ehe minimum number of semesters required to complete all courses
     */
    minimumSemesters(n, relations) {
        let adjList = {};
        for (let r of relations) {
            let [pre, course] = r;

            // Since it is a directed graph
            // Edge u -> v
            if (!adjList[pre]) adjList[pre] = [];
            adjList[pre].push(course);
        }

        let indegreeMap = {};
        for (let key in adjList) {
            for (let nbr of adjList[key]) {
                if (!indegreeMap[nbr]) indegreeMap[nbr] = 0;
                indegreeMap[nbr]++;
            }
        }

        let iNodesQ = [];
        for (let node = 1; node <= n; node++) {
            if (!indegreeMap[node]) iNodesQ.push([node, 1]); // [node, time]
        }

        let maxTime = -1;
        while (iNodesQ.length > 0) {
            let front = iNodesQ.shift();
            let [node, time] = front;

            maxTime = Math.max(time, maxTime);
            // Since the node is plucked out
            // All of it's children has 1 less indegree
            if (adjList[node]) {
                for (let child of adjList[node]) {
                    indegreeMap[child]--;

                    if (indegreeMap[child] == 0) {
                        // child became an independent node (orphan)
                        iNodesQ.push([child, time + 1]);
                    }
                }
            }
        }

        return maxTime;
    }
}