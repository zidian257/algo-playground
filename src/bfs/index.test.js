const Node = (val, left = null, right = null) => ({ val, left, right });

const root = Node(8);

root.left = Node(4, Node(2), Node(6));
root.right = Node(12, Node(10), Node(14));

const { BFS } = require('./index');

describe('BFS', function() {
  test('works', function() {
    expect(BFS(root, 10).val).toBe(10);
    expect(BFS(root, 5)).toBe(null);
  });
});
