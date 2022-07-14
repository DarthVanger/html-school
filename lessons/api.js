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
