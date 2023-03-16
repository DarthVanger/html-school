export const NewMessageForm = ({ student }) => {
  const form = document.createElement('form');
  form.id = 'new-message-form';
  form.innerHTML = `
    <div>
      <textarea rows="4" name="message"></textarea>
    </div>
    <div>
      <button type="submit">Send message</button>
    </div>
  `;

  return form;
};
