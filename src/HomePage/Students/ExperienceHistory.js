export const ExperienceHistory = (state) => {
  const element = document.createElement('article');
  element.className = 'experience-history';

  element.innerHTML = `<h3>Історія досвіду</h3>`;

  const { student } = state;

  fetch(`/experience/${student}/history`)
    .then((r) => r.json())
    .then(history => {
      if (!history) {
        element.innerHTML += `Нема історії`
      }

      for (const category in history) {
        const categoryElement = document.createElement('div');
        categoryElement.innerText = category;
        element.append(categoryElement);
        console.log('category: ', category);
        console.log('history: ', history);

        for (const entry of history[category].entries) {
          const entryElement = document.createElement('div');
          entryElement.className = 'entry-element';
          entryElement.innerHTML = `
            <div class="entry-element-header">
              <div>${(new Date(entry.date)).toDateString()}</div>
              <div>Ot ${entry.submittedBy}</div>
              <div>O4kov: ${entry.points}</div>
            </div>
            <div>Message: ${entry.description}</div>
          `;

          element.append(entryElement);
        }
      }
    });

  return element;
}
