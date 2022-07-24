export const getHomeworkPoints = ({homework, student, skill}) => {
  if (!homework) return 0;

  const studentPoints = homework[student];

  const homeworkEntries = studentPoints?.filter(
    entry => entry.skill === skill.text,
  );

  return homeworkEntries?.length || 0;
};
