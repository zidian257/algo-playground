// 这个题目说的是，给你一棵二叉树，你要找到从根节点到最远叶子节点的深度。
//
// 比如说，给你的二叉树是
//
//      1
//    /   \
//   2     4
//        / \
//       8  16
//
// 这棵树有 3 个叶子节点，分别是 2，8，16。最远的叶子节点是 8 和 16，根节点到 8 或 16 都有 3 个节点，因此最大深度是 3。

class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}
//        3
//       / \
//     4   5
//    /
//  3


const tt = new TreeNode(3, new TreeNode(4, new TreeNode(3)), new TreeNode(5));

const maxDepth = t => {
  if (!t) {
    return 0;
  }

  const q = [];

  q.push(t);
  let len;
  let depth = 0;
  let tmp;

  while (q.length > 0) {
    len = q.length;
    console.log('len:', len);
    depth += 1;
    for (let i = 0; i < len; ++i) {
      tmp = q.shift();
      console.log('q:', q);

      if (tmp) {
        if (tmp.left) {
          q.push(tmp.left);
        }
        if (tmp.right) {
          q.push(tmp.right);
        }
      }
    }
  }

  return depth;
};

const gg = maxDepth(tt);

console.log('gg:', gg);
