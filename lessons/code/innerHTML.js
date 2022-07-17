const innerHTML = `
<body>
  <h1>9 esm zagolovok</h1>
</body>

<script>
  document.body.innerHTML += 'A eto prosto text';
</script>
`;

export default innerHTML;

// not used yet :)
export const steps = [
  {
    task: "В ХТМЛ у нас заголовок. Текст ниже добавляется через <script>.",
  },
  {
    task: "Поменять 'A eto prosto text' на 'А это просто хуйчек'",
    check: "В коде присутсвует 'А это просто хуйчек'",
    regexp: /'А это просто хуйчек'/,
  },
];
