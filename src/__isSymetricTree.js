// 这个题目说的是，给你一个二叉树，你要判断它是否沿中轴线对称。
//
// 比如说，给你的二叉树是：
//
//        1
//      /   \
//     2     2
//    / \   / \
//   4   8 8   4
//
// 这棵二叉树是沿中轴线对称的，因此要返回 true。如果我去掉最后这个 4：
//
//      1
//    /   \
//   2     2
// / \   /
// 4   8 8
//
// 就不对称了，这时就要返回 false。

class TreeNode {
  constructor(left, right, val) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

const tree = new TreeNode(new TreeNode());

const isSymmetric = (s, t) => {
  if (s && t) {
    return (
      s.val === t.val &&
      isSymmetricRecursive(s.left, t.right) &&
      isSymmetricRecursive(s.right, t.left)
    );
  }
  return !s && !t;
};

const isSymmetricRecursive = root => {
  if (!root) return true;
  return isSymmetric(root.left, root.right);
};

const isSymmetricNonRecursive = root => {
  if (!root) {
    return true;
  }

  const stack = [];

  stack.push(root.left, root.right);

  while (stack.length > 0) {
    const s = stack.pop();
    const t = stack.pop();

    if (!s && !t) continue;
    if (!s || !t) {
      return false;
    }
    if (s.val !== t.val) {
      return false;
    }
    stack.push(s.left, t.right, s.right, t.left);
  }
  return true;
};

const ret1 = isSymmetricRecursive(tree);
const ret2 = isSymmetricNonRecursive(tree);

console.log("ret1:", ret1);
console.log("ret2:", ret2);
