const code = `
<body>
  <h1>9 esm zagolovok</h1>
</body>

<script>
  
</script>
`;


// not used yet :)
export const steps = [
  {
    task: "Чтобы изменить текст в документе через &lt;script&gt;, нужно прописать |c|document.body.innerHTML = '4to to';|ce|",
    check: "Прописано document.body.innerHTML = '4to nibyd';",
    regexp: /document[.]body[.]innerHTML ?= ?['"][^'"]+['"];/,
  },
  {
    task: "Красавчик! А теперь поробуй не '=', а '+=' :) Только не удоляй старое - добавь еще одну строку кода. |c|document.body.innerHTML += 'dobavleno';|ce|",
    check: "Прописано document.body.innerHTML += 'dobavleno wto-to';",
    regexp: /document[.]body[.]innerHTML ?[+]= ?['"][^'"]+['"];/,
  },
];

const skills = ['innerHTML', '+='];

export default {
  code,
  steps,
  skills,
};
