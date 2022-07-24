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
    task: "<p>Что есмЪ парамЕтръ фукцеи проща всего объяснитъ на перемере</p><p>|c|function dobav_4isla_syk(a, b) {\n  return a + b;\n}|ce|</p>",
    check: "Прописана фукцея  dobav_4isla_syk(a, b) { ... }",
    regexp: /function\s+dobav_4isla_syk\(a,\s*b\)\s*{\s*return\s+a\s*\+\s*b;\s*}/
  },
  {
    task: "<p>Каке всигда даный скрипт нихуя не делает. Функция объявлена, но не вызвана. Тьма вызывает Фукцею!<p>|c|function dobav_4isla_syk(a, b) {\n  return a + b;\n}\n\ndocument.body.innerHTML = dobav_4isla_syk(5, 7);|ce|</p>",
    check: "document.body.innerHTML = dobav_4isla_syk(5, 7);",
    regexp: /document\.body\.innerHTML\s*=\s*dobav_4isla_syk\(5,\s*7\);/,
  },
  {
    task: "<p>ЧИто циФровой иУда вывел в документ?</p><p>Невероятно, но суму 5 и 7 ;) Проверь на калькуляторе - не брешу!</p> Попробуй ниже другие числа теперь) |c|document.body.innerHTML = dobav_4isla_syk(5, 7);\ndocument.body.innerHTML = dobav_4isla_syk(13, 666);|ce|",
    check: "document.body.innerHTML = dobav_4isla_syk(13, 666);",
    regexp: /(document\.body\.innerHTML\s*=\s*dobav_4isla_syk\([0-9]+,\s*[0-9]+\);\s+){2}/,
  },
  {
    task: `
<p>Даный коД вызываЕт осоББые ДеМоНическиЕ Силы ☠. Пояснительная Бригада:</p>
<ol>
  <li>
    Мы 'объявили' фукцею dobav_4isla_syk(a, b), которая 'возвращает' (англ. - RETURN) суму a + b.
  </li>
  <li>
    Раньше мы 'вызывали' фукцею с пустыми круглыми скобками. Это выглядело странно. Тепер же, мы вызываем фукцею dobav_4isla_syk(5, 7); -- теперь понятно зочем скобкЕ -- чтобы 'передать' в фукцею ПАРАМЕТРЫ: числа a и b, суму которых мы хотим получить.
  </li>
</ol>
<p>ПонЕл?)</p>
<p>Крч поменяй в фукцеи '+' (ПелюС) на '-' (МИНУС), чИтобы она не добавляла числА, а от отнЕмала.</p>

|c|
function dobav_4isla_syk(a, b) {
  return a - b;
}
|ce|
<p>Какое число отобразиться в документе? 😏
    `,
    check: "function dobav_4isla_syk(a, b) { return a - b }",
    regexp: /function\s+dobav_4isla_syk\(a,\s*b\)\s*{\s*return\s+a\s*-\s*b;\s*}/,
  },
];

const skills = ['functions', 'functionParameters'];

export default {
  code,
  steps,
  skills,
  id,
};
