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
    messages.unshift(newMessage);
    render({ messages });

  }

  function render({ messages }) {
    element.innerHTML = ``;

    const newMessageForm = NewMessageForm({ student });
    element.append(newMessageForm);


    for (let message of messages) {
      const post = document.createElement('article');
      post.className = 'post';
      post.append(Author(message));

      const dateAndMessage = document.createElement('div');
      dateAndMessage.append(Date(message));
      dateAndMessage.append(Message(message));
      post.append(dateAndMessage);

      element.append(post);
    }

    newMessageForm.addEventListener('submit', (e) => {
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
  };

  return element;
};
