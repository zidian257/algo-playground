// 这个题目说的是，给你一棵二叉树，你要判断它是否平衡。这里平衡指的是，对于树上任意一个节点，它的两棵子树的高度差不能大于 1。
//
// 比如说，给你的二叉树是：
//
//         1
//      /   \
//    2     4
//         / \
//        8  16
//
// 它的任意节点的左右子树高度差都不大于 1，因此它是一棵平衡二叉树。
//
// 再比如说，给你的二叉树是：
//
//        1
//      /   \
//     2     4
//            \
//             8
//              \
//              16
//
// 在这棵树中，根节点的左右子树高度差为 2，因此它不是一棵平衡二叉树。

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
//    /     \
//  3       32

const tt = new TreeNode(
  32,
  new TreeNode(4, new TreeNode(3)),
  new TreeNode(5, null, new TreeNode(32))
);

const getTreeHeight = t => {
  if (!t) return 0;
  const left = getTreeHeight(t.left);
  const right = getTreeHeight(t.right);

  return Math.max(left, right) + 1;
};

const isBinTreeBalanceTopDown = t => {
  if (!t) return true;

  return (
    Math.abs(getTreeHeight(t.left) - getTreeHeight(t.right)) <= 1 &&
    isBinTreeBalanceTopDown(t.left) &&
    isBinTreeBalanceTopDown(t.right)
  );
};

const getHeightAndCheck = t => {
  if (!t) return 0;
  const left = getHeightAndCheck(t.left);
  if (left === -1) return -1;

  const right = getHeightAndCheck(t.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
};

const isBinTreeBalanceBtmUp = t => {
  if (!t) return true;

  return getHeightAndCheck(t) !== -1;
};

const gg = isBinTreeBalanceTopDown(tt) === isBinTreeBalanceBtmUp(tt);

console.log('gg:', gg);
