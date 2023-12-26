import { getStudent } from '../../session.js';

export const AddSkillForm = ({ student, onSubmit }) => {
  const element = document.createElement('form');
  element.id = 'add-skill-form';

  const submitButton = document.createElement('button');

  const categoryInput = document.createElement('input');
  categoryInput.type = "text";
  categoryInput.placeholder = "category";
  element.append(categoryInput);

  const descriptionInput = document.createElement('input');
  descriptionInput.type = "text";
  descriptionInput.placeholder = "description";
  element.append(descriptionInput);

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

    const category = categoryInput.value;
    const points = Number(pointsInput.value);
    const description = descriptionInput.value;

    const body = {
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
