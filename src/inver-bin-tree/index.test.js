const { Node, invertBinTree } = require('./index');
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

const rootCpy = Node(1);
rootCpy.left = Node(2);
rootCpy.right = Node(4, Node(8), Node(16));

const root = Node(1);
root.left = Node(2);
root.right = Node(4, Node(8), Node(16));

const inverted = Node(1);

inverted.left = Node(4, Node(16), Node(8));
inverted.right = Node(2);

test('invert bin tree', () => {
  invertBinTree(root);
  expect(root).toEqual(inverted);
});
