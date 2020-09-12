// You decided to run every night when you see your roomate is more charming than you because he/she works out regularly.
//   Now you have a dictionary of places in Beijing. It's in the form of {location: elevation}. And an array of distances you find on Baidu Map connecting each places.
//   Please find the length of the shortest route on which you can run completely uphill then completely downhill. Assume you live in "Huilongguan".
// elevations = {"Huilongguan": 5, "Chaoyang Park": 25, "National Stadium": 15, "Olympic Park": 20, "Tsinghua University": 10}
// paths = {
// ("Huilongguan", "Chaoyang Park"): 10,
//   ("Huilongguan", "National Stadium"): 8,
//   ("Huilongguan", "Olympic Park"): 15,
//   ("Chaoyang Park", "Olympic Park"): 12,
//   ("National Stadium", "Tsinghua University"): 10,
//   ("Olympic Park", "Tsinghua University"): 5,
//   ("Olympic Park", "Huilongguan"): 17,
//   ("Tsinghua University", "Huilongguan"): 10
// }
// For this set of data, the shortest valid path would be
// "Huilongguan" -> "National Stadium" -> "Tsinghua University" -> "Huilongguan", with a distance of 28.

// elevation diction
const elevations = {
  Huilongguan: 5,
  'Chaoyang Park': 25,
  'National Stadium': 15,
  'Olympic Park': 20,
  'Tsinghua University': 10
};

const paths = [
  { name: 'Huilongguan__Chaoyang Park', value: 10 },
  { name: 'Huilongguan__National Stadium', value: 8 },
  { name: 'Huilongguan__Olympic Park', value: 15 },
  { name: 'Chaoyang Park__Olympic Park', value: 12 },
  { name: 'National Stadium__Tsinghua University', value: 10 },
  { name: 'Olympic Park__Tsinghua University', value: 5 },
  { name: 'Olympic Park__Huilongguan', value: 17 },
  { name: 'Tsinghua University__Huilongguan', value: 10 }
];

const findShortestPath = (elevations, paths, id = 'Huilongguan') => {
  const Node = (id, distance, adjs) => ({ id, distance, adjs });

  const vertices = Object.keys(elevations);
  const verticesElevs = Object.values(elevations);

  const findElevById = id => elevations[id];
  const findDistanceByIds = (p, q) => {
    const find = paths.find(
      x => x.name === `${p}__${q}` || x.name === `${q}__${p}`
    );

    // no find then it's ignored
    return (find && find.value) || 999;
  };
  let i;

  // construct tree for search
  // tree should be 4 levels
  const res = [];
  const root = Node(id, 0, []);

  for (i = 0; i < vertices.length; i++) {
    if (vertices[i] !== id && verticesElevs[i] > findElevById(id)) {
      root.adjs.push(Node(vertices[i], findDistanceByIds(id, vertices[i]), []));
    }
  }

  for (i = 0; i < vertices.length; i++) {
    for (const levelTwoNode of root.adjs) {
      if (
        vertices[i] !== id &&
        vertices[i] !== levelTwoNode.id &&
        verticesElevs[i] > findElevById(id)
      ) {
        levelTwoNode.adjs.push(
          Node(
            vertices[i],
            levelTwoNode.distance +
              findDistanceByIds(levelTwoNode.id, vertices[i]),
            []
          )
        );

        res.push(
          levelTwoNode.distance +
            findDistanceByIds(levelTwoNode.id, vertices[i]) +
            findDistanceByIds(vertices[i], id)
        );
      }
    }
  }

  return Math.min(...res);
};

const s = findShortestPath(elevations, paths);
console.log('s:', s);
