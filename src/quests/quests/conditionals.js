const id = 'conditionals';

const code = `
<h1>Conditionals</h1>

<script>
  
</script>
`;

export const steps = [
  {
    task: "-",
    check: "-",
    regexp: /document[.]body[.]innerHTML ?= ?['"][^'"]+['"];/,
  },
];

const skills = ['if'];

export default {
  code,
  steps,
  skills,
  id,
};
