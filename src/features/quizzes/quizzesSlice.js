import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, action) {
      return {
        quizzes: {
          ...state.quizzes,
          [action.payload.id]: {
            id: action.payload.id,
            name: action.payload.name,
            topicId: action.payload.topicId,
            cardIds: action.payload.cardIds
          }
        }
      };
    }
  }
});

export const addQuizForTopicId = (payload) => {
  return (dispatch) => {
    dispatch(addQuize(payload));
    dispatch(addQuizId({
      quizId: payload.id,
      topicId: payload.topicId
    }));
  }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const addQuize = quizzesSlice.actions.addQuiz;
export const quizzesReducer = quizzesSlice.reducer;
