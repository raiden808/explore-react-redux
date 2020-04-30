import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action){

            /**
             * Only triggers if event dispatch is add_article
             */
            if(action.type === ADD_ARTICLE){
                
                /**
                 * Check if there's a forbidden word
                 */
                const foundWord = forbiddenWords.filter(word => 
                    action.payload.title.includes('word')    
                );

                /**
                 * Triggers dispatch if error is found
                 */
                if(foundWord.length){
                    return dispatch({type:"FOUND_BAD_WORD"})
                }
            }

            return next(action);
        };
    };
}