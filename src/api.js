export const getLevelInfo = async ({ student })  => {
  return fetch(`/tree`)
    .then(r => r.json())
    .then(r => ({
      level: r.levels[student],
      points: r.points[student],
    }));
};

export const getExperience = () => {
  return fetch(`/experience`)
    .then(r => r.json());
};

export const getStudents = () => {
  return fetch(`/students`)
    .then(r => r.json());
}
