export const logCodeRun = async (codeRunInfo)  => {
  return fetch(`/code-run`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(codeRunInfo),
  });
};

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
