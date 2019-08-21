import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types"
import axios from "axios"

export function getData() {
  return async function(dispatch) {
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return dispatch({ type: DATA_LOADED, payload: result.data })
  }
}

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload}
}



