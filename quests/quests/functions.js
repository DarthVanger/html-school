const id = 'functions';

const code = `
<body>
  <h1>Functions</h1>
</body>

<script>
  
</script>
`;

export const steps = [
  {
    task: "Внутри скрипта прописываем пустую функцию: |c|function xyeta() {}|ce|",
    check: "Прописано function xyeta() {}",
    regexp: /function xyeta[(][)] {[^}]*}/,
  },
  {
    task: "Хорош! :) Код функции пишется внутри фигурных скобок. Давай поставим энтер между фигурными скобками. |c|function xyeta() {\n}|ce|",
    check: "Поставлен энтер внутри { }",
    regexp: /function xyeta[(][)] {[^}\n]*[\n][^}]*}/,
  },
  {
    task: "Наконец пишем код внутри фигурных скобок: |c|document.body.innerHTML += 'Eto 4to-to!';|ce|",
    check: "Прописано document.body.innerHTML += 'Eto 4to-to!';",
    regexp: /function xyeta[(][)] {\s*document[.]body[.]innerHTML\s*[+]=\s*['"][^'"]+['"];\s*}/,
  },
  {
    task: "Отлично! Функция готова! Осталось ее \"Вызвать\". Под функцией, но до закрывающего &lt;/script&gt;, пишем имя функциии, пустые круглые скобки, и точку с запятой: |c|xyeta();|ce|",
    check: "Прописано xyeta(); после функции, внутри &lt;script&gt;",
    regexp: /}\s+xyeta[(][)];[^<]*<\/script>/,
  },
  {
    task: "Ура:) Запускай! Должен текст добавиться в документе.\n Теперь вызовем функцию 3 раза:|c|xyeta();\nxyeta();\nxyeta();",
    check: "Хуета вызвана 3 раза",
    regexp: /}\s+(xyeta[(][)];\s*){3}[^<]*<\/script>/,
  },
  {
    task: "<p>Запускай! Теперь тот же самый текст должен добавиться к документу 3 раза!</p> <p>В этом смысл функций: мы 1 раз прописали код в функции, и можем его выполнить когда и сколько захотим, вызвав функцию.</p> Вызовы эту хуету 4й раз, и засчитывается :)",
    check: "Хуета вызвана 4 раза",
    regexp: /}\s+(xyeta[(][)];\s*){4}\s*<\/script>/,
  },
];

const skills = ['functions'];

export default {
  code,
  steps,
  skills,
  id,
};
