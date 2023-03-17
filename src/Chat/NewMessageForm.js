export const NewMessageForm = ({ socket, student }) => {
  const form = document.createElement('form');
  form.id = 'new-message-form';
  form.innerHTML = `
    <div>
      <textarea rows="4" name="message"></textarea>
    </div>
    <div>
      <input type="submit" value="Send Message">
    </div>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    if (message === '') {
      console.info('Chat: not sending empty message');
      return;
    }

    const payload = {
      author: student,
      message,
    };

    socket.sendJSON({
      name: 'chat_new_message',
      payload,
    });
  });

  return form;
};
