// 这个题目说的是，给你一个二叉树，你要返回一个数组，表示二叉树后序遍历的结果。
//
// 比如说，给你的二叉树是：
//
//         1
//      /   \
//     2     3
//     \
//      4
//     /
//    5
//
// 你要返回的后序遍历结果是：5, 4, 2, 3, 1

class TreeNode {
  constructor(val, left, right) {
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

// 3 4 5 32
const tt = new TreeNode(32, new TreeNode(4, new TreeNode(3)), new TreeNode(5));

const postOrderTraversalRecursive = root => {
  if (!root) {
    return [];
  }

  let left = postOrderTraversalRecursive(root.left);
  let right = postOrderTraversalRecursive(root.right);

  left = left.concat(right);
  left.push(root.val);
  return left;
};

const gg = postOrderTraversalRecursive(tt);

console.log('gg:', gg);
