//             8
//         /      \
//        4       12
//      /  \     /   \
//     2    6   10   14

const DFS = (tree, val) => {
  const stack = [tree];

  while (stack.length > 0) {
    const curr = stack.pop();

    if (curr.val === val) {
      return curr;
    }

    if (curr.left) {
      stack.push(curr.left);
    }

    if (curr.right) {
      stack.push(curr.right);
    }
  }

  return null;
};

module.exports = { DFS };
