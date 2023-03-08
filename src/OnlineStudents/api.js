export const getOnlineLog = async ()  => {
  const onlineLog = await fetch(`/students/online-log`);
  const json = await onlineLog.json();
  console.debug('Fetched students online log: ', json);
  return json;
};
