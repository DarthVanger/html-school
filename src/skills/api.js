export const getQuestsPoints = async ({ skill, student })  => {
  return fetch(`/points/quests/${skill.text}/${student}`);
};
