const { BinaryTree } = require("../Lecture 1");

var zigzagLevelOrder = function (root) {
  let q = [];
  q.push(root);
  q.push(null);
  let l2R = true;
  let level = 0;
  let result = new Map();
  while (q.length > 0) {
    let front = q.shift();
    if (!front) {
      // level completed
      // Check if it was l2R
      let levelAns = result.get(level);
      if (!l2R && levelAns) {
        result.set(level, levelAns.reverse());
      }
      l2R = !l2R;
      level++;
      if (q.length > 0) q.push(null);
    } else {
      if (!result.get(level)) {
        result.set(level, [front.value]);
      } else {
        let prev = result.get(level);
        prev.push(front.value);
        result.set(level, prev);
      }
      if (front.left) q.push(front.left);
      if (front.right) q.push(front.right);
    }
  }

  return [...result.values()];
};

let Tree = new BinaryTree();
Tree.insert(5);
Tree.insert(3);
Tree.insert(1);
Tree.insert(4);
Tree.insert(10);
Tree.insert(7);
Tree.insert(6);

console.log(zigzagLevelOrder(Tree.getRoot()));

var zigzagLevelOrder = function (root) {
  // Level order traversal
  let currentLevel = 0;
  let levelNodesMap = new Map();
  let leftToRight = true;

  let q = [];
  q.push(root);
  q.push(null);

  while (q.length > 0) {
    // Extract front node
    let front = q.shift();

    // If front is null that means level is completed
    if (front == null) {
      // level complete
      if (q.length > 0) q.push(null);

      if (leftToRight == false) {
        // Reverse the array in map with key currentLevel
        let entryForCurrentLevel = levelNodesMap.get(currentLevel);
        levelNodesMap.set(currentLevel, entryForCurrentLevel.reverse());
      }

      currentLevel++;
      leftToRight = !leftToRight;
    } else {
      // Process
      if (!levelNodesMap.has(currentLevel)) {
        // Create an entry for this level
        levelNodesMap.set(currentLevel, [front.data]);
      } else {
        // Entry already exists
        let alreadyExistsEntry = levelNodesMap.get(currentLevel);
        alreadyExistsEntry.push(front.data);
        // Replace
        levelNodesMap.set(currentLevel, alreadyExistsEntry);
      }

      // Push children if exists
      if (front.left) q.push(front.left);
      if (front.right) q.push(front.right);
    }
  }
};
