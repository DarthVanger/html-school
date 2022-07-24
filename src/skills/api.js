export const addHomework = async ({ skill, student })  => {
  return fetch(`/tree/${skill.text}/${student}`, {
    method: 'POST',
  });
};

export const getQuestsPoints = async ({ skill, student })  => {
  return fetch(`/points/quests/${skill.text}/${student}`);
};
