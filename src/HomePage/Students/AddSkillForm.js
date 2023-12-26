import { getStudent } from '../../session.js';

export const AddSkillForm = ({ student, onSubmit }) => {
  const element = document.createElement('form');
  element.id = 'add-skill-form';

  const submitButton = document.createElement('button');

  const bankaTypeLabel = document.createElement('label');
  bankaTypeLabel.innerText = 'Banka type'
  element.append(bankaTypeLabel);
  const pointsTypeSelect = document.createElement('select');
  pointsTypeSelect.innerHTML = `
    <option value="banka">Banka</option>
    <option value="minysBanka">Minys Banka</option>
  `;
  element.append(pointsTypeSelect);

  const categoryLabel = document.createElement('label');
  categoryLabel.innerText = 'Category'
  element.append(categoryLabel);
  const categoryInput = document.createElement('input');
  categoryInput.type = "text";
  categoryInput.placeholder = "category";
  element.append(categoryInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Опис'
  element.append(descriptionLabel);
  const descriptionInput = document.createElement('input');
  descriptionInput.type = "text";
  descriptionInput.placeholder = "description";
  element.append(descriptionInput);

  const pointsLabel = document.createElement('label');
  pointsLabel.innerText = 'О4ки'
  element.append(pointsLabel);
  const pointsInput = document.createElement('input');
  pointsInput.type = "text";
  pointsInput.placeholder = "points";
  element.append(pointsInput);

  const userStudent = getStudent();

  const submittedByElement = document.createElement('div');
  submittedByElement.innerText = `Submitted by: ${userStudent}`
  element.append(submittedByElement);

  submitButton.type = 'submit';
  submitButton.innerText = 'Add experience';
  element.append(submitButton);

  const handleSubmit = event => {
    event.preventDefault()

    const type = pointsTypeSelect.value;
    const category = categoryInput.value;
    const points = Number(pointsInput.value);
    const description = descriptionInput.value;

    if (!type || !category || !points || !description) {
      alert('Посмотри повнимательнее, не все поля заполнены...');
    }

    const body = {
      type,
      category,
      points,
      description,
      submittedBy: userStudent,
    }

    fetch(`/experience/${student}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    onSubmit();
  }

  element.addEventListener('submit', handleSubmit);
  return element;
}
