const id = 'shipMotion';

const story = `
  <h2>КОПЕТАН! ЗОПУСКАЙ КОРАБЕЛЬ!</h2>
  <p></p>
`;

const code = `
  <h1>КОпетан, копетан, улыбнитесь</h1>
`;

export const steps = [
  {
    task: `
<p>
  Добавляем кораблек. Уписуем 
</p>
<pre><code>
&lt;img src="/img/ship.gif" /&gt;
</code></pre>
</p>
`,
    check: `Уписано &lt;img src="/img/ship.gif" /&gt;`,
    regexp: new RegExp(`<img src=['"]/img/ship[.]gif['"]\\s*/?>`),
  },
];

const skills = ['img'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
