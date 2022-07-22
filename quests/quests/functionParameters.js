const id = 'functionParameters';

const code = `
<body>
  <h1>Function parameters</h1>
</body>

<script>
  
</script>
`;

export const steps = [
  {
    task: "<p>Что есмЪ парамЕтръ фукцеи проща всего объяснитъ на перемере. Уписуй )</p><p>|c|function потрещи(гнилойБазар) {\n  document.body.innerHTML += гнилойБазар;\n}|ce|</p>",
    check: "Прописана фукцея function потрещи(гнилойБазар) { ... }",
    regexp: /function\s+потрещи\(\s*гнилойБазар\s*\)\s*{\s*document\b.body\.innerHTML\s+[+]=\s+гнилойБазар;\s*}/
  },
  {
    task: "<p>Каке всигда даный скрипт нихуя не делает. Функция объявлена, но не вызвана. Тьма вызывает Фукцею!<p>|c|function потрещи(гнилойБазар) {\n  document.body.innerHTML += гнилойБазар;\n}\n\nпотрещи('Ты шо сука');|ce|</p>",
    check: "потрещи('Ты шо сука');",
    regexp: /потрещи\('Ты шо сука'\);/,
  },
  {
    task: `
<p>Мы вызвали фукцею <code>потрещи</code>, передав в нее <code>гнилойБазар</code>.
<p><code>function потрещи(грилойБазар) { ... }</code> Переводится как "в скобках мне передавайте че спиздануть-то, и я это впиздячу в документ. <code>гнилойБазар</code> называется <em>Параметр</em> фукцеи.</p>
<p>
  Давай еще че-то напечатаем в документ )
</p>
|c|потрещи('Ты шо сука');
потрещи('Охуел?');|ce|
`,
    check: "потрещи('Охуел?');",
    regexp: /потрещи\('Охуел\?'\);/,
  },
];

const skills = ['functions', 'functionParameters'];

export default {
  code,
  steps,
  skills,
  id,
};
