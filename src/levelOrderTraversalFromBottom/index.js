// 这个题目说的是，给你一棵二叉树，要求你从叶子节点到根节点一层一层地对其进行访问，对于每一层的节点，则是从左向右进行访问。将访问的结果以二维数组返回。
//
// 这道题目和二叉树层序遍历的唯一区别是，它是从下向上一层一层去访问的。
//
// 比如说，给你的二叉树是：
//
//        1
//      /   \
//    2     4
//         / \
//        8  16
//
// 它的逆层序遍历结果是：
//
// [
//   [8, 16]，
//  [2, 4],
//    [1],
// ]

class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}
const t = new TreeNode(
  3,
  new TreeNode(4),
  new TreeNode(5, null, new TreeNode(23, new TreeNode(53), new TreeNode(98)))
);

const levelOrderTraversalFromBtm = t => {
  const ret = [];
  const q = [];

  if (!t) {
    return ret;
  }

  q.push(t);

  let level, tmp;
  while (q.length > 0) {
    const len = q.length;
    level = [];
    for (let i = 0; i < len; ++i) {
      tmp = q.shift();
      level.push(tmp.val);
      if (tmp.left) {
        q.push(tmp.left);
      }

      if (tmp.right) {
        q.push(tmp.right);
      }
    }
    ret.unshift(level);
  }

  return ret;
};

const gg = levelOrderTraversalFromBtm(t);
console.log('gg:', gg);
