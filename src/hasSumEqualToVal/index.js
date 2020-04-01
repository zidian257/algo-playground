// 这个题目说的是，给你一棵二叉树和一个整数，你要判断这棵二叉树上是否存在一条从根到叶子节点的路径，这条路径上所有节点中的数字相加等于给你的整数。
//
// 比如说，给你的二叉树是：
//
//       1
//     /   \
//    2     4
//         / \
//        8  16
//
// 给你的整数是 13。在这棵二叉树中存在一条从根到叶子节点的路径 1->4->8，路径上的数字加起来等于 13，于是要返回 true。

class TreeNode {
  constructor(val, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

//        32
//       / \
//     4   5
//    /
//  3

const tree = new TreeNode(
  32,
  new TreeNode(4, new TreeNode(3)),
  new TreeNode(5)
);

const hasSumEqualToValRecursive = (val, root) => {
  if (!root) {
    return false;
  }

  if (root.left === null && root.right === null) {
    return root.val === val;
  }

  return (
    hasSumEqualToValRecursive(val - root.val, root.left) ||
    hasSumEqualToValRecursive(val - root.val, root.right)
  );
};

const hasSumEqualToValIterative = (val, root) => {
  if (!root) {
    return false;
  }

  if (root.left === null && root.right === null && root.val !== val) {
    return false;
  }

  const stack = [];

  // corresponding to node-stack
  const sumStack = [];

  stack.push(root);
  sumStack.push(val);
  let node;
  let ret = false;
  let tmpSum;

  while (stack.length > 0) {
    node = stack.pop();
    tmpSum = sumStack.pop();
    if (node.left === null && node.right === null) {
      // leaf node
      if (node.val === tmpSum) {
        return true;
      }
    }

    if (node.left) {
      stack.push(node.left);
      sumStack.push(tmpSum - node.val);
    }
    if (node.right) {
      stack.push(node.right);
      sumStack.push(tmpSum - node.val);
    }
  }

  return ret;
};

const gg = hasSumEqualToValIterative(32, tree);
console.log('gg:', gg);
