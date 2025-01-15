// class Solution {
// public:
//     int minimumMultiplications(vector<int>& arr, int start, int end) {
//         if (start == end) return 0;

//         // Queue for BFS
//         queue<int> q;
//         q.push(start); // Push the starting state
//         vector<int> visited(100000, -1);
//         visited[start] = 0;

//         while(!q.empty()) {
//             int front = q.front();
//             q.pop();

//             if(front == end) {
//                return visited[front];
//             }

//             for(int i = 0; i < arr.size(); i++) {
//                 int prod = (front * arr[i]) % 100000;
//                 if(visited[prod] == -1) {
//                     q.push(prod);
//                     visited[prod] = visited[front] + 1;
//                 }
//             }

//         }

//         return -1;
//     }
// };
