import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMessage = createAsyncThunk('fetchMessage', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/greeting/random', {headers: {
    Accept: 'application/json',
  }});
  return response.data
});

const initialState = {
  value: {},
  loading: false,
  error : '',
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.fulfilled, (state, action) => ({...state, value: action.payload}));
  },
});

export default messagesSlice.reducer;