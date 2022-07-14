export const logCodeRun = async ({ code, lesson })  => {
  return fetch(`/code-run`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code,
      lesson,
    }),
  });
};
