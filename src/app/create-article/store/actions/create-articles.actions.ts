/* Store */
import { createAction, props } from "@ngrx/store";

/* Custom Action Types */
import { ActionTypes } from "src/app/create-article/store/actionTypes";

/* Custom Interfaces */
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { ArticleInputInterface } from "src/app/shared/types/article-input.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export const createArticleAction = createAction(
    ActionTypes.CREATE_ARTICLES,
    props<{ articleInput: ArticleInputInterface }>()
)

export const createArticleActionSuccess = createAction(
    ActionTypes.CREATE_ARTICLES_SUCCESS,
    props<{ article: ArticlesInterface }>()
)

export const createArticleActionFailure = createAction(
    ActionTypes.CREATE_ARTICLES_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)