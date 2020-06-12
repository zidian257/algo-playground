//             8
//         /      \
//        4       12
//      /  \     /   \
//     2    6   10   14

const { Node, findFloorAndCeiling } = require('./index');

const root = Node(8);

root.left = Node(4, Node(2), Node(6));
root.right = Node(12, Node(10), Node(14));

test('find floor and ceiling', () => {
  expect(findFloorAndCeiling(root, 5)).toEqual({ floor: 4, ceiling: 6 });
  expect(findFloorAndCeiling(root, 4)).toEqual({ floor: 4, ceiling: 4 });
});
