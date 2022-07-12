export const getHomeworkPoints = ({homework, student, skill}) => {
  const studentPoints = homework[student];

  const homeworkEntries = studentPoints?.filter(
    entry => entry.skill === skill.text,
  );

  return homeworkEntries?.length || 0;
};
