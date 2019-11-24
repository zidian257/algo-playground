// 这个题目说的是，给你两个二叉树，你要判断它们是否相同。这里所谓相同，指的是两棵树结构相同，并且相应节点上的数值相等。
//
// 比如说，给你的两棵二叉树都是：
//
//    1          1
//   / \        / \
//  2   4      2   4
//
// 它们的结构相同，相应节点上的值也相等，因此返回 true。 如果另一棵树是：
//
//    1
//   / \
//  2   5
//
// 或
//
//      1
//     /
//    2
//   /
//  4
//
// 两棵树则不相同，返回 false。

class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

const s = new TreeNode(1, new TreeNode(2));
const t = new TreeNode(1, new TreeNode(1));

const isTwoBinaryTreeEqualRecursive = (s, t) => {
  if (!s && !t) {
    return true;
  }
  if (!s || !t) {
    return false;
  }
  return (
    s.val === t.val &&
    isTwoBinaryTreeEqualRecursive(s.left, t.left) &&
    isTwoBinaryTreeEqualRecursive(s.right, t.right)
  );
};

const isTwoBinaryTreeEqual = (s, t) => {
  if (!s && !t) {
    return true;
  }
  if (!s || !t) {
    return false;
  }

  const stack = [];
  let p, q;
  stack.push(s.left, t.left, s.right, t.right);
  while (stack.length > 0) {
    p = stack.pop();
    q = stack.pop();

    if (!p && !q) continue;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    if (p.val === q.val) {
      stack.push(p.left, q.left, p.right, q.right);
    }
  }
  return true;
};

const ret = isTwoBinaryTreeEqual(s, t);
console.log("ret:", ret);
