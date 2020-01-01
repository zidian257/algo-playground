// 这个题目说的是，给你一棵二叉树，你要判断它是不是一棵二叉搜索树。
//
// 二叉搜索树的定义是：
//
// 1. 左子树所有节点上的值都小于根节点上的值
// 2. 右子树所有节点上的值都大于根节点上的值
// 3. 左右子树同时也为二叉搜索树
//
// 比如说，给你的二叉树是：
//
//      4
//     / \
//   2   6
//
// 左子树只有一个节点 2，小于 4；右子树也只有一个节点 6，大于 4。因此这是一棵二叉搜索树。
//
// 再比如说，给你的二叉树是：
//
//      4
//     / \
//    2   6
//       / \
//      3   8
//
// 右子树存在一个节点 3，它不大于根节点 4。因此这不是一棵二叉搜索树。

class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}
//        6
//       / \
//     4   7
//    /     \
//  3       32

const tt = new TreeNode(
  6,
  new TreeNode(4, new TreeNode(3)),
  new TreeNode(7, null, new TreeNode(32))
);

const min = tree => {
  while (tree.left) {
    tree = tree.left;
  }
  return tree;
};

const max = tree => {
  while (tree.right) {
    tree = tree.right;
  }
  return tree;
};

const isValidBST = t => {
  if (!t) return true;
  const leftValid = t.left ? max(t.left).val < t.val : true;
  const rightValid = t.right ? min(t.right).val > t.val : true;
  return leftValid && rightValid && isValidBST(t.left) && isValidBST(t.right);
};

const isValidBSTBound = (tree, lower = null, upper = null) => {
  if (!tree) return true;

  if (lower && lower.val >= tree.val) return false;
  if (upper && upper.val <= tree.val) return false;

  return (
    isValidBSTBound(tree.left, lower, tree) &&
    isValidBSTBound(tree.right, tree, upper)
  );
};

const gg = isValidBSTBound(tt);
console.log('gg:', gg);
