// 把一个图的边整理成树状结构

const edges = [
  { parentId: null, id: 'a' },
  { parentId: 'a', id: 'b' },
  { parentId: 'b', id: 'c' }
];

const vertices = new Map();

for (let i = 0; i < edges.length; i++) {
  vertices.set(edges[i].id, {
    parent: edges[i].parentId,
    id: edges[i].id,
    children: []
  });
}

for (let i = 0; i < edges.length; i++) {
  if (edges[i].parentId) {
    const child = vertices.get(edges[i].id);
    vertices.get(edges[i].parentId).children.push(child);
  }
}

const ret = [...vertices.values()].filter(i => !i.parent);

console.log('ret:', ret);
