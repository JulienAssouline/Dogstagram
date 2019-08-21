import { ADD_ARTICLE, FOUND_BAD_WORD, ADD_LIKE, REMOVE_LIKE, DATA_LOADED } from "../constants/action-types"



const initialState = {
  articles: [],
  likes: 0,
  badWords: [],
  remoteArticles: [],
}

// reducers produce the state of your application.

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      badWords: state.badWords.concat(action.payload)
    })
  }
  if (action.type === ADD_LIKE) {
        return {
          ...state,
          likes: state.likes
        }
  }
  if (action.type === REMOVE_LIKE) {
    return {
          ...state,
          likes: state.likes
        }
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }
  return state;
}

export default rootReducer;