import { db } from '../db/db.js';

// Handle chat socket messages from frontend
export const chatSocketHandler = ({
  data,
  wsSendAll,
}) => {
  const { payload } = data;

  if (!db.data.chat) {
    db.data.chat = [];
  }

  if (data.name == 'chat_get_messages') {
    handleChatGetMessages(payload);
  }
  if (data.name == 'chat_new_message') {
    handleChatNewMessage(payload);
  }


  function handleChatGetMessages (payload) {
    wsSendAll({name: 'chat_receive_messages', payload: db.data.chat});
  };

  // Handle new message created by a user on frontend
  function handleChatNewMessage (payload) {
    const { author, message } = payload;
    const date = new Date();
    const dateString = date.toISOString();
    const newMessage = {
      date: dateString,
      author,
      message,
    };

    db.data.chat.unshift(newMessage);

    wsSendAll({
      name: 'chat_new_message',
      payload: newMessage,
    });

    db.write();
  };
};
