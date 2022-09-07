import { Answers } from './Answers.js'; 

export const ExpectationReality = () => {
  return `
    <h1>Expectation / Reality Show</h1>
    <h2>H A R V A R D</h2>
    <article>
      <section>
        Насколько будет сложно понять английский в лекциях Гарварда? (от 1 до 10)
        ${Answers({
          tony: {expectation: 4, reality: 5 },
          dimon: {expectation: 9, reality: 7 },
          johnny: {expectation: 6, reality: 5 },
        })}
      </section>
      <section>
        Насколько ты думаешь лекции Гарварда сложные? (от 1 до 10)
        ${Answers({
          tony: {expectation: 5, reality: 6 },
          dimon: {expectation: 8, reality: 6 },
          johnny: {expectation: 5, reality: 5 },
        })}
      </section>
      <section>
        Насколько ты думаешь на лекциях Гарварда хорошо объяняют?) (от 1 до 10)
        ${Answers({
          tony: "8-8",
          dimon: "9-9",
          johnny: "8-9",
          tony: {expectation: 8, reality: 8 },
          dimon: {expectation: 9, reality: 9 },
          johnny: {expectation: 8, reality: 9 },
        })}
      </section>
    </ul>
  `;
}
