export const addHomework = async ({ skill, student })  => {
  return fetch(`/tree/${skill.text}/${student}`, {
    method: 'POST',
  });
};
