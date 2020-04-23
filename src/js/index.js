import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

/**
 * Connects the store to the app
 */
window.store = store;
window.addArticle = addArticle;