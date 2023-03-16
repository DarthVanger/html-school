import * as socket from '../socket.js';
import { Author } from './Author.js';
import { Message } from './Message.js';
import { Date } from './Date.js';
import { NewMessageForm } from './NewMessageForm.js';

export const Chat = (state) => {
  let messages = [];
  const element = document.createElement('section');
  element.id = 'chat';
  element.innerHTML = 'Loading...';

  const { student } = state;

  socket.addHandler('chat_receive_messages', handleChatReceiveMessages);

  function handleChatReceiveMessages(payload) {
    console.debug('handleChatReceiveMessages: ', payload);
    messages = payload;
    render({ messages });
    socket.addHandler('chat_new_message', handleChatNewMessage);
  }

  function handleChatNewMessage(payload) {
    console.debug('handleChatNewMessage: ', payload);
    const newMessage = payload;
    messages.push(newMessage);
    render({ messages });

  }

  function render({ messages }) {
    element.innerHTML = ``;

    const newMessageForm = NewMessageForm({ student });
    element.append(newMessageForm);

    for (let message of messages) {
      element.append(Author(message));
      element.append(Date(message));
      element.append(Message(message));
    }

    newMessageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const message = formData.get('message');
      const payload = {
        author: student,
        message,
      };

      socket.sendJSON({
        name: 'chat_new_message',
        payload,
      });
    });
  };

  return element;
};
