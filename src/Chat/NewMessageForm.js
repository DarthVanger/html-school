export const NewMessageForm = ({ student }) => {
  const form = document.createElement('form');
  form.id = 'new-message-form';
  form.innerHTML = `
    <div>
      ${student}: <input type="text" name="message"></input>
    </div>
    <div>
      <button type="submit">Send message</button>
    </div>
  `;

  return form;
};
