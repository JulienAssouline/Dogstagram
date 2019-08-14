import { ADD_ARTICLE, FOUND_BAD_WORD, ADD_LIKE, REMOVE_LIKE } from "../constants/action-types"


export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload}
}

export function addWarning(payload) {
  return {type: FOUND_BAD_WORD, payload}
}

export function addLike(payload) {
  return { type: ADD_LIKE, payload }
}

export function removeLike(payload) {
  return { type: REMOVE_LIKE, payload}
}