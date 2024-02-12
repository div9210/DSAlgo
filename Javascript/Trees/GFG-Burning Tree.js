class Solution {
  constructor() {
    this.time = 0;
  }
  burnTheTree(parentMap, fireStartingNode) {
    let alreadyBurnt = new Map();
    let q = [];
    q.push(fireStartingNode);
    alreadyBurnt.set(fireStartingNode, true);
    while (q.length > 0) {
      // Burn all the nodes in the q together
      let fireSpread = false;
      let qSize = q.length;
      for (let i = 0; i < qSize; i++) {
        let front = q.shift();

        if (front.left && !alreadyBurnt.get(front.left)) {
          // Fire will spread
          fireSpread = true;
          q.push(front.left);
          // Burn the node
          alreadyBurnt.set(front.left, true);
        }

        if (front.right && !alreadyBurnt.get(front.right)) {
          // Fire will spread
          fireSpread = true;
          q.push(front.right);
          // Burn the node
          alreadyBurnt.set(front.right, true);
        }

        if (parentMap.get(front) && !alreadyBurnt.get(parentMap.get(front))) {
          // Fire will spread
          fireSpread = true;
          q.push(parentMap.get(front));
          // Burn the node
          alreadyBurnt.set(parentMap.get(front), true);
        }
      }

      if (fireSpread) {
        this.time++;
      }
    }
  }
  mappingParent(root, target, parentMap) {
    if (root == null) return;
    // Using level order traversal
    let targetNode = null;
    let q = [];
    q.push(root);
    parentMap.set(root, null);
    while (q.length > 0) {
      let front = q.shift();
      if (front.key == target) {
        targetNode = front;
      }

      // Push left and right children (if any)
      if (front.left) {
        q.push(front.left);
        parentMap.set(front.left, front);
      }

      if (front.right) {
        q.push(front.right);
        parentMap.set(front.right, front);
      }
    }

    return targetNode;
  }
  minTime(root, target) {
    // We have to keep a record of every child-parent relation for every node
    let parentMap = new Map();
    let fireStartingNode = this.mappingParent(root, target, parentMap);

    this.burnTheTree(parentMap, fireStartingNode);
    return this.time;
  }
}
