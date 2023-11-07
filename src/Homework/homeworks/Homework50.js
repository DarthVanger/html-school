export const Homework50 = () => `
  <h2>ДОМАШЕКА #50</h2>    

  <h3>NASA API - Curiosity Rover</h3>

  <p>
     Домашка: зробити сайт який дозволяє дивитися фото зроблені марсоходом Curiosity.
    <ol>
      <li>При загрузці сайту показуєм 5 фото з першого марсіанського дня (сола).</li>
      <li>Має бути кнопка "next sol", яка збільшує сол на 1, і показує 5 фото наступного марсіанського дня.</li>
      <li>Поки чекаєм HTTP відповіді - показувати loading spinner (кружечко шо крутиться типу загрузка йде).</li>
    </ol>
  </p>

  <p>
    Документція API: <a href="https://api.nasa.gov/">https://api.nasa.gov/</a> (розділ Mars Rover Photos)
  </p>

  <p>
    Приклад запиту (відповідь можна побачити у браузері): <a href="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&page=1&api_key=DEMO_KEY">https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&page=1&api_key=DEMO_KEY</a>
  </p>

  <p>
    <ul>
      <li><code>page=1</code> завжди передаємо - це дає нам перші 25 фото даного солу. Більше нам і не треба, тому <code>page=2</code> і т.д. не юзаєм.</li>
      <li><code>sol=1</code> - це значить перший марсіанський день. Це те що нам треба змінювати по натисненню на кнопку.</li>
      <li>
        <code>api_key</code> - це ключ доступу до Nasa API, його треба передавати з кожним запиитом. Згенерувати свій власний ключ доступу можна на сайті <a href="https://api.nasa.gov/">https://api.nasa.gov</a>
      </li>
    </ul>
  </p>
`;
