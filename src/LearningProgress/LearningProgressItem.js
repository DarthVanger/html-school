
export const LearningProgressItem = ({ item, idx, isLastItem }) => {
  const element = document.createElement('div');
  element.className = 'learning-progress-item';

  const r = 20;
  const cx = r;
  const cy = r;

  element.innerHTML = `
    <div class="item-text">
        УРОКЕ #${idx + 1}: ${item.text} 
    </div>
    ${item.url && `
      <a href="${item.url}">
        СЛАЙДЫ
      </a>
    ` || ''}
    <div class="item-skills">
        СКИЛЫ: ${item.skills.join(', ')} 
    </div>
    ${!isLastItem && `
      <svg>
        <line x1="0" y1="0" x2="0" y2="100" />
      </svg>
    ` || ''}
  `;

  return element;
};

