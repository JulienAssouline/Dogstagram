import { ADD_ARTICLE, FOUND_BAD_WORD, ADD_LIKE, REMOVE_LIKE } from "../constants/action-types"



const forbiddenWords = ["spam", "money"]

export const forbiddenWordsMiddleware = ({getState, dispatch}) => (next) => (action) => {

  if (action.type === ADD_ARTICLE) {
    getState().badWords = [];

        const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word))
        if (foundWord.length) {
          action.type = FOUND_BAD_WORD;
          return next(action)
        }
      }
      return next(action)
}

export const likesMiddleware = ({getState, dispatch}) => (next) => (action) => {
  if (action.type === ADD_LIKE) {
    action.type = REMOVE_LIKE
    getState().likes = getState().likes + 1
  }
  else if (action.type === REMOVE_LIKE) {
    action.type = ADD_LIKE
    getState().likes = getState().likes - 1
  }
  return next(action)
}

