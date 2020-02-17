const edges = [
  { from: null, to: 'a' },
  { from: 'a', to: 'b' },
  { from: 'b', to: 'c' }
];

// todo
// 假设边是有序的

const tree = {
  id: 'a',
  child: [
    {
      id: 'b',
      child: [{}]
    }
  ]
};

class N {
  constructor(id) {
    this.id = id;
    this.children = {};
  }
}

const root = new N(edges[0].to);

const [item, index] = findRoot(origin);

const tree = new N(item.id);

const stack = [];

stack.push([item.id]);

let p = tree;
while (stack.length > 0) {
  const curLvl = stack.pop();

  const nextLvl = [];
  while (curLvl.length > 0) {
    const node = curLvl.pop();
    for (let i = 0; i < origin.length; i++) {
      if (origin[i].parentID === node.id) {
        p.children[id] = new N(origin[i].id);
        nextLvl.push(origin[i].id);
      }
    }
  }

  stack.push(nextLvl);
}
