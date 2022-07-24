export const getCompletedQuests = async ({ student }) => {
  return fetch(`/quests/completed/${student}`)
    .then(r => r.json());
};
