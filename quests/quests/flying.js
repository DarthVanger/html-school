const id = 'flying';

const code = `
<style>
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<body>
  <img src="/game/ship.gif" />
</body>
<script>

</script>
`;

export const steps = [
  {
    task: "|c|var korabel = document.querySelector('img');|ce|",
    check: "var korabel = document.querySelector('img')",
    regexp: /var\s+korabel\s*=\s*document\.querySelector\('img'\);/,
  },
  {
    task: "|c|var korabel = document.querySelector('img');\nkorabel.style.top = 200;|ce|",
    check: "korabel.style.top = 200;",
    regexp: /korabel\.style\.top\s*=\s*200;/,
  },
  {
    task: "|c|var korabel = document.querySelector('img');\nkorabel.style.top = 200;\nkorabel.style.left = 100;|ce|",
    check: "korabel.style.left = 100;",
    regexp: /korabel\.style\.left\s*=\s*100;/,
  },
];

const skills = ['style', 'position absolute', 'querySelector'];

export default {
  code,
  steps,
  skills,
  id,
};
