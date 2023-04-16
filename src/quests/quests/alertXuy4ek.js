const id = 'alertXuy4ek';

const code = `
<h1>Alert Xuy4ek</h1>
`;


const steps = [
  {
    regexp: /<script>[\n]/,
    task: 'Вписуй &lt;script&gt;, блять)',
    check: 'Прописано &lt;script&gt;, и энтер блять)',
  },
  {
    regexp: /<\/script>/,
    task: 'Красава! Теперь закрывающий &lt;/script&gt;! :)',
    check: 'Прописан &lt;/script&gt;',
  },
  {
    regexp: /<script>\s*alert\s*[^<]*<\/script>/,
    task: 'ОГОНЬ! Внутри тега пиши alert',
    check: 'Внутри &lt;script&gt; прописан alert',
  },
  {
    regexp: /<script>\s*alert[(]\s*[^<]*<\/script>/,
    task: 'Скобку круглую открывающую)',
    check: 'Прописано alert(',
  },
  {
    regexp: /<script>\s*alert[(]['"][^<]*<\/script>/,
    task: 'Кавычки)',
    check: 'Прописано alert("',
  },
  {
    regexp: /<script>\s*alert[(]['"][^'"<\s]+[^<]*<\/script>/,
    task: 'хуйчек )',
    check: 'Прописано alert("xyu4ek',
  },
  {
    regexp: /<script>\s*alert[(]['"][^'"]+['"]\s*[^<]*<\/script>/,
    task: 'Закрывающие кавычки)',
    check: 'Прописано alert("xyu4ek"',
  },
  {
    regexp: /<script>\s*alert[(]['"][^'"]+['"][)]\s*[^<]*<\/script>/,
    task: 'Закрыть круглую скобку)',
    check: 'Прописано alert("xyu4ek")',
  },
  {
    regexp: /<script>\s*alert[(]['"][^'"]+['"][)];\s*[^<]*<\/script>/,
    task: 'Точку с запятой блять!',
    check: 'Прописано alert("xyu4ek");',
  },
];

const skills = ['alert', 'xuy4ek'];

export default {
  code,
  steps,
  skills,
  id,
};
