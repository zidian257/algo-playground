// You are given the root of a binary tree.
// Invert the binary tree in place.
// That is, all left children should become right children,
// and all right children should become left children.
//
//        1
//      /   \
//     2     4
//          / \
//         8  16
//
//
//         1
//       /   \
//     4     2
//    / \
//  16  8

const Node = (val, left = null, right = null) => ({ val, left, right });

// recursive
// const invertBinTree = root => {
//   if (!root) {
//     return;
//   }
//
//   if (!root.left && !root.right) {
//     return;
//   }
//
//   let tmp = root.right;
//   root.right = root.left;
//   root.left = tmp;
//
//   invertBinTree(root.left);
//   invertBinTree(root.right);
// };


// queue
const invertBinTree = root => {
  if (!root) {
    return;
  }

  if (!root.left && !root.right) {
    return;
  }

  const queue = [];

  queue.push(root);

  while (queue.length > 0) {
    const curr = queue.pop();

    if (curr && (curr.left || curr.right)) {
      const temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
      queue.push(curr.left, curr.right);
    }
  }

  return root;
};

module.exports = {
  Node,
  invertBinTree
};
