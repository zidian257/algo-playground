// 这个题目说的是，给你一棵二叉树，你要把它左右镜像翻转，然后返回翻转后的二叉树。
//
// 比如说，给你的二叉树是：
//
//        1
//      /   \
//     2     4
//          / \
//         8  16
//
// 左右翻转后的二叉树是：
//
//         1
//       /   \
//     4     2
//    / \
//  16  8
//
// 我们可以看到，二叉树上所有节点都沿中轴线左右互换了位置。

class TreeNode {
  constructor(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

const tt = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(4, new TreeNode(8), new TreeNode(16))
);

const invertBinTreeRecursive = tree => {
  if (!tree) return tree;

  let tmp = tree.left;
  tree.left = tree.right;
  tree.right = tmp;

  invertBinTreeRecursive(tree.left);
  invertBinTreeRecursive(tree.right);
  return tree;
};

const invertBinTreeQueue = tree => {
  const queue = [];
  queue.push(tree);

  while (queue.length > 0) {
    const root = queue.shift();
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    if (root.left) {
      queue.push(root.left);
    }

    if (root.right) {
      queue.push(root.right);
    }
  }

  return tree;
};


const gg = invertBinTreeQueue(tt)

console.log('tt:', tt);
