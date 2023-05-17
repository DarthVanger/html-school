import { Timer } from './Timer.js';
import { Lety4ka } from './Lety4ka.js';
import { Lesson } from './Lesson.js';

//      'Литучка ООП',
//      'Array filter',
//      'Anonymous functions',
//      'Async/await (fetch)',
//      'Функция как свойство обьекта',

const html = `
  <h1>Lesson #48</h1>
  <div class="lesson-sections">
    <section class="pomodoro">
      <h2>Литучка ООП (50 min pomodoro)</h2>
      <article data-timer="50">
        <section class="content">
          <h2>ООП Литучка</h2>
          <p>
          <ol>
            <li> Створити нову папку, index.html </li>
            <li> У index.html підтягуєм <script src="app.js" type="module"></script> </li>
            <li> Створити class GameObject { x, y, width, height, htmlElement } у файлі GameObject.js </li>
            <li> Створити class Enemy extends GameObject { hp } у файлі Enemy.js - класс Enemy який наслідує GameObject, і додає до нього властивість hp. </li>
            <li> Створити class Player extends GameObject { hp } у файлі Player.js - класс Player який наслідує GameObject, і додає до нього властивість hp. </li>
            <li> Створити class Rocket extends GameObject { ammo, damage } у файлі Rocket - класс Rocket який наслідує GameObject, і додає до нього властивості: ammo, damage. </li>
            <li> Створити class Bullet extends GameObject { ammo, damage } у файлі Bullet - класс Bullet який наслідує GameObject, і додає до нього властивості: ammo, damage. </li>
          </ol>

          <h3>Додатков</h3>
          <ol>
            <li>
              Ми бачимо що клас Enemy такий самий як і Player. Обидва додають до GameObject властивість hp.<br>
              А Rocket - такий самий як і Bullet. Обидва додають до GameObject властивості ammo і damage.<br>
              Тобто ми можемо узагальнити дані класи.
            </li>
            <li> Створити новий клас class Snaryad extends GameObject { ammo, damage }. </li>
            <li> У Класі Rocket видаляємо все, і пишемо class Rocket extends Snariad { } . Це пустий клас, він просто наслідує все від Снаряду. <br>
              Ми робимо пустий клас просто для назви, і для подальшої можливості розширення функціоналу.<br>
              Поки що, Рокет є просто Снарядомм - наслідує Снаряд, і нічого до нього не додає 🙂 Тому пустий класс - пусті фігурні дужки піся назви класу.</li>
            <li>
              У Класі Bullet видаляємо все, і пишемо class Bullet extends Snariad { } . Пустий клас, який наслідує Снаряд.
            </li>
            <li>
              Так само узагальнуємо класи Player і Enemy: створюємо клас GameObjectWithHP extends GameObject { hp }.
            </li>
              <li>
              Класи Player і Enemy робимо пустими класами, які лиш наслідують GameObjectWithHP, і нічого до нього не додають 🙂
              </li>
            </ol>
          </p>
        </section>
      </article>
    </section>
  </div>
`;

export const Lesson48 = () => Lesson({ html });
