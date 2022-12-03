/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Custom Interfaces */
import { CreateArticleStateInterface } from "src/app/create-article/store/types/create-article-state.interface";

export const authFeatureSelector = createFeatureSelector<CreateArticleStateInterface>('createArticle')

export const isSubmittingCreateArticleSelector = createSelector(
    authFeatureSelector,
    (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
)

export const validationErrorsCreateArticleSelector = createSelector(
    authFeatureSelector,
    (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
)
