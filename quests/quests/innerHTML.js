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
    task: "Красавчик! Чтобы добавить текст к существующему - допиши еще одну строку, где будет уже не просто равно, а плюс равно :) document.body.innerHTML += 'dobavleno';",
    check: "Прописано document.body.innerHTML += 'dobavleno wto-to';",
    regexp: /document[.]body[.]innerHTML ?[+]= ?['"][^'"]+['"];/,
  },
];

export default {
  code,
  steps,
};
