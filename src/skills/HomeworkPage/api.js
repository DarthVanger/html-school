export const getHomework = async ({ student })  => {
  return fetch(`/homework/${student}`)
    .then(r => r.json())
};

export const addHomework = async ({ student, homework })  => {
  const payload = { homework };
  return fetch(`/homework/${student}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

