import { ADD_ARTICLE  } from "../constants/action-types"

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        /**
         * Don't use push() no an immutable way
         */
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;