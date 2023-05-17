export const getQuestStatus = ({ quest, completions }) => {
  if (!completions?.length) {
    return 'new';
  }

  if (isForgotten(completions)) {
    return 'forgotten';
  }

  if (quest.status) {
    let status = quest.status;
    if (quest.status === 'homework' && isHomeworkDone(completions)) {
      status = 'homework-done';
    }

    return status;
  }

  if (isCompleted(completions)) {
    return 'completed';
  }
}


const isCompleted = (completions) => completions?.length > 0;
  
const isForgotten = (completions) => {
  const cDate = new Date(completions[completions.length - 1].date);
  const now = new Date();
  const forgetTimeMillis = 1000 * 60 * 60 * 24 * 30;
  const diff = now.getTime() - cDate.getTime();
  return diff > forgetTimeMillis;
}

export const getLastCompletion = (completions) => completions?.length ? completions[completions.length - 1] : null;


const isHomeworkDone = (completions) => {
  if (getLastCompletion(completions)) {
    const now = new Date();
    const lastCompletion = getLastCompletion(completions);
    const lastCompletionDate = new Date(lastCompletion.date);
    const diffDays = (now - lastCompletionDate) / 1000 / 60 / 60 / 24;
    if (diffDays <= 3) {
      return true;
    }
  }
  return false
}

export const getCurseDays = (dateString) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const oneMonth =  oneDay * 30;
  const memoryTime = oneMonth;
   
  const date = new Date(dateString);
  const now = new Date();

  const diff = now.getTime() - date.getTime();
  const remaining = oneMonth - diff;
  const days = Math.round(remaining / oneDay); 
  return days;
};
