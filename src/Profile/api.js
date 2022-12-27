export const saveCodeAcademy = async (payload) => {
  return fetch(`/code-academy`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
};
