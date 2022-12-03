/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { ArticleStateInterface } from "src/app/article/types/article-state.interface";

/* Custom Actions */
import { getArticleAction, getArticleActionSuccess, getArticleActionFailure } from "src/app/article/store/actions/get-article.actions";

const initialState : ArticleStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const articleReducer = createReducer(
    initialState,
    on(getArticleAction, (state: ArticleStateInterface) =>({
        ...state,
        isLoading: true
    })),
    on(getArticleActionSuccess, (state, action): ArticleStateInterface => ({
        ...state,
        isLoading: false,
        data: action.article
    })),
    on(getArticleActionFailure, (state, action): ArticleStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducers(state: ArticleStateInterface, action: Action) {
    return articleReducer(state, action);
}
