import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types"



const forbiddenWords = ["spam", "money"]

export const forbiddenWordsMiddleware = ({getState, dispatch}) => (next) => (action) => {

  getState().badWords = [];

  if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word))
        if (foundWord.length) {
          action.type = FOUND_BAD_WORD;
          return next(action)
        }
      }
      return next(action)
}

