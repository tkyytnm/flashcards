import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      return {
        topics: {
          ...state.topics,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            icon: action.payload.icon,
            quizIds: []
          }
        }
      };
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const addTopic = topicsSlice.actions.addTopic;
export const topicsReducer = topicsSlice.reducer;
