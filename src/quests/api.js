export const logQuestComplete = async (questInfo)  => {
  return fetch(`/quest/${questInfo.id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(questInfo),
  });
};
