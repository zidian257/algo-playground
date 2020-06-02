const { addTwoNumber, Node, l1, l2 } = require('./index.js')


test('Node constructor works', () => {
  expect(Node(3).val).toBe(3)
})


test('add works', () => {
  expect(addTwoNumber(l1, l2)).toBe(807)
})
