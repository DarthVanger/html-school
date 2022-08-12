import { getQuestSkills } from '../quests/quests/quests.js';

export const getSkillLevel = (props) => {
  const {lecturePoints, questPoints, student, skill} = props;
  console.debug('getSkillLevel. Props: ', props);
  const points = getLecturePoints(props) + getQuestPoints(props);


  console.debug('getSkillLevel. Return: ', points);
  return points;

};

const getCompletedQuests = (props) => {
  const { questPoints, student, skill } = props;
  const questsBySkill = [];
  const completedQuests = questPoints[student];
  if (!completedQuests) return questsBySkill;

  for (let q of completedQuests) {
    const skills = getQuestSkills(q.id);
    if (skills.includes(skill.id)) {
      questsBySkill.push(q);
    }
  }

  return questsBySkill;
};

export const getQuestPoints = (props) => {
  console.debug('getQuestPoints. Props: ', props);
  const {lecturePoints, student, skill} = props;
  const completedQuests = getCompletedQuests(props);

  const points = completedQuests.length;
  console.debug('getQuestPoints. Points: ', points);

  return points;
};

export const getLecturePoints = (props) => {
  const {lecturePoints, student, skill} = props;

  console.debug('getLecturePoints. Props: ', props);
  const points = lecturePoints[student][skill.id] || 0;

  return points;
};
