import * as socket from '../socket.js';
import { Author } from './Author.js';
import { Message } from './Message.js';
import { Date } from './Date.js';
import { NewMessageForm } from './NewMessageForm.js';
import { FileForm } from './FileForm.js';

export const Chat = (state) => {
  let messages = [];
  const element = document.createElement('div');
  element.id = 'chat';
  element.innerHTML = 'Loading...';

  const { student } = state;

  socket.addHandler('chat_receive_messages', handleChatReceiveMessages, { id: 'chat-rcv-msg' });

  setTimeout(() => {
    if (socket.socket.readyState === WebSocket.OPEN) {
      socket.sendJSON({ name: 'chat_get_messages' });
    }
  });

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
    if (Notification.permission === 'granted') {
        const notification = new Notification("Привіт! Нотифікації від Напалеона включені!", {
          body: 'xuyedi',
          icon: '/img/den4ik.jpg',
        });
    }
  }

  function askNotificationsPermissions(event) {
    console.log('askNotificationsPermissions', event);
    Notification.requestPermission().then((permission) => {
      console.log('permission: ', permission);
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        console.log('permision granted!');
        const notification = new Notification("Привіт! Нотифікації від Напалеона включені!", {
          body: 'xuyedi',
          icon: '/img/den4ik.jpg',
        });
        console.log('notification: ', notification);
      }
    });
  }

  function render({ messages }) {
    element.innerHTML = ``;

    let notificationsButton;
    if (Notification.permission !== 'granted') {
      notificationsButton = document.createElement('button');
      notificationsButton.innerHTML = `Turn on Notifications`;
      notificationsButton.addEventListener('click', askNotificationsPermissions);
    } else {
      notificationsButton = document.createElement('div');
      notificationsButton.innerHTML = `Notifications are enabled ✅`;
    }
    element.append(notificationsButton);

    const newMessageForm = NewMessageForm({ socket, student });
    element.append(newMessageForm);
    
    const fileForm = FileForm({ socket, student });
    element.append(fileForm);


    for (let message of messages) {
      const post = document.createElement('article');
      post.className = 'post';
      post.append(Author(message));
      post.append(Date(message));
      post.append(Message(message));

      element.append(post);
    }
  };

  return element;
};
