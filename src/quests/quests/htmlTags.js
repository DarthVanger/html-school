const id = 'htmlTags';

const story = `
  <h2>ШО ТАКЭ HTML?</h2>
  <p>HTML = HyperText Markup Language. По русски - "Язык Разметки ГиперТекса, или ЯРГТ".</p>
  <p>Изобретен в 1991 году Сэром Лордом Тимом Бернерсом Ли.</p>
  <p>Сэр Тим Бернерс-Ли хотел чтобы создать свою WWW страничку могла каждая домохозяйка! Поэтому он сделал его простым :)</p>
  <video controls>
    <source type="video/mp4" src="src/quests/Html/tim-berners-lee.mp4" />
  </video>
  <p>По суте ХТМЛ это упрощенный аналог Майкрософт Ворда - в текстовом файле "размечаем" текст - где заголовок, где параграф, и т.д.</p>
  <img src="src/quests/Html/tags.png" />
  <p>Когда мы откроем наш "размеченый" текстовый файл с разрешением ".html" в Браузере, он считает <em>Теги</em> (<code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>), и отобразит зоголовке жирным, параграф с отступом - и тагдале.</p>
  <p>Попробуй, это легко :)</p>
`;

const code = `
`;

export const steps = [
  {
    task: `
Уписуй <pre><code>&lt;h1&gt;Зоголовок&lt;/h1&gt;</code></pre>
`,
    check: "Уписано &lt;h1&gt;Зогловок&lt;/h1&gt;",
    regexp: /<h1>[^<]+<\/h1>/,
  },
];

const skills = ['h1', 'p'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};