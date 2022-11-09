const id = 'collisionFunction';

const story = `
  <h2>Столкновение Прямоугольников в Декартовой Системе Координат</h2>
`;

const code = `
  <h1>КОпетан, копетан, улыбнитесь</h1>
  <script>
    // Тебе нужно описать даную фукцею!
    // Сейчас она всегда возвращает FALSE
    function stolknylsoLi(x, y) {
      return false; 
    }

    function print(message) {
      document.body.innerHTML += \`<p>${message}</p>\`;
    }

    /**
     * --------2-------4---------6------> x
     * |       .       .         .
     * |       .       .         .
     * |       .       .         .
     * 2 . . . . .  .  ___________
     * |       .       |         |
     * 4 . . . x       |         |
     * |               |         |
     * 6 . . . . . . . |_________|
     * |             
     * |             
     * y             
     */
    print('2, 4');
    print(stolknylosLi(2, 4));

    /**
     * ----------------4----5----6------> x
     * |               .    .    .
     * 1 .  .  . .  .  .  . x    .
     * |               .         .
     * 2 . . . . .  . .___________
     * |               |         |
     * |               |         |
     * |               |         |
     * 6 . . . . . . . |_________|
     * |             
     * |             
     * y             
     */
    print('5, 1');
    print(stolknylosLi(5, 1));

    /**
     * ----------------4---------6-----8--> x
     * |               .         .     .
     * 1               .         . 
     * |               .         .     .
     * 2 . . . . .  . .___________
     * |               |         |     .
     * 4 .  . . .   .  | .  .  . | . . x
     * |               |         |
     * 6 . . . . . . . |_________|
     * |             
     * |             
     * y             
     */
    print('8, 4');
    print(stolknylosLi(8, 4));

    
  </script>
`;

export const steps = [
  {
    task: `
<p>
  Добавляем кораблек. Уписуем 
</p>
<pre><code>
&lt;img src="/img/ship.gif" /&gt;
</code></pre>
</p>
`,
    check: `Уписано &lt;img src="/img/ship.gif" /&gt;`,
    regexp: new RegExp(`<img src=['"]/img/ship[.]gif['"]\\s*/?>`),
  },
];

const skills = ['img'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
