export const Results = ({ results, questions, isQuizFailed }) => {
  if (isQuizFailed) {
    return `
      <h3>ПРОВАЛ :( БЕТЕР ЛАК НЕКСТ ТАЙМ БЕЙБИ</h3>
      <h4>Пояснения</h4>
      <figure>
        <video controls height="420">
        <source src="/video/immolate-improved.mp4" type="video/mp4" />
        </video>
        <figcaption>Пояснение что не правЕльнО</figcaption>
      </figure>
    `;
  } else {
    return `
      Success!! Quiz Passed!!!
    `;
  }
};
