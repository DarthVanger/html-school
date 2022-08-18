const id = 'variables';

const code = `
<body>
  <h1>Variables</h1>
</body>

<script>
  
</script>
`;

export const steps = [
  {
    task: "<p>Переменная это по сути просто 'коробочка', в которой мы можем хранить данные: числа, текст, и т.д. По факту мы просто записываем данные в оперативную память, для дальнейшего использования.</p><p>Пропиши внутри скрипта |c|var x = 10;|ce|</p>",
    check: "Прописано var x = 10;",
    regexp: /var x = 10;/,
  },
  {
    task: "<p>Пока что ничего не происходит: мы сохранили число 10, но никак его не используем.</p><p>Давай впишем это число в документ, используя нашу переменную |c|var x = 10;\ndocument.body.innerHTML += x;|ce|</p>",
    check: "Прописано document.body.innerHTML += x;",
    regexp: /document.body.innerHTML [+]= x;/,
  },
  {
    task: "<p>Десяточка появилась в документе :)</p><p>Теперь ниже перезапишем наш x. В этот раз 'var' не надо: его мы используем только для 'обьявления' переменной. Дальнейшая перезапись делается без 'var', просто через '=' |c|var x = 10;\ndocument.body.innerHTML += x;\nx = 20;|ce|</p>",
    check: "Прописано x = 20;",
    regexp: /x = 20;/,
  },
  {
    task: "<p>В документе по прежнему выводится 10. Это потому что мы перезаписали x в 20 уже после того как зафигачили его в документ.</p><p>Чтобы в документе появилось 20, нужно еще раз записать в документ x, после того как мы переназначили его на 20. |c|var x = 10;\ndocument.body.innerHTML += x;\nx = 20;\ndocument.body.innerHTML += x;|ce|</p>",
    check: "Прописано document.body.innerHTML += x, после x = 20;",
    regexp: /x = 20;\s+document.body.innerHTML [+]= x;/,
  },
  {
    task: "<p>В документ вывелось '1020': сначала х был 10, поэтому добавлися текст '10', далее х стал 20, и добавился еще текст '20'.</p><p>Теперь давай х уже не будем трогать, а просто еще раз в документ его выведем. Т.е. будет в конце 2 раза подряд 'document.body.innerHTML += x;'. Что выведется в документ по итогу?)|c|[...]\nx = 20;\ndocument.body.innerHTML += x;\ndocument.body.innerHTML += x;|ce|</p>",
    check: "2 раза прописано document.body.innerHTML += x, после x = 20;",
    regexp: /x = 20;(\s+document.body.innerHTML [+]= x;){2}/,
  },
];

const skills = ['variables'];

export default {
  code,
  steps,
  skills,
  id,
  status: 'homework',
};
