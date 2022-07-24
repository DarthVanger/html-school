export const getLevelInfo = async ({ student })  => {
  return fetch(`/tree`)
    .then(r => r.json())
    .then(r => ({
      level: r.levels[student],
      points: r.points[student],
    }));
};
