/* Store */
import { Action, createReducer, on } from "@ngrx/store";

/* Interfaces */
import { CreateArticleStateInterface } from "src/app/create-article/store/types/create-article-state.interface";

/* Custom Actions */
import { createArticleAction, createArticleActionSuccess, createArticleActionFailure } from "src/app/create-article/store/actions/create-articles.actions";

const initialState: CreateArticleStateInterface = {
    isSubmitting: false,
    validationErrors: null
}

const createArticleReducer = createReducer(
    initialState,
    on(createArticleAction, (state): CreateArticleStateInterface => ({
        ...state,
        isSubmitting: true,
    })),
    on(createArticleActionSuccess, (state) : CreateArticleStateInterface => ({
        ...state,
        isSubmitting: false,
    })),
    on(createArticleActionFailure, (state, action): CreateArticleStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
    return createArticleReducer(state, action);
}