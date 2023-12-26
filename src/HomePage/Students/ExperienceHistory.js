export const ExperienceHistory = (state) => {
  const element = document.createElement('article');
  element.className = 'experience-history';

  element.innerHTML = `<h3>Історія досвіду</h3>`;

  const { student } = state;

  fetch(`/experience/${student}/history`)
    .then((r) => r.json())
    .then(async history => {
      if (!history) {
        element.innerHTML += `Нема історії`
      }

      const systemStatsResponse = await fetch(`/experience/system`)
      const systemStats = await systemStatsResponse.json();

      console.log('systemStats: ', systemStats);

      for (const [category, points] of Object.entries(systemStats[student])) {
        const historyEntry = {
          date: new Date(),
          category,
          type: 'banka',
          submittedBy: 'system',
          description: 'за зонятия на сайте - автомат',
          points,
        };

        if (!history[category]) {
          history[category] = {
            entries: []
          }
        }
        history[category].entries.push(historyEntry);
      }


      for (const category in history) {
        const categoryElement = document.createElement('div');
        categoryElement.innerText = category;
        element.append(categoryElement);

        for (const entry of history[category].entries) {
          renderHistoryEntry(entry);
        }

      }

      function renderHistoryEntry(entry) {
        const entryElement = document.createElement('div');
        entryElement.className = 'entry-element';
        entryElement.innerHTML = `
          <div class="entry-element-header">
            <div>${(new Date(entry.date)).toDateString()}</div>
            <div>Type ${entry.type}</div>
            <div>Ot ${entry.submittedBy}</div>
            <div>O4kov: ${entry.points}</div>
          </div>
          <div>Message: ${entry.description}</div>
        `;

        element.append(entryElement);
      }
  });

  return element;
}
