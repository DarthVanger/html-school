export const getHomeworkPoints = ({homework, student, skill}) => {
  const studentPoints = homework[student];

  const homeworkEntries = studentPoints?.filter(
    entry => entry.skill === skill.text,
  );

  if (skill.text === '<h1>') {
    console.log('e');
    console.log(homeworkEntries);
  }
  return homeworkEntries?.length || 0;
};
