import { encodeHTML } from '../utils.js';

//  https://stackoverflow.com/a/12347050/1657101
const setToday = (datepicker) => {
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
  datepicker.value = today;
}

let listenerAdded = false;
const element = document.createElement('form');
element.id = 'homework-form';
export const HomeworkForm = ({ skill, onSubmit }) => {
  setTimeout(() => {
    const datepicker = element.querySelector('input[type="date"]');
    setToday(datepicker);

    if (!listenerAdded) {
      listenerAdded = true;
      element.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(element);
        const textarea = element.querySelector('textarea');
        formData.set('description', textarea.value);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        onSubmit(json);
      });
    }
  });
  element.innerHTML = `
    <h2>Новая домашка по скилу ${encodeHTML(skill.text)}</h2>
    <label>Че делал )
      <textarea rows="4" name="description"></textarea>
    </label>
    <label>Когэда )
      <input type="date" name="date" />
    </label>
    <button type="submit">Submit</button>
  `;
  return element;
};
