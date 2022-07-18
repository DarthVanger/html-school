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
    task: "Чтобы изменить текст в документе через <script>, нужно прописать document.body.innerHTML = '4to to'",
    check: "Прописано document.body.innerHTML = '4to to';",
    regexp: /'document[.]body[.]innerHTML ?= ?['"][^'"]+['"];'/,
  },
];

export default {
  code,
  steps,
};
