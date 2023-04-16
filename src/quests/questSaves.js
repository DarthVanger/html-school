const key = questId => 'quest-' + questId;

export const saveQuestCode = (questId, code) => {
  localStorage.setItem(key(questId), code);
}
export const loadQuestCode = (questId) => {
  return localStorage.getItem(key(questId));
}
export const clearQuestCode = (questId) => {
  localStorage.setItem(key(questId), '');
}
