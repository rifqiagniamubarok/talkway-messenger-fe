import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    insertData: (state, action) => {
      const payload = action?.payload;
      state[payload?.contact?.room_chat_id] = payload;
    },
    insertOneData: (state, action) => {
      const { data, room_chat_id } = action.payload;
      let getChat = state[room_chat_id].data;

      getChat.push(data);
      state[room_chat_id].data = getChat;
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertData, insertOneData } = messageSlice.actions;

export default messageSlice.reducer;
