// 这个题目说的是，给你一个二叉树，你要返回一个数组，表示二叉树中序遍历的结果。
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
// 你要返回的中序遍历结果是：2, 5, 4, 1, 3

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

const tt = new TreeNode(32, new TreeNode(4, new TreeNode(3)), new TreeNode(5));

const inOrderTraversalRecursive = t => {
  if (!t) {
    return [];
  }

  let left = inOrderTraversalRecursive(t.left);
  const right = inOrderTraversalRecursive(t.right);

  left.push(t.val);
  left = left.concat(right);

  return left;
};

const inOrderTraversal = t => {
  if (!t) return [];
  const ret = [];
  const stack = [];

  let root = t;

  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()
    ret.push(root.val)
    root = root.right
  }

  return ret
};
const gg = inOrderTraversalRecursive(tt);

const ss = inOrderTraversal(tt)

console.log('gg:', gg);

console.log('ss:', ss);
