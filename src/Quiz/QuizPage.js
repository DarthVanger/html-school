const element = document.createElement('div');
element.id = "quiz-page";

export const QuizPage = () => {
  element.innerHTML = `
    <h2>Quiz Time</h2>
    <figure>
      <video autoplay muted loop>
        <source src="/video/snoop/loop/start.mp4" type="video/mp4" />
      </video>
    </figure>
  `;

  
  return element;
};
