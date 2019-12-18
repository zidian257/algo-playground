// levelOrderTraversal
// 这个题目说的是，给你一棵二叉树，要求你从根节点到叶子节点一层一层地对其进行访问，
// 对于每一层的节点，则是从左向右进行访问。将访问的结果以二维数组返回。

class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}
const t = new TreeNode(3, new TreeNode(4), new TreeNode(5));

const levelOrderTraversal = t => {
  const ret = [];
  const q = [];

  if (!t) {
    return ret;
  }

  q.push(t);

  let level = [];

  while (q.length > 0) {
    level = [];
    const len = q.length;
    for (let i = 0; i < len; ++i) {
      const tmp = q.shift();
      level.push(tmp.val);
      if (tmp.left) q.push(tmp.left);
      if (tmp.right) q.push(tmp.right);
    }
    ret.push(level);
  }

  return ret;
};

const gg = levelOrderTraversal(t);

console.log('gg:', gg);
