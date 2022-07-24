const id = 'innerHTML';

const code = `
<body>
  <h1>9 esm zagolovok</h1>
</body>

<script>
  
</script>
`;

export const steps = [
  {
    task: "Чтобы изменить текст в документе через &lt;script&gt;, нужно прописать внутри &lt;script&gt; тега |c|document.body.innerHTML = '4to to';|ce|",
    check: "Прописано document.body.innerHTML = '4to nibyd';",
    regexp: /document[.]body[.]innerHTML ?= ?['"][^'"]+['"];/,
  },
  {
    task: "<p>Красавчик! Заголовок h1 должен был пропасть, а вместо него появиться наш новый текст.</p> <p>Далее поробуй вместо '=', а '+=' :) Только не удоляй старое - добавь еще одну строку кода.</p> |c|document.body.innerHTML = '4to to';\ndocument.body.innerHTML += 'dobavleno';|ce|",
    check: "Прописано document.body.innerHTML += 'dobavleno wto-to';",
    regexp: /document[.]body[.]innerHTML ?[+]= ?['"][^'"]+['"];/,
  },
  {
    task: "<p>Хорош :) Текст который после += добавляется, а не перетирает существующий.</p> <p>Допиши еще такую же строку с +=, но с другим текстом.</p>|c|document.body.innerHTML = '4to to';\ndocument.body.innerHTML += 'dobavleno';;\ndocument.body.innerHTML += 'i ewe 4to-o dobavleno';|ce|",
    check: "Прописано document.body.innerHTML += 'любой текст'; ищо раз :)",
    regexp: /(document[.]body[.]innerHTML ?[+]= ?['"][^'"]+['"];\s*){2}/,
  },
];

const skills = ['innerHTML', '+='];

export default {
  code,
  steps,
  skills,
  id,
};
