const { ObjectId } = require('mongodb');
const Chat = require('../models/chat');

const chatController = {
  createRoomChat: async (data) => {
    const { userId, roomId } = data;
    try {
      const isExistUser = await Chat.findOne({ userId });
      if (isExistUser) {
        console.log('exist');
        return;
      }
      const newChat = new Chat({
        userId,
        rooms: [],
      });
      console.log('newChat', newChat);
      await newChat.save();
    } catch (error) {
      return error;
    }
  },
  newMessage: async (data) => {
    try {
      const { text, userId, createAt, attachments, roomId } = data;
      const o_id = new ObjectId(userId);
      const chat = await Chat.findOne({ _id: o_id });
      const rooms = {
        ...chat?.rooms,
        [roomId]: {
          messages: [
            {
              text,
              createAt,
              attachments,
              userId,
            },
          ],
        },
      };
      const updateDoc = {
        $set: {
          rooms,
        },
      };

      const result = await Chat.updateOne({ _id: o_id }, updateDoc);
      console.log('update mongo', result);
    } catch (error) {
      return error;
    }
  },
};

module.exports = chatController;
// {
//   id: ObjectId,
//   messages: [
//     {
//       id: ObjectId,
//       userId: String,
//       text: String,
//       createAt: Date,
//       attachments: [String],
//     },
//   ],
// },
