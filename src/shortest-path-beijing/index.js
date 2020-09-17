//   You decided to run every night when you see your roomate is more charming than you because he/she works out regularly.
//   Now you have a dictionary of places in Beijing. It's in the form of {location: elevation}.
//   And an array of distances you find on Baidu Map connecting each places.
//   Please find the length of the shortest route on which you can run completely uphill then completely downhill.
//   Assume you live in "Huilongguan".
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

const min = Math.min;

/**
 *
 * @param id
 * @param elevation
 * @param adjs {id, distance}
 * @returns {{elevation: *, adjs: {}, id: *}}
 * @constructor
 */
const Vertex = (id, elevation, adjs = []) => ({ id, elevation, adjs });

const findPath = (
  elevations,
  paths,
  start = 'Huilongguan',
  end = 'Huilongguan'
) => {
  // creat adj table
  // id: {elevation: *, adjs: {}, id: *}
  const adjTable = {};

  let i;
  for (i = 0; i < paths.length; i++) {
    const { name, value } = paths[i];
    const [from, to] = name.split('__');
    if (adjTable[from]) {
      adjTable[from].adjs.push({ to, distance: value });
    } else {
      adjTable[from] = Vertex(from, elevations[from]);
    }

    if (adjTable[to]) {
      adjTable[to].adjs.push({ from, distance: value });
    } else {
      adjTable[to] = Vertex(to, elevations[to]);
    }
  }
  const findEdge = (u, v) => adjTable[u].adjs.find(x => x.to === v);

  // start-subgraph, search for routes
  // to - distance k-v
  const uphillRoutes = {};
  const downhillRoutes = {};
  const startVertex = adjTable[start];

  const findAllPathsUphill = vertex => {
    const stack = [vertex];

    while (stack.length > 0) {
      const { id, elevation, adjs } = stack.pop();
      const isStartVertex = id === vertex.id;

      if (adjs.length > 0) {
        for (let { to, distance } of adjs) {
          if (!to) continue;
          if (adjTable[to].elevation > elevation) {
            if (uphillRoutes[to]) {
              // visited
              uphillRoutes[to] = min(
                uphillRoutes[to],
                distance + uphillRoutes[id]
              );
            } else {
              // not visited yet
              uphillRoutes[to] = isStartVertex
                ? distance
                : distance + uphillRoutes[id];
            }

            stack.push(adjTable[to]);
          }
        }
      }
    }
  };

  const findAllPathsDownhill = vertex => {
    const stack = [vertex];

    while (stack.length > 0) {
      const { id, elevation, adjs } = stack.pop();
      const isEndVertex = id === vertex.id;

      if (adjs.length > 0) {
        for (let { from, distance } of adjs) {
          if (!from) continue;
          if (adjTable[from].elevation > elevation) {
            if (downhillRoutes[from]) {
              // visited
              downhillRoutes[from] = min(
                downhillRoutes[from],
                distance + downhillRoutes[id]
              );
            } else {
              // not visited yet
              downhillRoutes[from] = isEndVertex
                ? distance
                : distance + downhillRoutes[id];
            }

            stack.push(adjTable[from]);
          }
        }
      }
    }
  };

  findAllPathsUphill(startVertex);
  findAllPathsDownhill(startVertex);
  const res = [];

  for (let [upVertex, d1] of Object.entries(uphillRoutes)) {
    for (let [downVertex, d2] of Object.entries(downhillRoutes)) {
      if (upVertex === downVertex) {
        res.push(d1 + d2);
      } else {
        const e = findEdge(upVertex, downVertex);
        if (e) {
          res.push(d1 + d2 + e.distance);
        }
      }
    }
  }

  return min(...res);
};

const s = findPath(elevations, paths);

module.exports = { findPath };
