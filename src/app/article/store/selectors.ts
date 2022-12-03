/* Store */
import { createFeatureSelector, createSelector } from "@ngrx/store";

/* Interfaces */
import { ArticleStateInterface } from "src/app/article/types/article-state.interface";

export const articleFeatureSelector = createFeatureSelector<ArticleStateInterface>('article')

export const isLoadingArticleSelector = createSelector(
    articleFeatureSelector,
    (state: ArticleStateInterface) => state.isLoading
)

export const errorsArticleSelector = createSelector(
    articleFeatureSelector,
    (state: ArticleStateInterface) => state.error
)

export const dataArticleSelector = createSelector(
    articleFeatureSelector,
    (state: ArticleStateInterface) => state.data
)
