export const FileForm = ({ socket, student }) => {
  const form = document.createElement('form');
  form.id = 'file-form';
  form.setAttribute('method', 'post');
  form.setAttribute('enctype', 'multipart/form-data');
  form.setAttribute('action', '/sendFile');

  form.innerHTML = `
    <div>
      <input type="file" name="file">
    </div>
    <div>
      <input type="submit" value="Send file">
    </div>
  `;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get('file');
    if (file.name === '') {
      console.info('Chat: not sending file, as no file is selected');
      return;
    }

    const uploadResult = await fetch('/chat/file', {
      body: formData,
      method: 'post',
    });

    if (!uploadResult.ok) {
      alert('oshibka zogruzke. Rozhreweni formate: kortinke jpg, png, gif, ili mp4 video');
      return;
    } else {
      console.log('yspex zogruzke file!');
      form.querySelector('input[type="file"]').value = '';
    }

    const message = `![file.name](/upload/${file.name})`;

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
