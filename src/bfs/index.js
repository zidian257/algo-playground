//             8
//         /      \
//        4       12
//      /  \     /   \
//     2    6   10   14



const BFS = (tree, val) => {
  const q = [tree];

  while (q.length > 0) {
    const curr = q.pop();

    if (curr.val === val) {
      return curr;
    }

    if (curr.left) {
      q.push(curr.left);
    }

    if (curr.right) {
      q.push(curr.right);
    }
  }

  return null
};

module.exports = { BFS }
