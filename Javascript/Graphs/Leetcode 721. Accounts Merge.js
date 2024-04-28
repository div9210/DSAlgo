/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Solved Using - Kruskal's Algorithm
function findParent(node, parent) {
  if (node == parent[node]) return node;

  return (parent[node] = findParent(parent[node], parent));
}

function unionSet(rank, parent, u, v) {
  let uParent = findParent(u, parent);
  let vParent = findParent(v, parent);

  if (uParent !== vParent) {
    if (rank[uParent] > rank[vParent]) {
      parent[vParent] = uParent;
      rank[uParent]++;
    } else {
      parent[uParent] = vParent;
      rank[vParent]++;
    }
  }
}

var accountsMerge = function (accounts) {
  let n = accounts.length;

  let rank = new Array(n).fill(0);
  let parent = new Array(n).fill(-1);

  // Intially every node is it's own parent
  for (let i = 0; i < parent.length; i++) parent[i] = i;

  let emailAccountMap = {};
  for (let i = 0; i < accounts.length; i++) {
    let accountNum = i;
    // Visit all the emails for this accountNum
    for (let j = 1; j < accounts[accountNum].length; j++) {
      let email = accounts[accountNum][j];
      if (emailAccountMap[email] == undefined) {
        // If this is first time for this email
        emailAccountMap[email] = accountNum;
      } else {
        // If code reaches here
        // That means an email which is already present in map
        // trying to enter again from different accountNum
        unionSet(rank, parent, emailAccountMap[email], accountNum);
      }
    }
  }

  // Start merging as per same parents
  let parentEmailMap = {};
  for (let email in emailAccountMap) {
    let account = emailAccountMap[email];
    // Find the root parent for this account
    let rootParent = findParent(account, parent);

    if (!parentEmailMap[rootParent]) parentEmailMap[rootParent] = new Set();
    parentEmailMap[rootParent].add(email);
  }

  let result = [];
  for (let i = 0; i < accounts.length; i++) {
    if (parent[i] == i) {
      let name = accounts[i][0];
      let emailList = Array.from(parentEmailMap[i]).sort();
      result.push([name, ...emailList]);
    }
  }
  return result;
};
