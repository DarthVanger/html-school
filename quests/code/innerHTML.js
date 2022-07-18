const innerHTML = `
<body>
  <h1>9 esm zagolovok</h1>
</body>

<script>
  
</script>
`;

export default innerHTML;

// not used yet :)
export const steps = [
  {
    task: "Чтобы изменить текст в документе через <script>, нужно прописать ",
  },
  {
    check: "Прописано document.body.innerHTML = '4to to';",
    regexp: /'document[.]body[.]innerHTML ?= ?['"][^'"]+['"];'/,
  },
];
