/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let n = accounts.length;
  let map = {}; // Unordered Map
  let ds = new DSU(n);
  for (let accountNum = 0; accountNum < n; accountNum++) {
    let account = accounts[accountNum];
    let emails = account.slice(1);
    for (let email of emails) {
      if (map[email] == undefined) {
        map[email] = accountNum;
      } else {
        ds.union(accountNum, map[email]);
      }
    }
  }

  let rootParentMail = {};
  for (let email in map) {
    let account = map[email];
    let rootParent = ds.findRootParent(account);

    if (rootParentMail[rootParent] == undefined) rootParentMail[rootParent] = new Set();
    rootParentMail[rootParent].add(email);
  }

  let result = [];

  for (let rootP in rootParentMail) {
    let name = accounts[rootP][0];
    let emails = Array.from(rootParentMail[rootP]).sort();
    result.push([name, ...emails]);
  }

  return result;
};

class DSU {
  constructor(n) {
    this.parent = new Array(n).fill().map((e, i) => i);
    this.size = new Array(n).fill(1);
  }

  findRootParent(node) {
    if (node == this.parent[node]) return node;

    return this.parent[node] = this.findRootParent(this.parent[node])
  }

  union(u, v) {
    let uP = this.findRootParent(u);
    let vP = this.findRootParent(v);

    if (uP != vP) {
      if (this.size[uP] > this.size[vP]) {
        this.parent[vP] = uP;
        this.size[uP] += this.size[vP];
      } else {
        this.parent[uP] = vP;
        this.size[vP] += this.size[uP];
      }
    }
  }
}