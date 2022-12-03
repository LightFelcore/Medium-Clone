/* Store */
import { createAction, props } from "@ngrx/store";

/* Action Types */
import { ActionTypes } from "src/app/article/store/actionTypes";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

// Action to delete the article from the backend, by passing API url as param
export const deleteArticleAction = createAction(
    ActionTypes.DELETE_ARTICLE,
    props<{ slug: string }>()
)

export const deleteArticleActionSuccess = createAction(
    ActionTypes.DELETE_ARTICLE_SUCCESS
)

export const deleteArticleActionFailure = createAction(
    ActionTypes.DELETE_ARTICLE_FAILURE,
    props<{ error: BackendErrorsInterface }>()
)