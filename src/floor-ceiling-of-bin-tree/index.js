//
// Given an integer k and a binary search tree,
// find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k.
// If either does not exist, then print them as None.
//             8
//         /      \
//        4       12
//      /  \     /   \
//     2    6   10   14

const Node = (val, left = null, right = null) => ({ val, left, right });

const findFloorAndCeiling = (root, k) => {
  let floor = null;
  let ceiling = null;
  let dummy = root;

  while (dummy) {
    if (k < dummy.val) {
      ceiling = dummy.val;
      dummy = dummy.left;
    } else if (k > dummy.val) {
      floor = dummy.val;
      dummy = dummy.right;
    } else {
      floor = ceiling = dummy.val;
      return { floor, ceiling };
    }
  }

  return { floor, ceiling };
};

module.exports = {
  Node,
  findFloorAndCeiling
};
