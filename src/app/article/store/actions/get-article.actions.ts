/* Store */
import { createAction, props } from "@ngrx/store";

/* Action Types */
import { ActionTypes } from "src/app/article/store/actionTypes";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

/* Interfaces */
import { ArticlesInterface } from "src/app/shared/types/articles.interface";

// Action to obtain the article from the backend, by passing API url as param
export const getArticleAction = createAction(
    ActionTypes.GET_ARTICLES,
    props<{ slug: string }>()
)

export const getArticleActionSuccess = createAction(
    ActionTypes.GET_ARTICLES_SUCCESS,
    props<{ article: ArticlesInterface }>()
)

export const getArticleActionFailure = createAction(
    ActionTypes.GET_ARTICLES_FAILURE,
    props<{ error: BackendErrorsInterface }>()
)