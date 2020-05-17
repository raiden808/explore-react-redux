import { ADD_ARTICLE,DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

/**
 * Ajax API call via redux, using redux-thunk for api call
 */
export function getData() {
  return { type: "DATA_REQUESTED" };
}


