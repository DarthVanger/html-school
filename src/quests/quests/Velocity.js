import { FrictionTable } from './FrictionTable.js';

const id = 'velocity';

const story = `
  <h1>Velocity (англ. - Скорость, СПИД)</h1>
  <h2>Friction Table (Таблица Трения)</h2>
  ${FrictionTable()}
`;

const code = `
<h1>Velocity</h1>
<script>
  
</script>
`;

const steps = [
  {
    task: "-", 
    check: "-",
    regexp: /aaa/,
  },
];

const skills = ['physics', 'kinematics', 'velocity'];

export default {
  code,
  story,
  steps,
  skills,
  id,
};
