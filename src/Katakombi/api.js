export const saveCatacombsState = async (payload)  => {
  return fetch(`/catacombs`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
};
