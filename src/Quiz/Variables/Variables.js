const element = document.createElement('div');

export const Variables = () => {
  setTimeout(() => {
  });

  element.innerHTML = `
    <pre><code class="language-js">
      let x = 3;
      let y;
      let z = x + 2 * 4;
    </code></pre>
    <p>Which of the following correctly depicts the state of the program after these statements are executed?
  `;

  return element;
};
