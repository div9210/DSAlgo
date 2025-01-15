// class Solution
// {
//     static bool comparator(vector<int> &a, vector<int> &b) {
//         return a[2] < b[2];
//     }
// 	public:
// 	//Function to find sum of weights of edges of the Minimum Spanning Tree.
//     // int spanningTree(int V, vector<vector<int>> adj[])
//     // {
//     //     vector<int> minW(V, INT_MAX);
//     //     vector<bool> mst(V, false);
//     //     vector<int> parent(V, -1);

//     //     // Initial State
//     //     minW[0] = 0;

//     //     while (true) {
//     //         // Pick the smallest from minW which is not in MST
//     //         int src = getMin(minW, mst);
//     //         if (src == -1) break;

//     //         // Put this in mst
//     //         mst[src] = true;

//     //         // Visit all the neighbours that pass the following conditions
//     //         // mst[nbr] == false && W < minW[nbr]
//     //         for (const auto& edge : adj[src]) {
//     //             int nbr = edge[0];
//     //             int w = edge[1];
//     //             if (!mst[nbr] && w < minW[nbr]) {
//     //                 minW[nbr] = w;
//     //                 parent[nbr] = src;
//     //             }
//     //         }
//     //     }

//     //     int totalW = 0;
//     //     for (int i = 0; i < parent.size(); i++) {
//     //         if (parent[i] != -1) {
//     //             totalW += minW[i];
//     //         }
//     //     }

//     //     return totalW;
//     // }

//     // int getMin(const vector<int>& minW, const vector<bool>& mst) {
//     //     int minValue = INT_MAX;
//     //     int index = -1;

//     //     for (int i = 0; i < minW.size(); i++) {
//     //         if (minW[i] < minValue && !mst[i]) {
//     //             minValue = minW[i];
//     //             index = i;
//     //         }
//     //     }

//     //     return index;
//     // }

//     int findParent(vector<int> &parent, int node) {
//         if(parent[node] == node) {
//             return node;
//         }

//         return parent[node] = findParent(parent, parent[node]);
//     }

//     void unionSet(int u, int v, vector<int> &parent, vector<int> &rank) {
//         int uParent = findParent(parent, u);
//         int vParent = findParent(parent, v);

//         if(rank[uParent] > rank[vParent]) {
//             parent[vParent] = uParent;
//             rank[uParent]++;
//         }else {
//             parent[uParent] = vParent;
//             rank[vParent]++;
//         }
//     }

//     // Kruskal Algorithm
//     int spanningTree(int V, vector<vector<int>> adj[]) {
//         vector<int> parent(V, -1);
//         vector<int> rank(V, 0);

//         // Intially every node will be it's own parent
//         for(int i = 0; i < V; i++) {
//             // Mark each node as its own parent
//             parent[i] = i;
//         }

//         // Make a linear data structure that holds all the edges with the weights
//         vector<vector<int>> edges;
//         for(int u = 0; u < V; u++) {
//             // Find all the ways from u
//             for(auto edge : adj[u]) {
//                 int v = edge[0];
//                 int w = edge[1];

//                 edges.push_back({u, v, w});
//             }
//         }

//         // Sort the linear DS edges on the basis of weight
//         sort(edges.begin(), edges.end(), comparator);

//         // Traverse on the edges
//         int totalW = 0;
//         for(auto edge: edges) {
//             int u = edge[0];
//             int v = edge[1];
//             int w = edge[2];

//             int uParent = findParent(parent, u);
//             int vParent = findParent(parent, v);

//             if(uParent == vParent) continue;
//             else {
//                 unionSet(u, v, parent, rank);
//                 totalW += w;
//             }
//         }

//         return totalW;
//     }
// };
