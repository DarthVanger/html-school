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

export const getCatacombsState = async ()  => {
  const resp = await fetch(`/catacombs`)
  return resp.json();
};
