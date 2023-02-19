const id = 'whileLoop';

const story = `
  <h2>While цикл</h2>

  <p>
    Сразу перемер:
    <pre><code>
      let skokoRaz = 0;
      while (skokoRaz < 10) {
        document.body.innerHTML += 'Hello World.'
        skokoRaz = skokoRaz + 1;
      }
    </code></pre>
   5 строк кода дороже тысячи слов... ))
  </p>


  <p>
    Чтобы сделать цикел <code>while</code> нужно написать слово while в коде... :) Потом пробел, круглые скобки, и фигурные скобки
    <pre><code>
      while (условее) { код который выполнять }
    </code></pre>
  </p>

  <p>
    Пока условие выполняется, цикл будет выполнять код в фигурных скобках по кругу. Если успловие всегда <code>true</code> - цикл будет выполняться бесконечно, вкладка браузера зависнет :)
  </p>

  <p>
    Поэтому чтобы выполнить код 10 раз, мы обьявляем переменную <code>skokoRaz = 0;</code>, а каждое выполнение кода в цикле прибавляем туда единичку <code>skokRaz = skokoRaz + 1</code>.
  </p>

  <p>
    Таким образом, мы можем выполнить любой код 10 раз или 100 раз - сколько захотим :)
  </p>

  <p>
    По суте мы создаем счетчик, и говорим "пока счетчик меньше 10, делай вот это { код }".
  </p>
`;

const code = `
  <h1>Учим Цикле</h1>
  <script>
  </script>
`;

export const steps = [
  {
    task: `
<p>
  Для начала создадим наш счетчик - создай переменную <code>let skokoRaz = 0;</code>
</p>
`,
    check: `Уписано <code>let skokoRaz = 0;</code>`,
    regexp: new RegExp(`let\s+skokoRaz\s*=\s*0;?`),
  },
  {
    task: `
<p>
  Молодца. Теперь <code>while</code> пустой пишем <code>while () {}</code>. Синтоксис такой же как у <code>if () {}</code> да и на синтоксес функцей похож тоже :)
</p>
`,
    check: `Уписано <code>let skokoRaz = 0;</code>`,
    regexp: new RegExp(`while\s*[(]\s*[)]\s*{\s*}`),
  },
  {
    task: `
<p>
  Теперь в цикле увеличиваем счетчик - в фигурные скобки пиши 
  <pre><code>
    while () {
      skokoRaz = skokoRaz + 1;
    }
  </code></pre>
</p>
`,
    check: `Уписано <code>{ skokoRaz = +1; }</code>`,
    regexp: new RegExp(`{\s*skokoRaz\s*=\s*skokoRaz\s*[+]\s*1`),
  },
  {
    task: `
<p>
  Наконец, мы можем добавить условие в круглые скобки:
  <pre><code>
    while (skokoRaz < 10) {
      skokoRaz = skokoRaz + 1;
    }
  </code></pre>
</p>
`,
    check: `Уписано <code>while ( skokoRaz < 10)</code>`,
    regexp: new RegExp(`while\s*[(]\s*skokoRaz\s*[<]\s*10[)]`),
  },
  {
    task: `
<p>
  Код теперь рабочий! Но на экран мы ничего не выводим...
</p>

</p>
  Довай же выведем! :) Пиши <code>document.body.innerHTML += 'xuy4ek!</code>' ВНУТРЬ фигруных скобок, т.е. ВНУТРЬ цикла.

  <pre><code>
    while (skokoRaz < 10) {
      skokoRaz = skokoRaz + 1;
      document.body.innerHTML += 'xuy4ek!';
    }
  </code></pre>
</p>
`,
    check: `Уписано <code>document.body.innerHTML += 'xuy4ek!'; ВНУТРЬ цикла</code>`,
    regexp: new RegExp(`while\s*[(]\s*skokoRaz\s*[<]\s*10[)]\s*[{][^}]+document[.]body[.]innerHTML\s*[+][=]\s*[']xuy4ek[!]['];?\s*}`),
  },
  {
    task: `
<p>
  Вывелся текст у ДокУмент 10 раз?
</p>

<p>
  Выводи теперь 100 раз))
</p>

<p>
  Догадайся что нужно поменять....
</p>
`,
    check: `Уписано <code>while ( skokoRaz < 100)</code>`,
    regexp: new RegExp(`while\s*[(]\s*skokoRaz\s*[<]\s*100[)]`),
  },
];

const skills = ['while-loop', 'variables', 'innerHTML'];

export default {
  story,
  code,
  steps,
  skills,
  id,
};
