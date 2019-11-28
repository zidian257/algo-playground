// 比如说，给你的二叉树是：
//
//         1
//      /   \
//     2     4
//          / \
//         8  16
//
// 这棵树有 3 个叶子节点，分别是 2，8，16。最近的叶子节点是 2，根节点到 2 共有两个节点，因此最小深度是 2。
//
// 再比如说，给你的二叉树是：
//
//   1
//    \
//     2
//      \
//       4
//
// 这棵树唯一的叶子节点是 4，根节点到它共有 3 个节点，因此最小深度是 3。
class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}
const t = new TreeNode(3, new TreeNode(4));

const minDepth = tree => {
  if (!tree) {
    return 0;
  }

  if (!tree.left && !tree.right) {
    return 1;
  }
  if (tree.left && !tree.right) {
    return 1 + minDepth(tree.left);
  }

  if (tree.right) {
    return 1 + minDepth(tree.right);
  }

  if (tree.left && tree.right) {
    return 1 + Math.min(minDepth(tree.left), minDepth(tree.right));
  }
};

const gg = minDepth(t);

console.log('gg:', gg);
