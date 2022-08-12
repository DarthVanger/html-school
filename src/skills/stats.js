export const getSkillLevel = (props) => {
  const {lecturePoints, questPoints, student, skill} = props;
  console.debug('getSkillLevel. Props: ', props);
  const points = getLecturePoints(props);

  console.debug('getSkillLevel. Return: ', points);
  return points;

};

export const getLecturePoints = (props) => {
  const {lecturePoints, student, skill} = props;

  console.debug('getLecturePoints. Props: ', props);
  const points = lecturePoints[student][skill.id];

  return points;
};
