export const Lesson32 = () => {
  const element = document.createElement('article');
  element.innerHTML = `
    <h1>Lesson #32</h1>
    <h2>Summary</h2>
    <ol>
      <li>Літучка - <a href="http://napaleon.space/#/katakombi">Катакомби </a> - там 3 завдання, як тіки виконуєш одне - показується друге ) minus2, times2, sum - це 3 завдання - 3 фунцкії написати )</li>
      <li>Гепард. Фізика. Як попасти в нерухому точку? Пояснює Тоні і Джон.</li>
      <li>Гра
        <ol>
          <li>
          <a href="https://github.com/DarthVanger/ghost-of-kyiv/commit/b593ea316ac9660bc399540da90c66d2a0aa4bd7">fix enemy position after collision</a> - Вані не подобалось що стіна при зіткненні з ракетою зміщюється на 800 вниз, і вилітаючи за екран ми можемо з нею зіштовхнутись) С новим реактивним двигуном (швидкістю літака) це стало проблемою :) <br>
          Тепер ми рухаємо стіну в x = -2000, щоб вона була далеко зліва за екраном і вже точно нам не заважала :)
          </li>
          <li>
            <a href="https://github.com/DarthVanger/ghost-of-kyiv/commit/d4d66abbb90ddde82ea1c0d78b4b724e1e6d458e">change CheckEnemyRocketCollision() parameters enemy 1,2 into object</a> - У функції <code>checkEnemyRocketCollision()</code> тепер приймаємо об'єкт <code>enemy</code>, замість того щоб приймати 2 параметри <code>enemyX</code> та <code>enemyY</code>
          </li>
          <li>
            <a href="https://github.com/DarthVanger/ghost-of-kyiv/commit/25338a687f1b266d358d8391a6123c9f04cc503c">Delete unused variable</a> &mdash; видалили 4 змінні які ніде не використовувалися в коді: <code>enemy2X, enemy3X, enemy2Y, enemy3Y</code> (натомість ми вже використовуємо об'єкти enemy2, enemy3, тому старі змінні вже не потрібіні) &mdash; це все шо Джон спромігся зробити по грі за 10 хв )) Тому закомітили)
          </li>
          <li>
            <a href="https://github.com/DarthVanger/ghost-of-kyiv/commit/863aebe6e04744c3f8bf15ec346836fe6bcb86e7">make bullet autonavigated</a> &mdash; зробили кулю самонавідною :) Тобто раніше ми стріляли в точку де знаходився Літак, а тепер ми кожен FPS у функції <code>step()</code> змінюємо напрямок кулі в сторону Літака. Тобто коли літак рухається, куля старається за ним уже в польоті кожен FPS )) Як самонавідна ракета :)
          </li>
        </ol>
      </li>
      <li>English: Prodigy Breath, Coolio Gangsta Paradise</li>
      <li>English Speaking Club: chat in English :) 15 min</li>
      <li>Опублікували Гру в Інторонети!! <a href="https://darthvanger.github.io/ghost-of-kyiv/">https://darthvanger.github.io/ghost-of-kyiv/</a> &mdash; як це робиться &mdash; гугли "Publish website github". Але врахуй, у тебе нема прав доступу до Settings нашого ghost-of-kyiv. Тільки НАПАЛЕОН має доступ до Settings. Тому у тебе вони просто не показуються. Якщо ти створиш свій репозиторій - ти побачиш вкладку Settings і там Pages, і там зможеш опублікувати сайт :)</li>
      <li>Тоні Опублікував свій сайт в Інторонети!! Перший нах!1 з усіх :) Ні в кого нема більше сайту в Інторнонеті) <a href="https://antonpetlovanyi.github.io/my-personal-website/">&gt;&gt;ССІЛКЕ&lt;&lt;</li>
  `;

  return element;
};
